import React, { useState } from "react";
import { Fade } from "react-reveal";

const MenuNotUsed = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <Fade top>
        <div className="sticky top-0 z-50 bg-white shadow">
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
                <span className="ml-3 text-green-500 font-bold text-5xl">{"<nahid/>"}</span>
              </a>
              <button
                className="cursor-pointer text-xl leading-none px-3 py-3 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id=""
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item mr-14">
                  <a
                    className="px-3 py-2 flex items-center text-xl leading-snug hover:text-green-500"
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item mr-14">
                  <a
                    className="px-3 py-3 flex items-center text-xl leading-snug hover:text-green-500"
                    href="#portfolio"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="nav-item mr-14">
                  <a
                    className="px-3 py-3 flex items-center text-xl leading-snug  hover:text-green-500"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <button className={"text-white items-center bg-green-500 border-0 px-6 py-2 focus:outline-none hover:bg-green-600 rounded text-xl"}>Resume</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
      </Fade>
    </>
  );
}

export default MenuNotUsed;