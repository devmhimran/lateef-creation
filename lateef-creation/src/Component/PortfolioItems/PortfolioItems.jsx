import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useState } from 'react';

const PortfolioItems = ({ portfolioItem, home }) => {
    const { thumbnail, _id, link, name } = portfolioItem;
    const [isShown, setIsShown] = useState(false);
    console.log(isShown)
    const navigate = useNavigate();
    const navigateId = (designId, postLink) => {
        if (postLink) {
            location.href = link;
        } else {
            navigate(`/portfolio/${designId}`)
        }
    }
    return (
        <div className={`portfolio__items relative ${home ? "odd:brightness-50" : ""} hover:brightness-100 ease-in-out duration-500` }
        onClick={() => navigateId(_id, link)} 
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
            <div className='cursor-pointer portfolio-container' >
                <div className={`duration-300 ease-in ${isShown ? 'duration-300 ease-in gradient' : ''}`}></div>
                <LazyLoadImage
                    className={`portfolio__img ease-in-out duration-500 `}
                    src={thumbnail}
                    effect="blur"
                    alt={name}
                //  loading='eager'
                />
                {/* <img className='preview__image ease-in-out duration-500' src={thumbnail} alt={name} /> */}
                <p className={`text-white brightness-100 my-1 absolute left-4 z-10  duration-300 ease-in  ${isShown ? 'bottom-5' : ' bottom-[-100px]'}`}>{name}</p>
            </div>
        </div>
    );
};

export default PortfolioItems;