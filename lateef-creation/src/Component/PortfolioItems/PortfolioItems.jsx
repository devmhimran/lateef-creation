import React from 'react';
import { useNavigate } from 'react-router-dom';

const PortfolioItems = ({ portfolioItem, home }) => {
    const { thumbnail,id, link } = portfolioItem;
    const navigate = useNavigate();
    const navigateId = (designId, postLink) =>{
        if(postLink){
            location.href = link;
        }else{
            navigate(`/portfolio/${designId}`)
        }
        

        
    }
    return (
        <div className={`portfolio__items ${home ? "odd:brightness-50" : ""} hover:brightness-100 ease-in-out duration-500`}>
            <div className='cursor-pointer' onClick={()=> navigateId(id, link)}>
                <img className='preview__image ease-in-out duration-500' src={thumbnail} alt="" />
            </div>
        </div>
    );
};

export default PortfolioItems;