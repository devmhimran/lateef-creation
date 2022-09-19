import React from 'react';
import PortfolioItems from '../PortfolioItems/PortfolioItems';

const PortfolioItem = ({ title, titleEx, data, textAlign }) => {
    // const { thumbnail } = data;
    console.log(data)
    return (
        <div className='portfolio__item py-16 lg:py-24'>
            <div className={`portfolio__item__heading uppercase ${textAlign}`}>
                <h1 className='text-white text-2xl lg:text-5xl'>{title}</h1>
                <h1 className='text-white text-2xl lg:text-5xl mt-1 lg:mt-3'>{titleEx}</h1>
            </div>
            <div className="portfolio__item__main pt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        data.map(portfolioItem => <PortfolioItems key={portfolioItem.id} portfolioItem={portfolioItem}></PortfolioItems>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;