import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, Toaster } from 'react-hot-toast';
import { FiPlus } from 'react-icons/fi';
import { TbMinus } from 'react-icons/tb';
import auth from '../firebase.init';
import PageTitle from '../PageTitle/PageTitle';
import SidebarTitle from '../SidebarTitle/SidebarTitle';
import Cookies from 'js-cookie';

const AddProject = () => {
    const [user, loading, error] = useAuthState(auth);
    const [categoryValueData, setCategoryValueData] = useState('');


    const [link, setLink] = useState('');

    const handleCategory = (value) => {
        setCategoryValueData(value)
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

            fetch('https://lateef-creation-server.vercel.app/portfolio-upload', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json",
                    "authorization": `Bearer ${Cookies.get('accessToken')}`
                },
                body: JSON.stringify(portfolioData)

            }).then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    Cookies.remove('accessToken')
                }
                return res.json()
            })
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
    }


    const handleAdd = () => {
        setPreviewInput([...previewInput, { previewImage: '' }]);
    }
    const handleMinus = (index) => {
        const values = [...previewInput];
        values.splice(index, 1);
        setPreviewInput(values);
    }

    const handleLogOut = () => {
        signOut(auth);
    }

    return (
        <div className='addProjectMain'>
            <PageTitle title={'Add Project'}></PageTitle>
            <SidebarTitle title='Add Project' />
            <div className="flex container mx-auto lg:py-28 py-16">

                <div className="data__upload__form__main w-4/5 border p-6">
                    {/* <div className='flex justify-between items-center mb-6'>
                        <h2 className='text-white text-2xl'>Logged In: {user.displayName}</h2>
                        <button className='text-white' onClick={handleLogOut}>Logout</button>
                    </div>
                    <hr /> */}
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <h2 className='text-white text-3xl mt-3'>Upload Project</h2>
                            <input className='p-2 w-full mt-2' type="text" name="name" placeholder='Name' required />
                            {categoryValueData === 'latest-instagram-post' || categoryValueData === 'learning-video-tutorial' ? '' : <textarea className='p-2 w-full mt-2' name="description" id="" cols="30" rows="6" placeholder='Description' required></textarea>}
                            <input className='p-2 w-full mt-2' type="text" name="thumbnail" placeholder='Thumbnail' required />
                            <select className='p-2 w-full mt-2' name="category" onChange={e => handleCategory(e.target.value)} required>
                                <option value="website-uiux">Website uiux</option>
                                <option value="app-uiux">APP uiux</option>
                                <option value="creative-logo-design">Creative Logo Design</option>
                                <option value="creative-illustration-design">Creative Illustration Design</option>
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
        </div>
    );
};

export default AddProject;