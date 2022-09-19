import React, { useEffect, useState } from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPortfolio(data))
    }, []);
    return (
        <div className='portfolio__main pb-16 lg:pb-28 mx-3 lg:mx-0'>
            <PortfolioItem title={'Website uiux'} titleEx={'design'} data={portfolio.slice(0,3)} textAlign={'text-start'}></PortfolioItem>
            <PortfolioItem title={'APP uiux'} titleEx={'design'} data={portfolio.slice(0,3)} textAlign={'text-end'}></PortfolioItem>
            {/* {
                portfolio.slice(0,3).map(portfolioData => <PortfolioItem title={'Website uiux'} titleEx={'design'} data={portfolioData} textAlign={'text-end'}></PortfolioItem>)
            } */}
        </div>
    );
};

export default Portfolio;