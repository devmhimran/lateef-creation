import React from 'react';
import arrow from '../../assets/arrow.svg'
import PortfolioItems from '../PortfolioItems/PortfolioItems';
import { Link } from 'react-router-dom';

const AllPortfolio = ({ portfolio }) => {

    return (
        <div className='portfolio__item py-16 lg:py-24'>
            <div className={`portfolio__item__heading uppercase text-left`}>
                <h1 className='text-white text-2xl lg:text-5xl'>Portfolio</h1>
                {/* <h1 className='text-white text-2xl lg:text-5xl mt-1 lg:mt-3'>{titleEx}</h1> */}
            </div>
            <div className="portfolio__item__main pt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        [...portfolio].slice(0,9).reverse().map(portfolioItem => <PortfolioItems key={portfolioItem._id} portfolioItem={portfolioItem}></PortfolioItems>)
                    }
                </div>
                {/* {
                    loader ?
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {
                                    data.filter(categoryData => categoryData.category === category ? categoryData : '').reverse().slice(0, 3).map(portfolioItem =>
                                        <PortfolioItems key={portfolioItem._id} portfolioItem={portfolioItem} home={home}></PortfolioItems>
                                    )
                                }
                            </div>
                        </> : <PortfolioLoading></PortfolioLoading>
                } */}
            </div>
            <div className="explore__button text-center  flex justify-center mt-8">
               
                    <Link className='text-white text-xl lg:text-2xl flex justify-center items-center' to='/portfolio'>
                        <span>Explore All</span>
                        <span className='text-white'><img className='text-white invert ml-5' src={arrow} alt="" /></span>
                    </Link>
            
            </div>
        </div>
    );
};

export default AllPortfolio;