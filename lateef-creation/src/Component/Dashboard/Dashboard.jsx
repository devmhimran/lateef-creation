import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { TbMinus } from 'react-icons/tb';

const Dashboard = () => {
    return (
        <div className='dashboard__main container mx-auto lg:py-24 py-16  flex justify-center'>
            <div className="data__upload__form__main w-2/5 border p-6">
                <div className="form">
                    <form>
                        <h2 className='text-white text-3xl'>Upload Project</h2>
                        <input className='p-2 w-full mt-2' type="text" name="projectName" placeholder='Name' />
                        <textarea className='p-2 w-full mt-2' name="" id="" cols="30" rows="6" placeholder='Description'></textarea>
                        <input className='p-2 w-full mt-2' type="text" name="projectName" placeholder='Thumbnail' />
                        <select className='p-2 w-full mt-2' name="category">
                            <option value="website-uiux">Website uiux</option>
                            <option value="app-uiux">APP uiux</option>
                            <option value="creative-logo-design">Creative Logo Design</option>
                            <option value="latest-instagram-post">Latest Instagram Post</option>
                            <option value="learning-video-tutorial">Learning Video Tutorial</option>
                        </select>
                        <input className='p-2 w-full mt-2' type="text" name="previewImage" placeholder='Preview Image'/>
                        <div className='flex'>
                            <span className="cursor-pointer m-3 p-2 bg-white text-black"><FiPlus></FiPlus></span>
                            <span className="cursor-pointer m-3 p-2 bg-white text-black"><TbMinus></TbMinus></span>
                        </div>
                        <button className='bg-white text-black p-2 mt-3'>Add Project</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;