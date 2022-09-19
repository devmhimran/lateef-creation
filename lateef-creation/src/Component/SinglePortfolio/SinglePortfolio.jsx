import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SinglePortfolio = () => {

    const {id} = useParams();
    const [portfolio, setPortfolio] = useState([]);
    let portfolioSave = [];
    useEffect(()=>{
        fetch('/public/data.json')
        .then(res => res.json())
        .then(data => setPortfolio(data))
    },[])

    console.log(id)
    

    const portfolioDetail = portfolio.find(data => data.id === id);

    // console.log(portfolioDetail)

    if(portfolioDetail){
        portfolioSave.push(portfolioDetail)
    }
    console.log(portfolioSave)

    return (
        <div>
            <h1>{id}</h1>
            {
                portfolioSave.map(portfolioDetail => console.log(portfolioDetail))
            }
        </div>
    );
};

export default SinglePortfolio;