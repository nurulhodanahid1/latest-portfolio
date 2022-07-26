import React from 'react';
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Fade } from 'react-reveal';

const Footer = () => {
  return (
    <footer id="footer" className="bg-slate-900 body-font text-slate-500">
      <Fade bottom>
        <div className="container px-5 mx-auto flex items-center flex-col-reverse sm:flex-row py-24">
          <a className="flex title-font font-medium items-center md:justify-start justify-center" href="/">
            <span className="ml-3 text-2xl text-green-500">{"nahid_"}</span>
          </a>
          <p className="text-sm items-center justify-center sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-300 sm:py-2 sm:mt-0 mt-4">© 2022 Nurul Nahid —
            <a href="https://twitter.com/nurulhodanahid1" className="ml-1 hover:underline" rel="noopener noreferrer" target="_blank">@nurulhodanahid1</a>
          </p>

          <div className='text-blue-500 inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start lg:mr-16'>
            <a className="mr-2"
              href='https://www.linkedin.com/in/nurulhodanahid1/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded border-2 border-blue-500  p-1 cursor-pointer hover:scale-105 ease-in duration-300'>

                <IconContext.Provider value={{ color: "", className: "h-4 w-4" }}>
                  <FaLinkedinIn />
                </IconContext.Provider>
              </div>
            </a>
            <a className="mr-2"
              href='https://github.com/nurulhodanahid1'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded  border-2 border-blue-500 p-1 cursor-pointer hover:scale-105 ease-in duration-300'>
                <IconContext.Provider value={{ color: "", className: "h-4 w-4" }}>
                  <FaGithub />
                </IconContext.Provider>
              </div>
            </a>

            <a className="mr-2"
              href='https://facebook.com/nurulhodanahid1'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded  border-2 border-blue-500 p-1 cursor-pointer hover:scale-105 ease-in duration-300'>
                <IconContext.Provider value={{ color: "", className: "h-4 w-4" }}>
                  <FaFacebook />
                </IconContext.Provider>
              </div>
            </a>


            <a className="mr-2"
              href='https://twitter.com/nurulhodanahid1'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded border-2 border-blue-500 p-1 cursor-pointer hover:scale-105 ease-in duration-300'>
                <IconContext.Provider value={{ color: "", className: "h-4 w-4" }}>
                  <FaTwitter />
                </IconContext.Provider>
              </div>
            </a>

          </div>
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;