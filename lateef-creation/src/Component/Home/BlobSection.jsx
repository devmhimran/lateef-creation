import React from 'react';
import lateefCreationWebsite from '../../assets/lateef-creation-website.svg'
import lateefCreationApp from '../../assets/lateef-creation-app.svg'
import lateefCreationIllustration from '../../assets/lateef-creation-illustration.svg'
import lateefCreationLogo from '../../assets/lateef-creation-logo.svg'
import arrowBlack from '../../assets/arrow-black.svg'
import { Link } from 'react-router-dom';

const BlobSection = () => {
    return (
        <div className='blob__main py-16 lg:py-20 mx-3 lg:mx-0'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="blob__card border border-[#3E3E3E] py-24 px-4 hover:bg-black hover:border-black ease-in-out duration-500 lg:hover:-translate-y-5 relative">
                    {/* <CgWebsite className='text-white text-6xl mx-auto'></CgWebsite> */}
                    <img className='mx-auto pb-3' src={lateefCreationWebsite} alt="" />
                    <p className='text-lg text-white text-center mt-3'>WEBSITE UI/UX DESIGN</p>
                    <Link to='/category/website-uiux' className='bg-white text-black w-6/12 text-center flex items-center font-bold mx-auto explore__btn hidden duration-500 absolute'><div className='flex py-2 justify-center'> Explore <img className='ml-2 w-6' src={arrowBlack} alt="" /></div></Link>
                </div>
                <div className="blob__card border border-[#3E3E3E] py-24 px-4 hover:bg-black hover:border-black ease-in-out duration-500 lg:hover:-translate-y-5 relative">
                    {/* <AiFillMobile className='text-white text-6xl mx-auto'></AiFillMobile> */}
                    <img className='mx-auto pb-3' src={lateefCreationApp} alt="" />
                    <p className='text-lg text-white text-center mt-3'>APP UI/UX DESIGN</p>
                    <Link to='/category/app-uiux' className='bg-white text-black w-6/12 text-center flex items-center font-bold mx-auto explore__btn hidden duration-500 absolute'><div className='flex py-2 justify-center'> Explore <img className='ml-2 w-6' src={arrowBlack} alt="" /></div></Link>
                </div>
                <div className="blob__card border border-[#3E3E3E] py-24 px-4 hover:bg-black hover:border-black ease-in-out duration-500 lg:hover:-translate-y-5 relative">
                    {/* <SiMaterialdesign className='text-white text-6xl mx-auto'></SiMaterialdesign> */}
                    <img className='mx-auto pb-3' src={lateefCreationIllustration} alt="" />
                    <p className='text-lg text-white text-center mt-3'>LOGO DESIGN</p>
                    <Link to='/category/creative-logo-design' className='bg-white text-black w-6/12 text-center flex items-center font-bold mx-auto explore__btn hidden duration-500 absolute'><div className='flex py-2 justify-center'> Explore <img className='ml-2 w-6' src={arrowBlack} alt="" /></div></Link>
                </div>
                <div className="blob__card border border-[#3E3E3E] py-24 px-4 hover:bg-black hover:border-black ease-in-out duration-500 lg:hover:-translate-y-5 relative">
                    {/* <RiPieChart2Line className='text-white text-6xl mx-auto'></RiPieChart2Line> */}
                    <img className='mx-auto pb-3' src={lateefCreationLogo} alt="" />
                    <p className='text-lg text-white text-center mt-3'>ILLUSTRATION DESIGN</p>
                    <Link to='/category/creative-Illustration-design' className='bg-white text-black w-6/12 text-center flex items-center font-bold mx-auto explore__btn hidden duration-500 absolute'><div className='flex py-2 justify-center'> Explore <img className='ml-2 w-6' src={arrowBlack} alt="" /></div></Link>
                </div>
            </div>
        </div>
    );
};

export default BlobSection;