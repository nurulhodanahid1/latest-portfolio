import React from 'react';
import Fade from 'react-reveal/Fade';
import ContactForm from './ContactForm';
import ContactIcon from './ContactIcon';

const Contact = () => {
  return (
    <section id="contact" className="text-gray-600 bg-slate-900 body-font relative py-16">
      <div className="px-8">
        <Fade top duration={1000}>
          <h2 className="text-center text-slate-200 md:text-4xl lg:text-5xl text-3xl font-medium">Get <span className="text-green-500">In Touch</span></h2>
        </Fade>
        <div className="container px-5 pt-12 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-1/2 md:w-1/2 bg-slate-700 rounded-l p-14">
            <ContactIcon />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>

  );
};

export default Contact;