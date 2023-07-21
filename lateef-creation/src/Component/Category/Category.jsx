import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../PageTitle/PageTitle";
import PortfolioItems from "../PortfolioItems/PortfolioItems";
import { useQuery } from "react-query";
import AllPortfolioSkeleton from "../Skeleton/AllPortfolioSkeleton";

const Category = () => {
  const { categoryName } = useParams();
  //   const [portfolio, setPortfolio] = useState([]);
  let categoryNameMain = categoryName.split("-").join(" ");
  let content;

  const getCategory = () =>
    fetch(`https://lateef-creation-server.vercel.app/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => data);

  const {
    data: portfolio,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-categorize-portfolio"],
    queryFn: getCategory,
  });

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) {
    return <AllPortfolioSkeleton />;
  }

  if (portfolio.length === 0) {
    content = (
      <>
        <h1 className="text-3xl text-center text-gray-400">
          Nothing Update Yet
        </h1>
      </>
    );
    console.log("data = 0");
  } else {
    content = (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...portfolio].reverse().map((portfolioItem) => (
            <PortfolioItems
              key={portfolioItem._id}
              portfolioItem={portfolioItem}
            ></PortfolioItems>
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="category__main container mx-auto max-w-screen-xl py-20 lg:py-32">
      <PageTitle title={categoryNameMain}></PageTitle>
      <div className="category__content mx-3 lg:mx-0">
        <h1 className="text-white text-3xl lg:text-5xl text-center uppercase">
          {categoryNameMain}
        </h1>
        <div className="category__portfolio mt-8 lg:mt-16">
          {portfolio ? <>{content}</> : <h1>No Data Found</h1>}
        </div>
      </div>
    </div>
  );
};

export default Category;
