import React from 'react';
import { useNavigate } from 'react-router-dom';

const PortfolioItems = ({ portfolioItem }) => {
    const { thumbnail,id } = portfolioItem;
    const navigate = useNavigate();
    const navigateId = (designId) =>{
        navigate(`/portfolio/${designId}`)
    }
    return (
        <div className="portfolio__items odd:brightness-50 hover:brightness-100 ease-in-out duration-500">
            <div onClick={()=> navigateId(id)}>
                <img className='preview__image' src={thumbnail} alt="" />
            </div>
        </div>
    );
};

export default PortfolioItems;