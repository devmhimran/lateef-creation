import React, { useEffect, useState } from "react";
import PageTitle from "../PageTitle/PageTitle";
import SidebarTitle from "../SidebarTitle/SidebarTitle";
import axios from "axios";
import Cookies from "js-cookie";
import { Toaster, toast } from "react-hot-toast";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

const AllProject = () => {
  //   const [portfolio, setPortfolio] = useState([]);
  const navigate = useNavigate();
  const getProjects = () =>
    fetch("https://lateef-creation-server.vercel.app/portfolio-admin-data", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${Cookies.get("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          navigate("/ltc-admin-login");
          Cookies.remove("accessToken");
        }
        return res.json();
      })
      .then((data) => data);

  const {
    data: portfolio,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-projects"],
    queryFn: getProjects,
  });

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  console.log(portfolio);

  //   useEffect(() => {
  //     fetch("https://lateef-creation-server.vercel.app/portfolio-admin-data", {
  //       method: "GET",
  //       headers: {
  //         "Content-type": "application/json",
  //         authorization: `Bearer ${Cookies.get("accessToken")}`,
  //       },
  //     })
  //       .then((res) => {
  //         if (res.status === 401 || res.status === 403) {
  //           signOut(auth);
  //           navigate("/ltc-admin-login");
  //           Cookies.remove("accessToken");
  //         }
  //         return res.json();
  //       })
  //       .then((data) => setPortfolio(data));
  //   }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are your sure?");
    if (proceed) {
      const url = `https://lateef-creation-server.vercel.app/portfolio-data/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            Cookies.remove("accessToken");
          }
          return res.json();
        })
        .then((data) => {
          const remainingData = portfolio.filter(
            (portfolioData) => portfolioData._id !== id
          );
          setPortfolio(remainingData);
          if (data.deletedCount === 1) {
            toast.success("Successfully Delete!");
          } else {
            toast.error("Something went wrong!");
          }
        });
    }
  };

  return (
    <div className="add__project__main">
      <PageTitle title={"All Project"}></PageTitle>
      <SidebarTitle title="All Project" />
      <div className="my-6">
        <table className="table-auto w-full">
          <thead className="text-left bg-gray-100 p-2">
            <tr className="p-2">
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {[...portfolio].reverse().map((data) => (
              <tr key={data._id}>
                <td className="p-2 border border-slate-300">
                  <img className="w-20" src={data.thumbnail} alt={data.name} />
                </td>
                <td className="p-2 border border-slate-300 text-gray-100">
                  <button onClick={() => navigate(`/portfolio/${data._id}`)}>
                    {data.name.slice(0, 50)}
                  </button>
                </td>
                <td className="p-2 border border-slate-300 text-gray-100">
                  {data.category}
                </td>
                <td className="p-2 border border-slate-300 text-gray-100">
                  <span className="flex">
                    <button>Edit</button>
                    <span className="mx-2">|</span>
                    <button onClick={() => handleDelete(data._id)}>
                      Delete
                    </button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default AllProject;
