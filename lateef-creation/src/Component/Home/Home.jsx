import React from 'react';
import BlobSection from './BlobSection';
import Hero from './Hero';

const Home = () => {
    return (
        <div className='home__main container mx-auto max-w-screen-xl'>
            <Hero></Hero>
            <BlobSection></BlobSection>
        </div>
    );
};

export default Home;