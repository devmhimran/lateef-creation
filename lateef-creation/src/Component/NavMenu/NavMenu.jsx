import React from 'react';
import { Link } from 'react-router-dom';
import laatefCreationLogo from '../../assets/lateef-creation-logo.png'
import menu from '../../assets/menu.svg'
import './NavMenu.css'

const NavMenu = () => {
    return (
        <div className='navmenu__main pt-8 lg:mx-0 mx-3'>
            <div className="container mx-auto max-w-screen-xl flex justify-between items-center">
                <div className="logo">
                    <Link to='/'><img className='w-32 lg:w-min' src={laatefCreationLogo} alt="" /></Link>
                </div>
                <div className="menu flex items-center">
                    <button className='hire__button text-base bg-white py-3 px-6 mr-7 hidden lg:block'><a href="mailto:lateefshuvro@gmail.com">Hire me</a></button>
                    <button className='menu__text text-lg lg:text-2xl text-white'>
                        <span><img className='ml-auto' src={menu} alt="" /></span>
                        <p className='text-end tracking-[.6em] mr-[-10px] font-semibold'>Menu</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavMenu;