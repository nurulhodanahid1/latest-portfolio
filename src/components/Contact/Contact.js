import React from 'react';
import Fade from 'react-reveal/Fade';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';

const Contact = () => {
  return (
    <section id="contact" className="text-gray-600 body-font relative mt-24">
      <div className="px-8">
        <Fade top duration={1000}>
          <h2 className="text-center md:text-4xl lg:text-5xl text-3xl font-medium">Get In Touch</h2>
        </Fade>
        <div className="container px-5 pt-12 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <ContactMap />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;