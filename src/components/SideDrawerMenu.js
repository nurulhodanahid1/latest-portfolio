import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from 'react-icons/fa';

const SideDrawerMenu = (props) => {
    return (
        <>
            <div
                className={
                    props.nav
                        ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                }
            >
                <div>
                    <div className='flex w-full items-center justify-between'>

                        <a href="/">
                            <span className="ml-3 text-green-500 font-bold text-5xl">{"<nahid/>"}</span>
                        </a>

                        <div
                            onClick={props.handleNav}
                            className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
                        >
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>
                            Let&#39;s build something legendary together
                        </p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className=''>

                        <li onClick={() => props.setNav(false)} className='py-4'>
                            <a href="#about" className='transition duration-300 delay-100 font-semibold px-3 py-3 items-center text-regular leading-snug  hover:text-green-500'>About</a>
                        </li>




                        <li onClick={() => props.setNav(false)} className='py-4'>
                            <a href="#about" className='transition duration-300 delay-100 font-semibold px-3 py-3 items-center text-regular leading-snug  hover:text-green-500'>Skills</a>
                        </li>


                        <li onClick={() => props.setNav(false)} className='py-4'>
                            <a href="#about" className='transition duration-300 delay-100 font-semibold px-3 py-3 items-center text-regular leading-snug  hover:text-green-500'>Portfolio</a>
                        </li>


                        <li onClick={() => props.setNav(false)} className='py-4'>
                            <a href="#contact" className='transition duration-300 delay-100 font-semibold px-3 py-3 items-center text-regular leading-snug  hover:text-green-500'>Contact</a>
                        </li>


                        <li onClick={() => props.setNav(false)} className='py-4 flex'>
                            <a href="https://drive.google.com/file/d/1kKgYFLx7ZM6O7OKwxZQWENYwwsxY_3Z5/view?usp=sharing" target="_blank" rel="noreferrer" className={"text-white bg-green-500 border-0 px-8 py-3 focus:outline-none transition durartion-300 delay-100 hover:bg-green-600 rounded-full text-regular font-semibold"}>Resume</a>
                        </li>
                    </ul>

                    <div className='pt-40'>
                        <p className='tracking-widest text-green-500'>
                            Let's Connect
                        </p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <a
                                href='https://www.linkedin.com/in/nurulhodanahid1/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <div className='rounded-full text-gray-600 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                            </a>
                            <a
                                href='https://github.com/nurulhodanahid1'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <div className='rounded-full text-gray-600 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                            </a>

                            <a
                                href='https://facebook.com/nurulhodanahid1'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <div className='rounded-full text-gray-600 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaFacebook />
                                </div>
                            </a>


                            <a
                                href='https://twitter.com/nurulhodanahid1'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <div className='rounded-full text-gray-600 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaTwitter />
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideDrawerMenu;