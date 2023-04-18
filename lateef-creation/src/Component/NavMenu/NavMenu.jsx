import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import laatefCreationLogo from '../../assets/Lateef-Creation-Logo.svg'
import menu from '../../assets/menu.svg'
import './NavMenu.css'
import { HiX } from 'react-icons/hi';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const NavMenu = () => {
    const [open, setOpen] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    const navigate = useNavigate()
    const handleHireMeClick =  () => {
        const contactSection = document.getElementById('contact-form');
        // if (contactSection) {
            if  (location.pathname === '/') {
                console.log(location.pathname)
                contactSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.log(location.pathname)
                navigate('/#contact-form')
                // location.href = '/';
                // setInterval(function(){
                //     location.hash = 'contact-form';
                // }, 1000);
                 
                
            }
        // }
    };
    return (
        <div id='nav__menu' className='navmenu__main relative pt-8 lg:mx-0 mx-3'>
            <div className="container mx-auto max-w-screen-xl flex justify-between items-center">
                <div className="logo w-36 lg:w-48">
                    <Link to='/'><img className='lg:w-min' src={laatefCreationLogo} alt="Lateef Creation Logo" /></Link>
                </div>
                <div className="menu flex items-center">
                    {/* <button className='hire__button text-base bg-white py-3 px-6 mr-7 hidden lg:block'><a href="/#contact-form">Hire me</a></button> */}
                    {/* <button className='hire__button text-base bg-white py-3 px-6 mr-7 hidden lg:block'><Link to='/#contact-form'>Hire me</Link></button> */}
                    <button className='hire__button text-base bg-white py-3 px-6 mr-7 hidden lg:block'><span onClick={handleHireMeClick}>Hire me</span></button>
                    <button onClick={()=> setOpen(!open)} className='menu__text text-lg lg:text-2xl text-white'>
                        <span><img className='ml-auto' src={menu} alt="" /></span>
                        <p className='text-end tracking-[.6em] mr-[-10px] font-semibold'>Menu</p>
                    </button>
                </div>
            </div>
            <div className={`dropdown__menu w-full h-screen  bg-[#1F1F1F] duration-500 ease-in z-50  absolute ${open ? 'top-0' : 'top-[-1000px]'}`}>
                    <div onClick={() => setOpen(!open)} className="dropdown__close absolute right-[5%] top-[5%] cursor-pointer">
                        <HiX className='text-3xl lg:text-5xl text-white'></HiX>
                    </div>
                    <div className="dropdown__item flex justify-center items-center w-full h-screen">
                        <ul className='text-center'>
                            <li className='my-3 lg:my-5 text-lg lg:text-3xl text-white uppercase'><a href="/">Home</a></li> <hr className='border-gray-800 ' />
                            <li className='my-3 lg:my-5 text-lg lg:text-3xl text-white uppercase'><a href="/category/website-uiux">Website UiUx Design</a></li> <hr className='border-gray-800 ' />
                            <li className='my-3 lg:my-5 text-lg lg:text-3xl text-white uppercase'><a href="/category/app-uiux">APP UiUx Design</a></li> <hr className='border-gray-800 ' />
                            <li className='my-3 lg:my-5 text-lg lg:text-3xl text-white uppercase'><a href="/category/dashboard-design">Dashboard Design</a></li> <hr className='border-gray-800 ' />
                            <li className='my-3 lg:my-5 text-lg lg:text-3xl text-white uppercase'><a href="/category/creative-logo-design">Creative Logo Design</a></li> <hr className='border-gray-800 ' />
                            <li className='my-3 lg:my-5 text-lg lg:text-3xl text-white uppercase'><a href="/category/creative-illustration-design">Creative Illustration design</a></li> <hr className='border-gray-800 ' />
                            <li className='my-3 lg:my-5 text-lg lg:text-3xl text-white uppercase'><a href="/category/latest-instagram-post">LATEST INSTAGRAM POST</a></li> <hr className='border-gray-800 ' />
                            <li className='my-3 lg:my-5 text-lg lg:text-3xl text-white uppercase'><a href="/category/learning-video-tutorial">LEARNING VIDEO TUTORIAL</a></li> <hr className='border-gray-800 ' />
                            {
                                user ? <> <li className='my-3 lg:my-5 text-lg lg:text-3xl text-white uppercase'><a href="/lateef-creation-dashboard">Dashboard</a></li> <hr className='border-gray-800 ' /></> : ''
                            }
                        </ul>
                    </div>     
            </div>
        </div>
    );
};

export default NavMenu;