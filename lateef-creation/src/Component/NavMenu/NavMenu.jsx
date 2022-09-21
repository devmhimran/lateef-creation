import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import laatefCreationLogo from '../../assets/lateef-creation-logo.png'
import menu from '../../assets/menu.svg'
import './NavMenu.css'
import { HiX } from 'react-icons/hi';

const NavMenu = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='navmenu__main relative pt-8 lg:mx-0 mx-3'>
            <div className="container mx-auto max-w-screen-xl flex justify-between items-center">
                <div className="logo">
                    <Link to='/'><img className='w-32 lg:w-min' src={laatefCreationLogo} alt="Lateef Creation Logo" /></Link>
                </div>
                <div className="menu flex items-center">
                    <button className='hire__button text-base bg-white py-3 px-6 mr-7 hidden lg:block'><a href="mailto:lateefshuvro@gmail.com">Hire me</a></button>
                    <button onClick={()=> setOpen(!open)} className='menu__text text-lg lg:text-2xl text-white'>
                        <span><img className='ml-auto' src={menu} alt="" /></span>
                        <p className='text-end tracking-[.6em] mr-[-10px] font-semibold'>Menu</p>
                    </button>
                </div>
            </div>
            <div className={`dropdown__menu w-full h-screen  bg-[#1F1F1F] duration-500 ease-in z-50 fixed ${open ? 'top-0' : 'top-[-1000px]'}`}>
                    <div onClick={() => setOpen(!open)} className="dropdown__close absolute right-[5%] top-[5%] cursor-pointer">
                        <HiX className='text-3xl lg:text-5xl text-white'></HiX>
                    </div>
                    <div className="dropdown__item flex justify-center items-center w-full h-screen">

                        <ul className='text-center'>
                            <li className='my-3 lg:my-5 text-lg lg:text-3xl text-white'><a href="/">Home</a></li> <hr className='border-gray-800 ' />
                            <li className='my-3 lg:my-5 text-lg lg:text-3xl text-white'><a href="/category/website-uiux">Website UiUx Design</a></li> <hr className='border-gray-800 ' />
                            <li className='my-3 lg:my-5 text-lg lg:text-3xl text-white'><a href="/category/app-uiux">APP UiUx Design</a></li> <hr className='border-gray-800 ' />
                            <li className='my-3 lg:my-5 text-lg lg:text-3xl text-white'><a href="/category/creative-logo-design">Creative Logo Design</a></li> <hr className='border-gray-800 ' />
                            <li className='my-3 lg:my-5 text-lg lg:text-3xl text-white'><a href="/category/latest-instagram-post">LATEST INSTAGRAM POST</a></li> <hr className='border-gray-800 ' />
                            <li className='my-3 lg:my-5 text-lg lg:text-3xl text-white'><a href="/category/learning-video-tutorial">LEARNING VIDEO TUTORIAL</a></li> <hr className='border-gray-800 ' />
                        </ul>
                    </div>     
            </div>
        </div>
    );
};

export default NavMenu;