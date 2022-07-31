import React from 'react';
import { Fade } from 'react-reveal';
import EnjoyToDo from './EnjoyToDo';
import TechnologyToolsDesign from './TechnologyToolsDesign';

const technologyTools = [
    {
        id: 1,
        name: 'HTML5',
    },
    {
        id: 2,
        name: "CSS3"
    },
    {
        id: 3,
        name: "JavScript"
    },
    {
        id: 4,
        name: "React"
    },
    {
        id: 5,
        name: "Tailwind CSS"
    },
    {
        id: 6,
        name: "Firebase"
    },
    {
        id: 7,
        name: "GitHub"
    },
    {
        id: 8,
        name: "Bootstrap"
    },
    {
        id: 9,
        name: "MongoDB"
    },
    {
        id: 10,
        name: "NodeJS"
    },
    {
        id: 11,
        name: "Express JS"
    },
    {
        id: 12,
        name: "Material UI"
    }
];

const designs = [
    {
        id: 1,
        name: "Photoshop"
    },
    {
        id: 2,
        name: "Illustrator"
    },
    {
        id: 3,
        name: "Figma"
    }
    , {
        id: 4,
        name: "Sketch"
    }
]

const Skills = () => {
    return (
        <section id="skills">
            <div className="text-gray-600 body-font bg-slate-900">
                <div className='container mx-auto px-8 py-10 items-center'>
                    <div className="py-10">
                        <Fade top duration={1000}>
                            <h2 className="text-center uppercase title-font text-slate-200 text-3xl font-medium mb-12">Things that I <span className="text-green-500">enjoy to do</span></h2>
                        </Fade>
                        <EnjoyToDo />
                    </div>
                </div>
            </div>
            <div className="text-gray-600 body-font bg-slate-800">
                <div className='container mx-auto px-8 py-10 items-center'>
                <div className="py-10">
                     <Fade top duration={1000}>
                         <h2 className="text-center text-slate-200 text-3xl font-medium title-font mb-12 uppercase">Technologies and <span className="text-blue-500">tools I use</span></h2>
                         <TechnologyToolsDesign data={technologyTools} />
                    </Fade>
                 </div>
                </div>
            </div>
            <div className="text-gray-600 body-font bg-slate-900">
                <div className='container mx-auto px-8 py-10 items-center'>
                <div className="py-10">
                   <Fade top duration={1000}>
                        <h2 className="text-center text-green-500 text-3xl font-medium mb-12">DESIGN</h2>
                        <TechnologyToolsDesign bgItem={"bg-slate-800"} data={designs} />
                    </Fade>
                </div>
                </div>
            </div>
        </section>

    );
};

export default Skills;