import { send } from 'emailjs-com';
import React, { useState } from 'react';
import { Fade } from 'react-reveal';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const toSend = {
        from_name: name,
        to_name: 'Nahid',
        message: message,
        reply_to: email,
    };
    const [loading, setLoading] = useState(false);
    const [messageSend, setMessageSend] = useState(false);

    const onSubmit = (e) => {
        setLoading(true);
        setMessageSend(false);
        send(
            'service_nn10j9l',
            'template_v5j5wz9',
            toSend,
            'kPdFaMo5fQbGbOj3S'
        )
            .then((response) => {
                // console.log('SUCCESS!', response.status, response.text);
                setLoading(false);
                setMessageSend(true);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
        e.preventDefault();
    };

    return (
        <>
            <Fade right>
                <div className="bg-slate-900 rounded-r p-10">
                    <h2 className="text-blue-500 md:text-4xl text-3xl mb-1 font-medium title-font">Let's Talk</h2>
                    <p className="mb-5 text-base text-slate-400">Whether you have a question or want to hire me, My inbox is always open.</p>

                    <form onSubmit={onSubmit}>
                        <label className="leading-7 text-base text-slate-400 font-semibold">NAME <span className="text-red-500">*</span></label>
                        <input
                            className="w-full mb-3 text-slate-200 bg-slate-600 rounded border-2 border-slate-800 focus:border-blue-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            type='text'
                            name='from_name'
                            value={toSend.from_name}
                            onChange={event => setName(event.target.value)}
                            required
                        />
                        <label className="leading-7 text-base text-slate-400 font-semibold">EMAIL <span className="text-red-500">*</span></label>
                        <input
                            className="w-full mb-3 text-slate-200 bg-slate-600 rounded border-2 border-slate-800 focus:border-blue-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            type='eamil'
                            name='reply_to'
                            value={toSend.reply_to}
                            onChange={event => setEmail(event.target.value)}
                            required
                        />
                        <label className="leading-7 text-base text-slate-400 font-semibold">MESSAGE <span className="text-red-500">*</span></label>
                        <textarea
                            className="w-full mb-3 text-slate-200 bg-slate-600 rounded border-2 border-slate-800 focus:border-blue-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            type='text'
                            name='message'
                            value={toSend.message}
                            onChange={event => setMessage(event.target.value)}
                            required
                        />

                        <button className="w-[60%] flex justify-center mx-auto text-slate-200 bg-green-500 border-0 py-2 focus:outline-none hover:bg-green-600 rounded-full text-base font-semibold transition duration-300" type='submit'>SEND</button>
                        {loading && <h4 className="text-blue-500 flex justify-center text-base font-semibold py-3">Sending... Please Wait!</h4>}
                        {messageSend && <div id="toast-simple" className="w-[70%] p-3 mt-4 flex mx-auto justify-center items-center text-gray-500 rounded-lg shadow bg-slate-800" role="alert">
                            <svg aria-hidden="true" className="w-5 h-5 text-blue-500 dark:text-blue-500" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path></svg>
                            <div className="pl-3 text-slate-300 text-sm font-normal">Sending successfully!</div>
                        </div>}
                    </form>
                </div>
            </Fade>
        </>
    );
};

export default ContactForm;