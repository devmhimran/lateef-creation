import React, { useRef } from 'react';
import { FaTelegramPlane } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_to4emq9', 'template_bdceq8d', form.current, 'xWWMZGsAy02ckLYDn')
            .then((result) => {
                toast.success('Successfully Send!')
            }, (error) => {
            });
        e.target.reset();
    }
    return (
        <div className='contact__main bg-black mx-3 lg:mx-0 p-16 lg:p-24 mb-44 text-white'>
            <h2 className='text-center text-2xl lg:text-5xl'>Get in touch — let's <br /> work together.</h2>
            <form className='mt-14' ref={form} onSubmit={sendEmail}>
                <div className="contact__form__main">
                    <div className="input__field block lg:flex justify-between py-0 lg:py-4">
                        <input className='text-white text-base lg:text-xl placeholder:text-white w-full lg:w-[45%] p-3 outline-0 bg-black border-b border-[#3E3E3E] my-4 lg:my-0' type="text" name="user_name" placeholder="What's your name?"  required/>
                        <input className='text-white text-base lg:text-xl placeholder:text-white w-full lg:w-[45%] p-3 outline-0 bg-black border-b border-[#3E3E3E] my-4 lg:my-0' type="text" name="user_email" placeholder="What's your email address?"  required/>
                    </div>
                    <div className="input__field block lg:flex justify-between py-0 lg:py-4">
                        <select className='text-white text-base lg:text-xl placeholder:text-white w-full lg:w-[45%] p-3 outline-0 bg-black border-b border-[#3E3E3E] my-4 lg:my-0' name="user_interest"  required>
                            <option value="">What are you interested in?</option>
                            <option value="Need help with a one-off project">Need help with a one-off project</option>
                            <option value="Need Website UIUX Design">Need Website UIUX Design</option>
                            <option value="Need App UIUX Design">Need App UIUX Design</option>
                            <option value="Need Logo Design">Need Logo Design</option>
                            <option value="Need illustration Design">Need illustration Design</option>
                            <option value="Looking for a long term partnership">Looking for a long term partnership</option>
                            <option value="Want to hire me full-time">Want to hire me full-time</option>
                            <option value="Just wanted to say Hi!">Just wanted to say Hi!</option>
                        </select>

                        <select className='text-white text-base lg:text-xl placeholder:text-white w-full lg:w-[45%] p-3 outline-0 bg-black border-b border-[#3E3E3E] my-4 lg:my-0' name="user_budget" required>
                            <option>What's your budget?</option>
                            <option value="$100-$500">$100-$500</option>
                            <option value="$500-$1000">$500-$1000</option>
                            <option value="$1000-$2000">$1000-$2000</option>
                            <option value="$2000-$5000">$2000-$5000</option>
                            <option value="$5000-$10000">$5000-$10000</option>
                        </select>
                    </div>
                    <div className="input__field justify-between py-4">
                        <textarea className='text-white text-base lg:text-xl placeholder:text-white w-full p-3 outline-0 bg-black border-b border-[#3E3E3E] my-4 lg:my-0' name="user_message" placeholder="What's your message?"  required></textarea>
                    </div>
                    <div className="input__field justify-between py-4">
                        <button className='contact__send bg-white text-black p-4 lg:p-5 border hover:bg-black hover:text-white duration-300 capitalize flex items-center font-bold text-base mx-auto'> <span className='text-2xl mr-2'><FaTelegramPlane></FaTelegramPlane></span> send message</button>
                    </div>
                </div>
            </form>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Contact;