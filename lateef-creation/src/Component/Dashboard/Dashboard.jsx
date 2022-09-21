import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { TbMinus } from 'react-icons/tb';

const Dashboard = () => {
    const [previewInput, setPreviewInput] = useState([{
        previewImage: ''
    }])
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const thumbnail = e.target.description.value;
        const category = e.target.category.value;
        const previewInputData = previewInput;

        const portfolioData = {
            name,
            description,
            thumbnail,
            category,
            previewInputData
        }

        console.log(portfolioData)

    }

    const handlePreview = (e, index) => {
        const values = [...previewInput];
        values[index][e.target.name] = e.target.value;
        // console.log(e.target.value)
        setPreviewInput(values)
        console.log(values[index])
    }


    const handleAdd = () => {
        setPreviewInput([...previewInput, { previewImage: '' }]);

    }
    const handleMinus = (index) => {
        const values = [...previewInput];
        values.splice(index, 1);
        setPreviewInput(values);
    }

    return (
        <div className='dashboard__main container mx-auto lg:py-24 py-16  flex justify-center'>
            <div className="data__upload__form__main w-2/5 border p-6">
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <h2 className='text-white text-3xl'>Upload Project</h2>
                        <input className='p-2 w-full mt-2' type="text" name="name" placeholder='Name' />
                        <textarea className='p-2 w-full mt-2' name="description" id="" cols="30" rows="6" placeholder='Description'></textarea>
                        <input className='p-2 w-full mt-2' type="text" name="thumbnail" placeholder='Thumbnail' />
                        <select className='p-2 w-full mt-2' name="category">
                            <option value="website-uiux">Website uiux</option>
                            <option value="app-uiux">APP uiux</option>
                            <option value="creative-logo-design">Creative Logo Design</option>
                            <option value="latest-instagram-post">Latest Instagram Post</option>
                            <option value="learning-video-tutorial">Learning Video Tutorial</option>
                        </select>
                        {
                            previewInput.map((inputField, index) =>
                                <div key={index}>
                                    <input className='p-2 w-full mt-2' type="text" name="previewImage" placeholder='Preview Image' value={inputField.previewImage} onChange={e => handlePreview(e, index)} />

                                    <div className='flex'>
                                        <span className="cursor-pointer m-3 p-2 bg-white text-black" onClick={handleAdd}><FiPlus></FiPlus></span>
                                        {
                                            index > 0 ? <span className="cursor-pointer m-3 p-2 bg-white text-black" onClick={() => handleMinus(index)}><TbMinus></TbMinus></span> : <span disabled={true} className="cursor-pointer m-3 p-2 bg-white text-black"><TbMinus></TbMinus></span> 
                                        }
                                    </div>
                                </div>
                            )}
                        <button className='bg-white text-black p-2 mt-3'>Add Project</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;