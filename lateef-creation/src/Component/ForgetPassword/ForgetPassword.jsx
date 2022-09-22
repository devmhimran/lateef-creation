import React from 'react';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
    return (
        <div className='forget__password container mx-auto flex justify-center items-center h-screen'>
            <div className="forget__content w-2/5 h-fit border p-6">
                <h2 className='text-white text-2xl'>Forget Password</h2>
                <form>
                    <div className="my-6">
                        <input className='w-full bg-transparent border outline-0 text-white px-3 py-2' placeholder='Email Email' type="email" name="email" />
                    </div>
                    <div className="mt-6">
                        <button type='submit' className='px-6 py-3 bg-white'>Submit</button>
                    </div>
                    <div className='mt-3'>
                        <Link className='text-cyan-500 mt-3' to='/login'>Login again</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;