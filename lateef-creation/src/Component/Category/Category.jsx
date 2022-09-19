import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PortfolioItems from '../PortfolioItems/PortfolioItems';

const Category = () => {
    const { categoryName } = useParams();
    const [portfolio, setPortfolio] = useState([]);
    let categoryNameMain = categoryName.split("-").join(" ");
    useEffect(() => {
        fetch('/public/data.json')
            .then(res => res.json())
            .then(data => setPortfolio(data))
    }, []);
    return (
        <div className='category__main container mx-auto max-w-screen-xl py-20 lg:py-32'>
            <div className="category__content mx-3 lg:mx-0">
                <h1 className='text-white text-3xl lg:text-5xl text-center uppercase'>{categoryNameMain}</h1>
                <div className="category__portfolio mt-8 lg:mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            portfolio.filter(categoryData => categoryData.category === categoryName).map(portfolioItem => <PortfolioItems key={portfolioItem.id} portfolioItem={portfolioItem}></PortfolioItems>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;