import React from 'react';
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-600 body-font mt-32 text-gray-300">
      <div className="container px-5 mx-auto flex items-center sm:flex-row flex-col py-20">
        <a className="flex title-font font-medium items-center md:justify-start justify-center" href="/">
          <span className="ml-3 text-3xl text-green-500">{"nahid_"}</span>
        </a>
        <p className="text-base sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-300 sm:py-2 sm:mt-0 mt-4">© 2022 Nrul Hoda Nahid —
          <a href="https://twitter.com/nurulhodanahid1" className="ml-1 hover:underline" rel="noopener noreferrer" target="_blank">@nurulhodanahid1</a>
        </p>

        <div className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start lg:mr-16'>
          <a className="mr-6"
            href='https://www.linkedin.com/in/nurulhodanahid1/'
            target='_blank'
            rel='noreferrer'
          >
            <div className='rounded-full border-2 border-sky-500  p-3 cursor-pointer hover:scale-105 ease-in duration-300'>

              <IconContext.Provider value={{ color: "", className: "h-5 w-5" }}>
                <FaLinkedinIn />
              </IconContext.Provider>
            </div>
          </a>
          <a className="mr-6"
            href='https://github.com/nurulhodanahid1'
            target='_blank'
            rel='noreferrer'
          >
            <div className='rounded-full  border-2 border-sky-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              <IconContext.Provider value={{ color: "", className: "h-5 w-5" }}>
                <FaGithub />
              </IconContext.Provider>
            </div>
          </a>

          <a className="mr-6"
            href='https://facebook.com/nurulhodanahid1'
            target='_blank'
            rel='noreferrer'
          >
            <div className='rounded-full  border-2 border-sky-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              <IconContext.Provider value={{ color: "", className: "h-5 w-5" }}>
                <FaFacebook />
              </IconContext.Provider>
            </div>
          </a>


          <a className="mr-6"
            href='https://twitter.com/nurulhodanahid1'
            target='_blank'
            rel='noreferrer'
          >
            <div className='rounded-full border-2 border-sky-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              <IconContext.Provider value={{ color: "", className: "h-5 w-5" }}>
                <FaTwitter />
              </IconContext.Provider>
            </div>
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;