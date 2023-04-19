import React from 'react';
import { BsBehance, BsTwitter } from 'react-icons/bs';
import { SiDribbble } from 'react-icons/si';
import { RiInstagramFill } from 'react-icons/ri';
import { FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import lateefCreationLogo from '../../assets/Lateef-Creation-Logo.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
    const d = new Date();
    return (
        <footer id='footer' className='footer__main bg-black py-6 w-full'>
            <div className="container container mx-auto max-w-screen-xl block lg:flex justify-between items-center">
                <div className="footer__social lg:justify-start justify-center flex">
                    <a className='leading-none mr-2' href="https://www.behance.net/lateefcreation">
                        <div className="social__icon bg-[#1F1F1F] hover:bg-white ease-in-out duration-500 px-2 py-1.5 lg:py-3 lg:px-3.5">
                            <BsBehance className='icon text-white text-xl lg:text-2xl'></BsBehance>
                        </div>
                    </a>
                    <a className='leading-none mr-2' href="https://dribbble.com/lateefcreation">
                        <div className="social__icon bg-[#1F1F1F] hover:bg-white ease-in-out duration-500 px-2 py-1.5 lg:py-3 lg:px-3.5">
                            <SiDribbble className='icon text-white text-xl lg:text-2xl'></SiDribbble>
                        </div>
                    </a>
                    <a className='leading-none mr-2' href="https://www.instagram.com/lateef_creation">
                        <div className="social__icon bg-[#1F1F1F] hover:bg-white ease-in-out duration-500 px-2 py-1.5 lg:py-3 lg:px-3.5">
                            <RiInstagramFill className='icon text-white text-xl lg:text-2xl'></RiInstagramFill>
                        </div>
                    </a>
                    <a className='leading-none mr-2' href="https://www.facebook.com/lateefcreation/">
                        <div className="social__icon bg-[#1F1F1F] hover:bg-white ease-in-out duration-500 px-2 py-1.5 lg:py-3 lg:px-3.5">
                            <FaFacebookF className='icon text-white text-xl lg:text-2xl'></FaFacebookF>
                        </div>
                    </a>
                    <a className='leading-none mr-2' href="https://www.linkedin.com/in/lateefcreation">
                        <div className="social__icon bg-[#1F1F1F] hover:bg-white ease-in-out duration-500 px-2 py-1.5 lg:py-3 lg:px-3.5">
                            <FaLinkedinIn className='icon text-white text-xl lg:text-2xl'></FaLinkedinIn>
                        </div>
                    </a>
                    <a className='leading-none mr-2' href="https://twitter.com/lateefcreation">
                        <div className="social__icon bg-[#1F1F1F] hover:bg-white ease-in-out duration-500 px-2 py-1.5 lg:py-3 lg:px-3.5">
                            <BsTwitter className='icon text-white text-xl lg:text-2xl'></BsTwitter>
                        </div>
                    </a>
                    <a className='leading-none mr-2' href="https://www.youtube.com/channel/UCzwdjtTooaTpRUQT0vfWjsg">
                        <div className="social__icon bg-[#1F1F1F] hover:bg-white ease-in-out duration-500 px-2 py-1.5 lg:py-3 lg:px-3.5">
                            <FaYoutube className='icon text-white text-xl lg:text-2xl'></FaYoutube>
                        </div>
                    </a>
                </div>
                <div className="footer__detail lg:flex block items-center">
                    <p className='text-white copyright__text lg:text-end text-center text-sm lg:text-base mr-0 lg:mr-8 lg:my-0 my-4'>Copyright © {d.getFullYear()} | All rights reserved</p>
                    <Link to="/">
                        <img className='w-32 lg:w-40 mx-auto' src={lateefCreationLogo} alt="Lateef Creation Logo" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;