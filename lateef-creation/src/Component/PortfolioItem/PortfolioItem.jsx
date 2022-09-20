import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PortfolioItems from '../PortfolioItems/PortfolioItems';
import arrow from '../../assets/arrow.svg'

const PortfolioItem = ({ title, titleEx, data, textAlign, category, home }) => {
    const navigate = useNavigate();
    const navigateCategory = (categoryName) => {
        navigate(`/category/${categoryName}`)
    }
    return (
        <div className='portfolio__item py-16 lg:py-24'>
            <div className={`portfolio__item__heading uppercase ${textAlign}`}>
                <h1 className='text-white text-2xl lg:text-5xl'>{title}</h1>
                <h1 className='text-white text-2xl lg:text-5xl mt-1 lg:mt-3'>{titleEx}</h1>
            </div>
            <div className="portfolio__item__main pt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        data.filter(categoryData => categoryData.category === category ? categoryData : '').slice(0, 3).map(portfolioItem =>
                            <PortfolioItems key={portfolioItem.id} portfolioItem={portfolioItem} home={home}></PortfolioItems>
                        )
                    }
                </div>
            </div>
            <div className="explore__button text-center  flex justify-center mt-8">
                <button className='text-white text-xl lg:text-2xl flex justify-center items-center' onClick={() => navigateCategory(category)}>
                    <span>Explore All</span>
                    <span className='text-white'><img className='text-white invert ml-5' src={arrow} alt="" /></span>
                </button>
            </div>
        </div>
    );
};

export default PortfolioItem;