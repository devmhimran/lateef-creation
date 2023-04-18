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
import { RxHamburgerMenu } from 'react-icons/rx';
import { useMutation, useQuery } from 'react-query';

const AllTestProject = () => {
  // const [portfolio, setPortfolio] = useState([]);
  const navigate = useNavigate();
  let content;

  const { data: portfolio, isLoading, isError } = useQuery('portfolio', () =>
  fetch('https://lateef-creation-server.vercel.app/portfolio-admin-data', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      authorization: `Bearer ${Cookies.get('accessToken')}`,
    },
  }).then((res) => {
    if (res.status === 401 || res.status === 403) {
      signOut(auth);
      navigate('/ltc-admin-login');
      Cookies.remove('accessToken');
    }
    return res.json();
  })
);




  const handleDelete = (id) => {
    const proceed = window.confirm('Are your sure?');
    if (proceed) {
      const url = `https://lateef-creation-server.vercel.app/portfolio-data/${id}`;
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
          authorization: `Bearer ${Cookies.get('accessToken')}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            Cookies.remove('accessToken');
          }
          return res.json();
        })
        .then((data) => {
          const remainingData = portfolio.filter(
            (portfolioData) => portfolioData._id !== id
          );
          // setPortfolio(remainingData);
          if (data.deletedCount === 1) {
            toast.success('Successfully Delete!');
          } else {
            toast.error('Something went wrong!');
          }
        });
    }
  };

  const updatePortfolio = (newPortfolio) => {
  console.log(newPortfolio)
  fetch('http://localhost:5000/portfolio-admin-data', {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      authorization: `Bearer ${Cookies.get('accessToken')}`,
    },
    body: JSON.stringify(newPortfolio),
  }
);}

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(portfolio);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    reorderedItem.index = result.destination.index;
    updatePortfolio(items);
    // setPortfolio(items);
  };



  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isError) {
  content = <div>Error loading portfolio data</div>;
  } else if (portfolio.length) {
    content = <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='portfolio'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {[...portfolio].reverse().map((data, index) => (
                <Draggable key={data._id} draggableId={data._id} index={index}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className='py-1 px-2 bg-white flex justify-between items-center my-1'
                    >
                      <span className='w-6'><RxHamburgerMenu/></span>
                      <div className='w-16 h-16 overflow-hidden'>
                        <img
                          className='h-full w-full object-cover'
                          src={data.thumbnail}
                          alt={data.name}
                        />
                      </div>
                      <p className=''>{data.name}</p>
                      <p className=''>{data.category}</p>
                      <div className='flex space-x-1'>
                        <button
                          className='text-red-600'
                          onClick={() => handleDelete(data._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  }else{
    content = <><h1>Data not found</h1></>
  }

  return (
    <div className='add__project__main'>
      <PageTitle title={'All Project'} />
      <SidebarTitle title='All Project' />
      <div className='my-6'>
        <div className='py-1 px-2 bg-white flex justify-between'>
          <p className=''>Image</p>
          <p className=''>Name</p>
          <p className=''>Category</p>
          <p className=''>Option</p>
        </div>

        {
          content
        }
      </div>
      <Toaster />
    </div>
  );
};

export default AllTestProject;