import React, { useEffect, useState } from 'react';
import PageTitle from '../PageTitle/PageTitle';
import SidebarTitle from '../SidebarTitle/SidebarTitle';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Toaster, toast } from 'react-hot-toast';

const AllProject = () => {
    const [portfolio, setPortfolio] = useState([]);
    useEffect(() => {
        // fetch('http://localhost:5000/portfolio-data')
        //     .then(res => res.json())
        //     .then(data => setPortfolio(data))
        //     .catch(err => setLoader(false))

        axios.get('http://localhost:5000/portfolio-data')
            .then(data => setPortfolio(data.data))

    }, []);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are your sure?');
        if (proceed) {

            const url = `http://localhost:5000/portfolio-data/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-type": "application/json",
                    "authorization": `Bearer ${Cookies.get('accessToken')}`
                },
            })
                .then(res => res.json())
                .then(data => {
                    const remainingData = portfolio.filter(portfolioData => portfolioData._id !== id);
                    setPortfolio(remainingData);
                    if(data.deletedCount === 1){
                        toast.success('Successfully Delete!')
                    }else{
                        toast.error("Something went wrong!")
                    }
                    console.log(data);
                })
        }
    }

    return (
        <div className='add__project__main'>
            <PageTitle title={'All Project'}></PageTitle>
            <SidebarTitle title='All Project' />
            <div className='my-6'>
                <table className="table-auto w-full">
                    <thead className='text-left bg-gray-100 p-2'>
                        <tr className='p-2'>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [...portfolio].reverse().map(data =>
                                
                                    
                                        <tr key={data._id}>
                                            <td className='p-2 border border-slate-300'>
                                                <img className='w-20' src={data.thumbnail} alt={data.name} />
                                            </td>
                                            <td className='p-2 border border-slate-300 text-gray-100'>{data.name.slice(0, 50)}</td>
                                            <td className='p-2 border border-slate-300 text-gray-100'>{data.category}</td>
                                            <td className='p-2 border border-slate-300 text-gray-100'>
                                                <span className='flex'>
                                                    <button>Edit</button>
                                                    <span className='mx-2'>|</span>
                                                    <button onClick={() => handleDelete(data._id)}>Delete</button>
                                                </span>
                                            </td>
                                        </tr>
                                   
                                
                            )
                        }
                    </tbody>
                </table>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </div>
        </div>
    );
};

export default AllProject;