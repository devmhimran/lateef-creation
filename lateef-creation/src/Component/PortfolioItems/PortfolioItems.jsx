import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';

const PortfolioItems = ({ portfolioItem, home }) => {
    const { thumbnail, _id, link, name } = portfolioItem;
    const navigate = useNavigate();
    const navigateId = (designId, postLink) => {
        if (postLink) {
            location.href = link;
        } else {
            navigate(`/portfolio/${designId}`)
        }
    }
    return (
        <div className={`portfolio__items ${home ? "odd:brightness-50" : ""} hover:brightness-100 ease-in-out duration-500`}>
            <div className='cursor-pointer' onClick={() => navigateId(_id, link)}>
                <LazyLoadImage 
                 src={thumbnail}
                 effect="blur"
                 height="500"
                 width="400"
                //  loading='eager'
                />
                   
                
                {/* <img className='preview__image ease-in-out duration-500' src={thumbnail} alt={name} /> */}
            </div>
        </div>
    );
};

export default PortfolioItems;