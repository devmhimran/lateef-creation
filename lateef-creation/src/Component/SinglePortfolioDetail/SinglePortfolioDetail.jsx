import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SinglePortfolioDetail = ({ portfolioDetail }) => {
    const { name, description, thumbnail, previewInputData, category } = portfolioDetail;
    return (
        <div className="">
            <PageTitle title={name}></PageTitle>
            <div className="single__portfolio__detail container mx-auto max-w-screen-xl text-center">
                <h1 className='text-3xl lg:text-5xl text-white mx-0 lg:mx-24 leading-snug'>{name}</h1>
                <p className='text-base lg:text-xl text-[#969696] leading-normal mt-6 llg:mt-11 mx-8 lg:mx-14'>{description}</p>
            </div>
            <div className="single__portfolio__preview__image mt-11">
                {
                    previewInputData.map((imageData, index) =>
                        <div key={index}>
                            {/* <LazyLoadImage
                                className='portfolio__img'
                                src={imageData.previewImage}
                                effect="blur"

                                alt={name}
                             loading='eager'
                            /> */}
                            <img className='w-full' src={imageData.previewImage} alt={name} />
                            {/* <div className='my-5 w-10/12 mx-auto'>
                                <hr className='border-gray-600' />
                            </div> */}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default SinglePortfolioDetail;