import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PortfolioItems from '../PortfolioItems/PortfolioItems';
import { Link } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';

const PortfolioPage = () => {
    const [portfolio, setPortfolio] = useState([]);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        // fetch('https://lateef-creation-server.vercel.app')
        //     .then(res => res.json())
        //     .then(data => setPortfolio(data))
        //     .catch(err => setLoader(false))

        axios.get('https://lateef-creation-server.vercel.app/portfolio-data')
            .then(data => setPortfolio(data.data))

    }, []);
    return (
        <div className="category__main container mx-auto max-w-screen-xl py-20 lg:py-32">
            <PageTitle title='Portfolio'></PageTitle>
            <div className="category__content mx-3 lg:mx-0">
                <h1 className='text-white text-3xl lg:text-5xl text-center uppercase'>Portfolio</h1>
                <div className="category__portfolio mt-8 lg:mt-16">
                    {
                        portfolio ?
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {
                                        [...portfolio].reverse().map(portfolioItem => <PortfolioItems key={portfolioItem.id} portfolioItem={portfolioItem}></PortfolioItems>)
                                    }
                                </div>
                            </>: <h1>No Data Found</h1>
                    }
                </div>
            </div>
        </div>

    );
};

export default PortfolioPage;