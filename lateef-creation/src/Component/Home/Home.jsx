import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import Portfolio from '../Portfolio/Portfolio';
import BlobSection from './BlobSection';
import Hero from './Hero';

const Home = () => {
    return (
        <div className='home__main container mx-auto max-w-screen-xl'>
            <PageTitle title="Home"></PageTitle>
            <Hero></Hero>
            <BlobSection></BlobSection>
            <Portfolio></Portfolio>
        </div>
    );
};

export default Home;