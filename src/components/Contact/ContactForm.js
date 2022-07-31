import React from 'react';
import { Fade } from 'react-reveal';

const ContactForm = () => {
    return (
        <>
            <Fade right>
                <div className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 bg-slate-800 rounded-r p-14">
                    <h2 className="text-slate-200 text-4xl mb-1 font-medium title-font">Let's Talk</h2>
                    <p className="mb-5 text-base text-slate-400">Whether you have a question or want to hire me, My inbox is always open.</p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-base text-slate-400 font-semibold">NAME <span className="text-red-500">*</span></label>
                        <input type="text" id="name" name="name" className="w-full text-slate-200 bg-slate-600 rounded border-2 border-slate-800 focus:border-blue-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-base text-slate-400 font-semibold">EMAIL <span className="text-red-500">*</span></label>
                        <input type="email" id="email" name="email" className="w-full bg-slate-600 rounded border-2 border-slate-800 focus:border-blue-500 text-base outline-none text-slate-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-base text-slate-400 font-semibold">MESSAGE <span className="text-red-500">*</span></label>
                        <textarea id="message" name="message" className="w-full bg-slate-600 rounded border-2 border-slate-800 focus:border-blue-500 h-32 text-base outline-none text-slate-200 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <Fade bottom delay={1000}>
                        <button className="text-slate-200 bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-full text-base font-semibold transition duration-300">Send</button>
                    </Fade>
                </div>
            </Fade>
        </>
    );
};

export default ContactForm;