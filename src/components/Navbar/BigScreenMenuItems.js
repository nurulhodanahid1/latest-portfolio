import React from 'react';

const BigScreenMenuItems = (props) => {
    return (
        <>
            <ul style={{ color: `${props.linkColor}` }} className='hidden md:flex'>
              <li className='lg:ml-4 flex'>  {/*hover:border-b */}
                <a href="#about" className='transition font-semibold px-3 py-1 items-center text-sm leading-snug  hover:text-green-500 hover:scale-105 ease-out duration-300'>ABOUT</a>
              </li>
              <li className='lg:ml-4 flex'>
                <a href="#skills" className='transition font-semibold px-3 py-1 items-center text-sm leading-snug  hover:text-green-500 hover:scale-105 ease-out duration-300'>SKILLS</a>
              </li>
              <li className='lg:ml-4 flex'>
                <a href="#portfolio" className='transition font-semibold px-3 py-1 items-center text-sm leading-snug  hover:text-green-500 hover:scale-105 ease-out duration-300'>PORTFOLIO</a>
              </li>
              <li className='lg:ml-4 flex'>
                <a href="#contact" className='transition font-semibold px-3 py-1 items-center text-sm leading-snug  hover:text-green-500 hover:scale-105 ease-out duration-300'>CONTACT</a>
              </li>
              <li className='lg:ml-24 flex items-center'>
                <a href="https://drive.google.com/file/d/1kKgYFLx7ZM6O7OKwxZQWENYwwsxY_3Z5/view?usp=sharing" target="_blank" rel="noreferrer" className={"text-white bg-green-500 border-0 px-3 py-1 focus:outline-none transition durartion-300 delay-100 hover:bg-green-600 rounded-full text-sm font-semibold"}>RESUME</a>
              </li>
            </ul>
        </>
    );
};

export default BigScreenMenuItems;