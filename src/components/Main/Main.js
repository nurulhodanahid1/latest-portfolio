import React from 'react';
import { Fade } from 'react-reveal';
import TypeAnimation from 'react-type-animation';
import nahidImg from '../../../src/data/images/nahid.jpg'

const Main = () => {
    return (
        <section id="about" className="text-gray-600 body-font h-full">
            <div className="container mx-auto flex px-8 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <Fade bottom >
                        <h4 className="title-font lg:text-6xl  text-5xl mb-4 font-medium">Hi, I'm <span className="text-green-500">Nahid</span>.</h4>

                        <TypeAnimation className="lg:text-4xl font-semibold text-3xl text-sky-500 h-12"
                            cursor={true}
                            sequence={['Front-End Developer.', 4000, 'JavaScript Developer.', 4000, 'React Developer.', 4000]}
                            repeat={Infinity}
                        />
                    </Fade>
                    <Fade bottom delay={300}>
                        <p className="mb-8 mt-4 leading-relaxed text-sm">I'm a passionate Front-End Developer. I develop web applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I am available for any kind of job opportunity that suits my interests.</p>
                    </Fade>
                    <div className="flex justify-center">
                        <a href="https://drive.google.com/file/d/1kKgYFLx7ZM6O7OKwxZQWENYwwsxY_3Z5/view?usp=sharing" target="_blank" rel="noreferrer" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-full text-base font-semibold transition duration-300">Get Resume</a>
                        <a href="#skills" className="ml-4 inline-flex text-green-500 border-green-600 hover:text-white border-2 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-full text-base transition duration-300 font-semibold">My Skills</a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mt-10">
                    <img className="object-cover object-center cursor-pointer rounded-full ring-2 ring-sky-500 ring-offset-0 mx-auto scale-90 hover:scale-95 transform duration-500" alt="Nahid" src={nahidImg} />
                </div>
            </div>
        </section>
    );
};

export default Main;