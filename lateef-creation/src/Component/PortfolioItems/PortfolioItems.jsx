import React from 'react';
import { useNavigate } from 'react-router-dom';

const PortfolioItems = ({ portfolioItem, home }) => {
    const { thumbnail,id } = portfolioItem;
    const navigate = useNavigate();
    const navigateId = (designId) =>{
        navigate(`/portfolio/${designId}`)
    }
    return (
        <div className={`portfolio__items ${home ? "odd:brightness-50" : ""} hover:brightness-100 ease-in-out duration-500`}>
            <div className='cursor-pointer' onClick={()=> navigate(`/portfolio/${id}`)}>
                <img className='preview__image ease-in-out duration-500' src={thumbnail} alt="" />
            </div>
        </div>
    );
};

export default PortfolioItems;