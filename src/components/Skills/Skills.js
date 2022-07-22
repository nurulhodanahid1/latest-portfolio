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
    ,{
        id: 4,
        name: "Sketch"
    }
]

const Skills = () => {
    return (
        <section id="skills" className="text-gray-600 body-font">
            <div className='container mx-auto px-8 items-center'>
                <div className="mt-10">
                    <Fade top duration={1000}>
                        <h2 className="text-center text-3xl font-medium mb-12">Things that I enjoy to do.</h2>
                    </Fade>
                    <EnjoyToDo />
                </div>
                <div className="mt-24">
                    <Fade top duration={1000}>
                        <h2 className="text-center text-3xl font-medium mb-12">Technologies and tools I use.</h2>
                        <TechnologyToolsDesign data={technologyTools} />
                    </Fade>
                </div>
                <div className="mt-24">
                    <Fade top duration={1000}>
                        <h2 className="text-center text-3xl font-medium mb-12">Design</h2>
                        <TechnologyToolsDesign data={designs} />
                    </Fade>
                </div>
            </div>
        </section>

    );
};

export default Skills;