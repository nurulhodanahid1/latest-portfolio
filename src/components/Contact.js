import React from 'react';
import Fade from 'react-reveal/Fade';
import ContactForm from './ContactForm';
import Map from './Map';

const Contact = () => {
  return (
    <section id="contact" className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <Map />
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;