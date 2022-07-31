import React, { useState } from "react";
import { Fade } from "react-reveal";

const MenuNotUsed = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <Fade top>
        <div className="sticky top-0 z-50 bg-[#0f172a] shadow">
          <nav className="relative flex flex-wrap items-center justify-between py-3">
            <div className="container px-3 mx-auto flex flex-wrap items-center justify-between">

              <div className="w-full relative flex justify-between h-8 lg:w-auto lg:static lg:block lg:justify-start">
                <a className="flex title-font font-medium items-center text-gray-900" href="/">
                  <span className="text-green-500 font-medium text-2xl">{"Nahid_"}</span>
                </a>
                <button
                  className="cursor-pointer text-xl leading-none px-3 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-200" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (navbarOpen ? "lg:flex mt-4 lg:mt-0 md:mt-4" : " hidden")
                }
                id=""
              >
                <div className={"flex flex-col lg:flex-row list-none text-[#94a3b8] lg:ml-auto"}>
                  <a href="#about" className='lg:ml-4 flex hover:bg-slate-700 hover:text-slate-200 py-2 cursor-pointer rounded'>  {/*hover:border-b */}
                    <span className='transition font-semibold px-3 items-center text-sm leading-snug'>ABOUT</span>
                  </a>
                  <a href="#skills" className='lg:ml-4 flex hover:bg-slate-700 hover:text-slate-200 py-2 cursor-pointer rounded'>
                    <span className='transition font-semibold px-3 items-center text-sm leading-snug'>SKILLS</span>
                  </a>
                  <a href="#portfolio" className='lg:ml-4 flex hover:bg-slate-700 hover:text-slate-200 py-2 cursor-pointer rounded'>
                    <span className='transition font-semibold px-3 items-center text-sm leading-snug'>PORTFOLIO</span>
                  </a>
                  <a href="#contact" className='lg:ml-4 flex hover:bg-slate-700 hover:text-slate-200 py-2 cursor-pointer rounded'>
                    <span className='transition font-semibold px-3 items-center text-sm leading-snug'>CONTACT</span>
                  </a>
                  {navbarOpen && <hr className="border-slate-600 my-2" />}
                  <a className="lg:ml-80 bg-green-500 text-white px-3 py-2 focus:outline-none transition durartion-300 delay-100 hover:bg-green-600 rounded-full text-sm font-semibold cursor-pointer" href="https://drive.google.com/file/d/1kKgYFLx7ZM6O7OKwxZQWENYwwsxY_3Z5/view?usp=sharing" target="_blank" rel="noreferrer">
                    <span className="flex justify-center">RESUME</span>
                  </a>
                </div>
              </div>

            </div>
          </nav>
        </div>
      </Fade>
    </>
  );
}

export default MenuNotUsed;