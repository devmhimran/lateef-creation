import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PortfolioItems from '../PortfolioItems/PortfolioItems';

const Category = () => {
    const { categoryName } = useParams();
    const [portfolio, setPortfolio] = useState([]);
    useEffect(() => {
        fetch('/public/data.json')
            .then(res => res.json())
            .then(data => setPortfolio(data))
    }, []);
    return (
        <div className='category__main container mx-auto max-w-screen-xl py-16 lg:py-24'>
            <h1>{categoryName}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    portfolio.filter(categoryData => categoryData.category === categoryName).map(portfolioItem => <PortfolioItems key={portfolioItem.id} portfolioItem={portfolioItem}></PortfolioItems>)
                }
            </div>

        </div>
    );
};

export default Category;