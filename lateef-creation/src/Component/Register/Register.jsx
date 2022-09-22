import { async } from '@firebase/util';
import React from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        // await sendEmailVerification();
    }
    if(error){
        console.log(error)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className='mx-6' type="text" name="name" />
                <input className='mx-6' type="email" name="email" />
                <input className='mx-6' type="password" name="password" />
                <button className='mx-6' type='submit'>Register</button>
            </form>
        </div>
    );
};

export default Register;