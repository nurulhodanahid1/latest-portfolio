import React from 'react';
import Fade from 'react-reveal/Fade';
import ContactForm from './ContactForm';
import ContactIcon from './ContactIcon';

const Contact = () => {
  return (
    <section id="contact" className="text-gray-600 bg-slate-900 body-font py-16">
      <Fade top duration={1000}>
        <h2 className="text-center text-slate-200 md:text-4xl lg:text-5xl text-3xl font-medium">Get <span className="text-green-500">In Touch</span></h2>
      </Fade>
      <div className="px-14 py-10">
        <div className="flex flex-wrap">
          <div className="md:w-1/2 w-full py-4">
            <div className="h-full bg-slate-700 p-10 rounded-l">
              <ContactIcon />
            </div>
          </div>
          <div className="md:w-1/2 w-full py-4">
            <div className="h-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Contact;