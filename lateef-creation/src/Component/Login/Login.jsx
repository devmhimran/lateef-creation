import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login__main container mx-auto flex justify-center items-center h-screen">
            <div className="login__content w-2/5 h-fit border p-6">
                <h2 className='text-white text-2xl'>Login</h2>
                <form className='mt-6'>
                    <div className="login__input my-6">
                        <input className='w-full bg-transparent border outline-0 text-white px-3 py-2' placeholder='Email Email' type="email" name="email"/>
                    </div>
                    <div className="login__input my-6">
                        <input className='w-full bg-transparent border outline-0 text-white px-3 py-2' placeholder='Enter Password' type="password" name="email"/>
                        <Link className='text-cyan-500' to='/forget-password'>Forget Password?</Link>
                    </div>
                    <div className="login__input mt-6">
                        <button type='submit' className='px-6 py-3 bg-white'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;