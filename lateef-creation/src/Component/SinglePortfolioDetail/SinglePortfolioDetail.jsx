import React from 'react';
import PageTitle from '../PageTitle/PageTitle';

const SinglePortfolioDetail = ({ portfolioDetail }) => {
    const { name, description, thumbnail, previewImage, category } = portfolioDetail;
    return (
        <div className="container mx-auto max-w-screen-xl text-center">
            <PageTitle title={name}></PageTitle>
            <div className="single__portfolio__detail">
                <h1 className='text-3xl lg:text-5xl text-white mx-0 lg:mx-80 leading-snug'>{name}</h1>
                <p className='text-base lg:text-xl text-[#969696] leading-normal mt-6 llg:mt-11 mx-8 lg:mx-14'>{description}</p>
            </div>
            <div className="single__portfolio__preview__image mt-11">
                {
                    previewImage.map((imageData, index) =>
                        <div key={index}>
                            <img className='w-full mx-auto' src={imageData} alt={name} />
                            <div className='my-3 w-10/12 mx-auto'>
                                <hr className='border-gray-600' />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default SinglePortfolioDetail;