import React, { useEffect, useState } from 'react';
import PageTitle from '../PageTitle/PageTitle';
import SidebarTitle from '../SidebarTitle/SidebarTitle';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Toaster, toast } from 'react-hot-toast';
import { signOut } from 'firebase/auth';
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const AllTestProject = () => {
  const [portfolio, setPortfolio] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    fetch('https://lateef-creation-server.vercel.app/portfolio-admin-data', {
      method: 'GET',
      headers: {
        "Content-type": "application/json",
        "authorization": `Bearer ${Cookies.get('accessToken')}`
      },
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          navigate('/ltc-admin-login')
          Cookies.remove('accessToken')
        }
        return res.json()
      })
      .then(data => setPortfolio(data))

    // axios.get('https://lateef-creation-server.vercel.app/portfolio-data')
    //     .then(data => setPortfolio(data.data))

  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm('Are your sure?');
    if (proceed) {

      const url = `https://lateef-creation-server.vercel.app/portfolio-data/${id}`;
      fetch(url, {
        method: 'DELETE',
        headers: {
          "Content-type": "application/json",
          "authorization": `Bearer ${Cookies.get('accessToken')}`
        },
      })
        .then(res => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            Cookies.remove('accessToken')
          }
          return res.json()
        })
        .then(data => {
          const remainingData = portfolio.filter(portfolioData => portfolioData._id !== id);
          setPortfolio(remainingData);
          if (data.deletedCount === 1) {
            toast.success('Successfully Delete!')
          } else {
            toast.error("Something went wrong!")
          }
        })
    }
  }

  return (
    <div className='add__project__main'>
      <PageTitle title={'All Project'}></PageTitle>
      <SidebarTitle title='All Project' />
      <div className='my-6'>
        {/* <table className="table-auto w-full">
          <thead className='text-left bg-gray-100 p-2'>
            <tr className='p-2'>
              <th className='text-center'>Image</th>
              <th className='text-center'>Name</th>
              <th className='text-center'>Category</th>
              <th className='text-center'>Option</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table> */}

        <div className='py-1 px-2 bg-white flex justify-between'>
          <p className=''>Image</p>
          <p className=''>Name</p>
          <p className=''>Category</p>
          <p className=''>Option</p>
        </div>

        <DragDropContext>
          <Droppable droppableId="all-projects">

            {(provided) => (
              <div className="portfolio" {...provided.droppableProps} ref={provided.innerRef}>
                {
                  [...portfolio].reverse().map((data, index) => {
                    return (
                      <Draggable key={data._id} draggableId='portfolio' index={index}>

                        {(provided) => (
                          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className='w-full flex items-center justify-between my-3 border border-white'>
                            <img className='w-20' src={data.thumbnail} alt={data.name} />
                            <button className='text-white' onClick={() => navigate(`/portfolio/${data._id}`)}>
                              {data.name.slice(0, 50)}
                            </button>
                            <p className='text-gray-100 text-center'>{data.category}</p>
                            <span className='flex text-slate-50'>
                              <button>Edit</button>
                              <span className='mx-2'>|</span>
                              <button onClick={() => handleDelete(data._id)}>Delete</button>
                            </span>
                          </div>
                        )}

                      </Draggable>
                    )
                  })}
              </div>
            )}

          </Droppable>
        </DragDropContext>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </div>
    </div>
  );
};

export default AllTestProject;