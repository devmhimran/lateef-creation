import React from 'react';
import heroImage from '../../assets/lateef-creation-hero-image.png'

const Hero = () => {
    return (
        <div className='hero__main py-16 lg:py-28 flex mx-3 lg:mx-0'>
            <div className="w-full block lg:flex">
                <div className="hero__main__left w-full lg:w-3/5 block lg:flex items-center">
                    <div className="hero__main__left__content text-center lg:text-start">
                        <p className='text-white text-base lg:text-xl'>WELCOME TO LATEEF CREATION</p>
                        <h1 className='text-4xl lg:text-7xl my-3 text-[#969696]'>I AM YOUR<br></br> <span className='text-white'>UNIQUE</span> DESIGN<br></br> SOLUTION</h1>
                        <p className='hero__title text-sm lg:text-xl uppercase text-[#969696]'>Have a project in mind? would you like to share it? feel free to reach out by writing an e-mail  </p>
                        <div className='mt-6'>
                            <a href="#contact-form" className='py-3 px-6 bg-white mt-6 lg:mt-9 text-sm lg:text-base border hover:bg-[#1F1F1F] hover:text-white duration-300 uppercase'>let's work together</a>
                        </div>
                    </div>
                </div>
                <div className="hero__main__right mt-10 lg:mt0 w-full lg:w-2/5">
                    <div className="hero__image">
                        <img className='w-full md:w-4/6 lg:w-11/12 mx-auto lg:ml-auto' src={heroImage} alt="Lateef Creation Hero Image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;