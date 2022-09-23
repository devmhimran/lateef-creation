import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    let loginError;
    if (error) {
        loginError = error.message;
    }
    let from = location.state?.from?.pathname || "/lateef-creation-dashboard";
    if (user) {
        navigate(from, { replace: true });
    }

    const handleLogin = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(email, password);

    }
    return (
        <div className="login__main container mx-auto flex justify-center items-center h-screen">
            <div className="login__content w-2/5 h-fit border p-6">
                <h2 className='text-white text-2xl'>Login</h2>
                <form className='mt-6' onSubmit={handleLogin}>
                    <div className="login__input my-6">
                        <input className='w-full bg-transparent border outline-0 text-white px-3 py-2' placeholder='Email Email' type="email" name="email"/>
                    </div>
                    <div className="login__input my-6">
                        <input className='w-full bg-transparent border outline-0 text-white px-3 py-2' placeholder='Enter Password' type="password" name="password"/>
                        <Link className='text-cyan-500' to='/forget-password'>Forget Password?</Link>
                    </div>
                    <span className='text-sm text-red-500'>{loginError}</span>
                    <div className="login__input mt-6">
                        <button type='submit' className='px-6 py-3 bg-white'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;