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
            <PortfolioItem
                title={'Website uiux'}
                category={'website-uiux'}
                titleEx={'design'}
                data={portfolio}
                home={'home'}
                textAlign={'text-start'}
                >
            </PortfolioItem>
            <PortfolioItem
                title={'APP uiux'}
                category={'app-uiux'}
                titleEx={'design'}
                data={portfolio}
                home={'home'}
                textAlign={'text-end'}
                >
            </PortfolioItem>
            <PortfolioItem
                title={'Creative LOGO'}
                category={'creative-logo-design'}
                titleEx={'design'}
                data={portfolio}
                home={'home'}
                textAlign={'text-start'}
                >
            </PortfolioItem>
        </div>
    );
};

export default Portfolio;