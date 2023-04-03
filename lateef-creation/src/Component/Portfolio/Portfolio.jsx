import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import PortfolioLoading from '../PortfolioLoading/PortfolioLoading';
import AllPortfolio from '../AllPortfolio/AllPortfolio';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        // fetch('https://lateef-creation-server.vercel.app')
        //     .then(res => res.json())
        //     .then(data => setPortfolio(data))
        //     .catch(err => setLoader(false))

        axios.get('https://lateef-creation-server.vercel.app/portfolio-data')
        .then(data => setPortfolio(data.data))

    }, []);
    return (
        <div className='portfolio__main pb-16 lg:pb-28 mx-3 lg:mx-0'>
            <AllPortfolio key={1} portfolio={portfolio}/>
            {/* <PortfolioItem
                title={'Website uiux'}
                category={'website-uiux'}
                titleEx={'design'}
                data={portfolio}
                home={'home'}
                textAlign={'text-start'}
                loader = {loader}
                >
            </PortfolioItem> */}
            {/* <PortfolioItem
                title={'Website uiux'}
                category={'website-uiux'}
                titleEx={'design'}
                data={portfolio}
                home={'home'}
                textAlign={'text-start'}
                loader = {loader}
                >
            </PortfolioItem>
            <PortfolioItem
                title={'APP uiux'}
                category={'app-uiux'}
                titleEx={'design'}
                data={portfolio}
                home={'home'}
                textAlign={'text-end'}
                loader = {loader}
                >
            </PortfolioItem>
            <PortfolioItem
                title={'Creative LOGO'}
                category={'creative-logo-design'}
                titleEx={'design'}
                data={portfolio}
                home={'home'}
                textAlign={'text-start'}
                loader = {loader}
                >
            </PortfolioItem>
            <PortfolioItem
                title={'Creative Illustration'}
                category={'creative-illustration-design'}
                titleEx={'design'}
                data={portfolio}
                home={'home'}
                textAlign={'text-end'}
                loader = {loader}
                >
            </PortfolioItem>
            <PortfolioItem
                title={'Latest Instagram'}
                category={'latest-instagram-post'}
                titleEx={'post'}
                data={portfolio}
                home={'home'}
                textAlign={'text-start'}
                loader = {loader}
                >
            </PortfolioItem>
            <PortfolioItem
                title={'learning Video'}
                category={'learning-video-tutorial'}
                titleEx={'tutorial'}
                data={portfolio}
                home={'home'}
                textAlign={'text-end'}
                loader = {loader}
                >
            </PortfolioItem> */}
        </div>
    );
};

export default Portfolio;