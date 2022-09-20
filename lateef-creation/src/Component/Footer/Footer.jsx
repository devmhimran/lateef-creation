import React from 'react';
import { BsBehance, BsTwitter } from 'react-icons/bs';
import { SiDribbble } from 'react-icons/si';
import { RiInstagramFill } from 'react-icons/ri';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import lateefCreationLogo from '../../assets/lateef-creation-logo.png'

const Footer = () => {
    return (
        <footer className='footer__main bg-black py-6'>
            <div className="container container mx-auto max-w-screen-xl flex justify-between items-center">
                <div className="footer__social flex">
                    <a className='leading-none mr-2' href="#">
                        <div className="social__icon bg-[#1F1F1F] hover:bg-white ease-in-out duration-500 py-3 px-4">
                            <BsBehance className='icon text-white text-2xl'></BsBehance>
                        </div>
                    </a>
                    <a className='leading-none mr-2' href="#">
                        <div className="social__icon bg-[#1F1F1F] hover:bg-white ease-in-out duration-500 py-3 px-4">
                            <SiDribbble className='icon text-white text-2xl'></SiDribbble>
                        </div>
                    </a>
                    <a className='leading-none mr-2' href="#">
                        <div className="social__icon bg-[#1F1F1F] hover:bg-white ease-in-out duration-500 py-3 px-4">
                            <RiInstagramFill className='icon text-white text-2xl'></RiInstagramFill>
                        </div>
                    </a>
                    <a className='leading-none mr-2' href="#">
                        <div className="social__icon bg-[#1F1F1F] hover:bg-white ease-in-out duration-500 py-3 px-4">
                            <FaFacebookF className='icon text-white text-2xl'></FaFacebookF>
                        </div>
                    </a>
                    <a className='leading-none mr-2' href="#">
                        <div className="social__icon bg-[#1F1F1F] hover:bg-white ease-in-out duration-500 py-3 px-4">
                            <BsTwitter className='icon text-white text-2xl'></BsTwitter>
                        </div>
                    </a>
                    <a className='leading-none mr-2' href="#">
                        <div className="social__icon bg-[#1F1F1F] hover:bg-white ease-in-out duration-500 py-3 px-4">
                            <FaYoutube className='icon text-white text-2xl'></FaYoutube>
                        </div>
                    </a>
                </div>
                <div className="footer__detail flex items-center">
                    <p className='text-white copyright__text text-base mr-8'>Copyright © 2022 | All rights reserved</p>
                    <img className='w-40' src={lateefCreationLogo} alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;