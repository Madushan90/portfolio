import React, { useState, useRef } from 'react'
import BgLine from '../../src/assets/bg.svg'
import { MailIcon, Phone, MapPin  } from 'lucide-react'

const ContactMe = () => {
    // 1. State to hold the submission result (success/error message)
    const [result, setResult] = useState("");
    // 2. Ref to access the form element directly
    const formRef = useRef(null); 

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending..."); // Show a temporary "Sending..." message

        const formData = new FormData(event.target);
        formData.append("access_key", "671089e6-fb7e-4232-98cc-887d60b4b341");

        formData.append("h-captcha-response", "true");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            
            if (data.success) {
                setResult("Message sent successfully! 😊");
                // 3. Clear the form fields on success
                formRef.current.reset(); 
            } else {
                setResult(data.message || "An error occurred. Please try again.");
            }

            // Optional: Clear the message after a few seconds
            setTimeout(() => {
                setResult("");
            }, 5000);

        } catch (error) {
            console.error("Submission error:", error);
            setResult("Could not connect to the server. Please check your network.");
             // Optional: Clear the message after a few seconds
             setTimeout(() => {
                setResult("");
            }, 5000);
        }
    };


  return (
    <div id="contact" className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-36'>
        <div className='relative'>
            <h1 className='text-white text-5xl font-extralight text-center mb-20'>Get In Touch</h1>
            <img src={BgLine} className='absolute top-14 left-23/50 md:left-24/50 transform -translate-x-1/2 -translate-y-1/2 w-80' alt='topic-image' />
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
                <h1 className="text-white text-3xl relative">Talk to me
                    <span className='text-8xl absolute -top-12 text-cyan-600'>,</span>
                </h1>
                <p className="text-white text-lg mt-10 mb-5 leading-7">
                    Feel free to send me a message on anything about Frontend Development, Web and UI/UX Designing, Wordpress Development or anything you believe that I can help to you from my knowladge.
                </p>
                <div className='flex text-white mb-5'>
                    <MailIcon /><p className='text-lg ml-3 leading-5'><a href="mailto:cmkumarathunga@gmail.com">cmkumarathunga@gmail.com</a></p> 
                </div>
                <div className='flex text-white mb-5'>
                    <Phone /><p className='text-lg ml-3 leading-5'>Phone</p> 
                </div>
                <div className='flex text-white'>
                    <MapPin /><p className='text-lg ml-3 leading-5'>Sri Lanka</p> 
                </div>
            </div>
            <div>
                <div className='p-5 bg-cyan-800/10 rounded-2xl'>
                    {/* Attach the ref to the form element */}
                    <form onSubmit={onSubmit} ref={formRef}>
                        <div className='mb-5'>
                            <label htmlFor="username" className="block text-white">Name</label>
                            <div className="flex items-center rounded-md bg-black/20 mt-0.5 pl-3">
                                <input type="text" name="name" placeholder="Name" className="block min-w-0 grow bg-transparent py-3 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" required />
                            </div>
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="email" className="block text-white">Email</label>
                            <div className="flex items-center rounded-md bg-black/20 mt-0.5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                                <input type="email" name="email" placeholder="Email" className="block min-w-0 grow bg-transparent py-3 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" required />
                            </div>
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="message" className="block text-white">Message</label>
                            <div className="flex items-center rounded-md bg-black/20 mt-0.5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                                <textarea name="message" placeholder='Message' rows="4" className="block min-w-0 grow bg-transparent py-3 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" required></textarea>
                            </div>
                        </div>
                        <div>
                            {/* Display the result message here */}
                            {result && <p className={`my-3 font-semibold ${result.includes("success") ? 'text-green-400' : 'text-red-400'}`}>{result}</p>}
                            <button type='submit' className='inline-block text-white bg-gradient-to-r from-orange-500 to-yellow-600 rounded-3xl px-4 py-2.5 text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-200 w-30 cursor-pointer'>Submit</button>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactMe