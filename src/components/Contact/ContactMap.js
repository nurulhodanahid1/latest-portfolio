import React from 'react';
import { Fade } from 'react-reveal';

const ContactMap = () => {
    return (
        <>
            <div className="">
                <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=telihaty%20-%201740+(Address)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                <Fade left>
                    <div className="bg-gray-600 items-center justify-center text-white relative flex flex-wrap py-6 rounded">
                        <div className="lg:w-1/2 sm:w-full px-6">
                            <h2 className="title-font font-semibold text-gray-white tracking-widest text-sm">ADDRESS</h2>
                            <p className="mt-1 text-sm">Telihaty - 1740, Sreepur, Gazipur, Dhaka, Bangladesh</p>
                        </div>

                        <div className="lg:w-1/2 sm:w-full px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-sm">EMAIL</h2>
                            <a className="text-green-500 text-sm font-semibold leading-relaxed" href="mailto:nurul.nahid17@gmail.com">nurul.nahid17@gmail.com</a>
                            <h2 className="title-font font-semibold text-white tracking-widest text-sm mt-4">PHONE</h2>
                            <p className="leading-relaxed text-sm">+8801314410816</p>
                        </div>
                    </div>
                </Fade>
            </div>
        </>
    );
};

export default ContactMap;