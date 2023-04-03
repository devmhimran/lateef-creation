import React from 'react';
import { Link } from 'react-router-dom';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { Toaster, toast } from 'react-hot-toast';

const ForgetPassword = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const handleForgotPassword = async (e) =>{
        e.preventDefault()
        const email = e.target.email.value
        await sendPasswordResetEmail(email)
        toast('Please Check Your Email', {
            icon: '📧',
          });
          e.target.reset();
    }
    return (
        <div className='forget__password container mx-auto flex justify-center items-center h-screen'>
            <div className="forget__content w-2/5 h-fit border p-6">
                <h2 className='text-white text-2xl'>Forget Password</h2>
                <form onSubmit={handleForgotPassword}>
                    <div className="my-6">
                        <input className='w-full bg-transparent border outline-0 text-white px-3 py-2' placeholder='Email Email' type="email" name="email" />
                    </div>
                    <div className="mt-6">
                        <button type='submit' className='px-6 py-3 bg-white'>Submit</button>
                    </div>
                    <div className='mt-3'>
                        <Link className='text-cyan-500 mt-3' to='/ltc-admin-login'>Login again</Link>
                    </div>
                </form>
            </div>
            <Toaster position="top-center"
                    reverseOrder={false} />
        </div>
    );
};

export default ForgetPassword;