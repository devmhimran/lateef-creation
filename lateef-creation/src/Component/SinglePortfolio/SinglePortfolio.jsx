import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SinglePortfolioDetail from '../SinglePortfolioDetail/SinglePortfolioDetail';
import Loading from '../Loading/Loading'
const SinglePortfolio = () => {

    const {id} = useParams();
    const [portfolio, setPortfolio] = useState([]);
    let portfolioSave = [];
    useEffect(()=>{
        fetch('https://lateef-creation-v2.onrender.com/portfolio-data')
        .then(res => res.json())
        .then(data => {
            if(data){
                setPortfolio(data)
            }else{
                return <Loading></Loading>
            }
        })
    },[]);

    const portfolioDetail = portfolio.find(data => data._id === id);

    if(portfolioDetail){
        portfolioSave.push(portfolioDetail)
    }
    return (
        <div className='single__portfolio__data py-16 lg:py-36 mx-3 lg:mx-0'>  
            {
                portfolioSave.map(portfolioDetail => <SinglePortfolioDetail key={portfolioDetail._id} portfolioDetail={portfolioDetail}></SinglePortfolioDetail>)
            }
        </div>
    );
};

export default SinglePortfolio;