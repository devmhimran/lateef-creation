import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { AiFillMobile } from 'react-icons/ai';
import { SiMaterialdesign } from 'react-icons/si';
import { RiPieChart2Line } from 'react-icons/ri';

const BlobSection = () => {
    return (
        <div className='blob__main py-16 lg:py-28 mx-3 lg:mx-0'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="blob__card border border-[#3E3E3E] py-20 px-4">
                    <CgWebsite className='text-white text-6xl mx-auto'></CgWebsite>
                    <p className='text-lg text-white text-center mt-3'>WEBSITE UI/UX DESIGN</p>
                </div>
                <div className="blob__card border border-[#3E3E3E] py-20 px-4">
                    <AiFillMobile className='text-white text-6xl mx-auto'></AiFillMobile>
                    <p className='text-lg text-white text-center mt-3'>APP UI/UX DESIGN</p>
                </div>
                <div className="blob__card border border-[#3E3E3E] py-20 px-4">
                    <SiMaterialdesign className='text-white text-6xl mx-auto'></SiMaterialdesign>
                    <p className='text-lg text-white text-center mt-3'>LOGO DESIGN</p>
                </div>
                <div className="blob__card border border-[#3E3E3E] py-20 px-4">
                    <RiPieChart2Line className='text-white text-6xl mx-auto'></RiPieChart2Line>
                    <p className='text-lg text-white text-center mt-3'>ILLUSTRATION DESIGN</p>
                </div>
            </div>
        </div>
    );
};

export default BlobSection;