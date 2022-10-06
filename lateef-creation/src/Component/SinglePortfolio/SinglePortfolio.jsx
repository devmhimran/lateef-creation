import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SinglePortfolioDetail from '../SinglePortfolioDetail/SinglePortfolioDetail';
import Loading from '../Loading/Loading'
const SinglePortfolio = () => {

    const {id} = useParams();
    const [portfolio, setPortfolio] = useState([]);
    let portfolioSave = [];
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/lateefcreation/lateef-creation-portfolio-data/main/portfolio-data.json')
        .then(res => res.json())
        .then(data => setPortfolio(data))
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