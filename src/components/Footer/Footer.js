import React from 'react';
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href="/">
          <span className="ml-3 text-xl text-green-500">{"<Nahid />"}</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 Nrul Hoda Nahid —
          <a href="https://twitter.com/nurulhodanahid1" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@nurulhodanahid1</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="ml-3 text-gray-500" href="https://www.linkedin.com/in/nurulhodanahid1/" target='_blank' rel='noreferrer'>
            <FaLinkedinIn />
          </a>
          <a className="ml-3 text-gray-500" href="https://github.com/nurulhodanahid1" target='_blank' rel='noreferrer'>
            <FaGithub />
          </a>
          <a className="ml-3 text-gray-500" href="https://facebook.com/nurulhodanahid1" target='_blank' rel='noreferrer'>
            <FaFacebook />
          </a>
          <a className="ml-3 text-gray-500" href="https://twitter.com/nurulhodanahid1" target='_blank' rel='noreferrer'>
            <FaTwitter />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;