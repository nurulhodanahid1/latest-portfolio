import React from 'react';
import { MdDesignServices, MdOutlineScreenSearchDesktop } from 'react-icons/md';
import { BsCodeSlash } from 'react-icons/bs';
import { FaPaintBrush } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { Zoom } from 'react-reveal';
const toDoData = [
    {
        id: 1,
        icon: <MdOutlineScreenSearchDesktop />,
        title: "SEO(Search Engine Optimization)",
        description: 'I employ best SEO practices like "Semantic HTML" and more on websites and projects I work on to improve the site visibility and rankings on Google.',
    },
    {
        id: 2,
        icon: <FaPaintBrush />,
        title: "Responsive Design",
        description: 'I am passionate about responsiveness and making the websites I build look good on different devices, browsers and cross platforms using both "mobile first" approach and desktop "media queries"'
    },
    {
        id: 3,
        icon: <BsCodeSlash />,
        title: "Reuseable & Minimal Code",
        description: "I try my best to write my code as minimal and efficient as possible by using tools like CSS Variables and writing custom utility classes. And create reusable components for future use."
    },
    {
        id: 4,
        icon: <MdDesignServices />,
        title: "Greate UI/UX",
        description: "I value simple content structure, clean design patterns, and thoughtful interactions. And have a strong eye for designs, which allows me to transform templates into pixel-perfect code while making it accessible to all users."
    }
]

const EnjoyToDo = () => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 items-center justify-center">
            {
                toDoData.map(toDo => {
                    return (
                        <Zoom key={toDo.id} duration={1000}>
                        <div className="bg-gray-100 hover:border-gray-100 hover:bg-white hover:shadow-lg rounded-md h-full w-full cursor-pointer transition ease-in-out duration-150">
                            <div className="p-9">
                                <IconContext.Provider value={{ color: "#22c55e", className: "h-16 w-16 mb-4" }}>
                                    <div className='grid grid-cols-1 place-items-center'>
                                        {toDo.icon}
                                    </div>
                                </IconContext.Provider>
                                <h3 className="text-2xl font-medium mb-4">{toDo.title}</h3>
                                <p className="text-xl">{toDo.description}</p>
                            </div>
                        </div>
                        </Zoom>)
                })
            }
        </div>
    );
};

export default EnjoyToDo;