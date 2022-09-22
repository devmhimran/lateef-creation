import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { FiPlus } from 'react-icons/fi';
import { TbMinus } from 'react-icons/tb';

const Dashboard = () => {
    const [categoryValueData, setCategoryValueData] = useState('');


    const [link, setLink] = useState('');

    const handleCategory = (value) => {
        setCategoryValueData(value)
        console.log(value)
    }

    const [previewInput, setPreviewInput] = useState([{
        previewImage: ''
    }])


    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const thumbnail = e.target.thumbnail.value;
        const category = e.target.category.value;

        const addToServer = (portfolioData) => {
            
            fetch('http://localhost:5000/portfolio-upload', {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(portfolioData)
            }).then(res => res.json())
                .then(data => {
                    if (data) {
                        setPreviewInput([0]);
                        toast.success('Successfully Added!')
                    } else {
                        toast.error("Something went wrong!")
                    }
                })
            e.target.reset();
        }

        if (categoryValueData === 'latest-instagram-post' || categoryValueData === 'learning-video-tutorial') {
            const link = e.target.link.value;
            setLink(link)
            const portfolioData = {
                name,
                thumbnail,
                category,
                link
            }
            addToServer(portfolioData)

        } else {
            const description = e.target.description.value;
            const previewInputData = previewInput;
            const portfolioData = {
                name,
                thumbnail,
                category,
                description,
                previewInputData
            }
            addToServer(portfolioData)

        }
    }

    const handlePreview = (e, index) => {
        const values = [...previewInput];
        values[index][e.target.name] = e.target.value;
        setPreviewInput(values)
        // console.log(values[index])
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
        <div className='dashboard__main container mx-auto lg:py-28 py-16  flex justify-center'>
            <div className="data__upload__form__main w-2/5 border p-6">
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <h2 className='text-white text-3xl'>Upload Project</h2>
                        <input className='p-2 w-full mt-2' type="text" name="name" placeholder='Name' required />
                        {categoryValueData === 'latest-instagram-post' || categoryValueData === 'learning-video-tutorial' ? '' : <textarea className='p-2 w-full mt-2' name="description" id="" cols="30" rows="6" placeholder='Description' required></textarea>}
                        <input className='p-2 w-full mt-2' type="text" name="thumbnail" placeholder='Thumbnail' required />
                        <select className='p-2 w-full mt-2' name="category" onChange={e => handleCategory(e.target.value)} required>
                            <option value="website-uiux">Website uiux</option>
                            <option value="app-uiux">APP uiux</option>
                            <option value="creative-logo-design">Creative Logo Design</option>
                            <option value="latest-instagram-post">Latest Instagram Post</option>
                            <option value="learning-video-tutorial">Learning Video Tutorial</option>
                        </select>
                        {categoryValueData === 'latest-instagram-post' || categoryValueData === 'learning-video-tutorial' ? '' :
                            previewInput.map((inputField, index) =>
                                <div key={index}>
                                    <input className='p-2 w-full mt-2' type="text" name="previewImage" placeholder='Preview Image' value={inputField.previewImage} onChange={e => handlePreview(e, index)} required />

                                    <div className='flex'>
                                        <span className="cursor-pointer m-3 p-2 bg-white text-black" onClick={handleAdd}><FiPlus></FiPlus></span>
                                        {
                                            index > 0 ? <span className="cursor-pointer m-3 p-2 bg-white text-black" onClick={() => handleMinus(index)}><TbMinus></TbMinus></span> : <span disabled={true} className="cursor-pointer m-3 p-2 bg-white text-black"><TbMinus></TbMinus></span>
                                        }
                                    </div>
                                </div>
                            )}
                        {
                            categoryValueData === 'latest-instagram-post' || categoryValueData === 'learning-video-tutorial' ?
                                <input className='p-2 w-full mt-2' type="text" name="link" placeholder='Link' required /> : ''
                        }
                        <button className='bg-white text-black p-2 mt-3'>Add Project</button>
                    </form>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Dashboard;