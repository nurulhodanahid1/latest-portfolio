import React from 'react';
import { Fade } from 'react-reveal';
import EnjoyToDo from './EnjoyToDo';
import TechnologyToolsDesign from './TechnologyToolsDesign';
import htmlImg from '../../images/html.svg';
import cssImg from '../../images/css.svg';
import bootstrapImg from '../../images/bootstrap.svg';
import firebaseImg from '../../images/firebase.svg';
import javascriptImg from '../../images/javascript.svg';
import mongodbImg from '../../images/mongodb.svg';
import nextImg from '../../images/next.svg';
import nodeImg from '../../images/node.svg';
import reactImg from '../../images/react.svg';
import reduxImg from '../../images/redux.svg';
import tailwindImg from '../../images/tailwind.svg';
import typescriptImg from '../../images/typescript.svg';

const technologyTools = [
    {
        id: 1,
        name: 'HTML5',
        img: htmlImg
    },
    {
        id: 2,
        name: "CSS3",
        img: cssImg
    },
    {
        id: 3,
        name: "JavScript",
        img: javascriptImg
    },
    {
        id: 4,
        name: "React",
        img: reactImg
    },
    {
        id: 5,
        name: "Tailwind CSS",
        img: tailwindImg
    },
    {
        id: 12,
        name: "Redux",
        img: reduxImg
    },
    {
        id: 8,
        name: "Bootstrap",
        img: bootstrapImg
    },
    {
        id: 14,
        name: "TypeScript",
        img: typescriptImg
    },
    {
        id: 9,
        name: "MongoDB",
        img: mongodbImg
    },
    {
        id: 10,
        name: "NodeJS",
        img: nodeImg
    },
    {
        id: 6,
        name: "Firebase",
        img: firebaseImg
    }
    ,
    {
        id: 13,
        name: "Next JS",
        img: nextImg
    }
];

// const designs = [
//     {
//         id: 1,
//         name: "Photoshop"
//     },
//     {
//         id: 2,
//         name: "Illustrator"
//     },
//     {
//         id: 3,
//         name: "Figma"
//     }
//     , {
//         id: 4,
//         name: "Sketch"
//     }
// ]

const Skills = () => {
    return (
        <section id="skills">
            <div className="text-gray-600 body-font bg-slate-900">
                <div className='container mx-auto px-6 py-10 items-center'>
                    <div className="py-10">
                        <Fade top duration={1000}>
                            <h2 className="text-center text-slate-200 md:text-4xl text-3xl font-medium mb-12">Technologies And <span className="text-blue-500">Tools I Use</span></h2>
                            <TechnologyToolsDesign data={technologyTools} />
                        </Fade>
                    </div>
                </div>
            </div>
            <div className="text-gray-600 body-font bg-slate-800">
                <div className='container mx-auto px-6 py-10 items-center'>
                    <div className="py-10">
                        <Fade top duration={1000}>
                            <h2 className="text-center text-slate-200 md:text-4xl text-3xl font-medium mb-12">Things That I <span className="text-green-500">Enjoy To Do</span></h2>
                        </Fade>
                        <EnjoyToDo />
                    </div>
                </div>
            </div>
            {/* <div className="text-gray-600 body-font bg-slate-900">
                <div className='container mx-auto px-8 py-10 items-center'>
                    <div className="py-10">
                        <Fade top duration={1000}>
                            <h2 className="text-center text-green-500 text-3xl font-medium mb-12">DESIGN</h2>
                            <TechnologyToolsDesign bgItem={"bg-slate-800"} data={designs} />
                        </Fade>
                    </div>
                </div>
            </div> */}
        </section>

    );
};

export default Skills;