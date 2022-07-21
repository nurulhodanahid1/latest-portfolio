import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import { useNavigate, useParams } from 'react-router-dom';
import projectsData from '../../../data/projects'


const ProjectDetails = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    }
    const projectDetail = projectsData.find(project => project.id === parseInt(projectId));
    const { name, img, description, mainTechnology, live, client, server, toolsAndTechnology } = projectDetail;
    return (
        <>
            <div className='w-full text-gray-600'>
                <div className='w-full h-[75vh] relative'>
                    <div className='absolute top-0 left-0 w-full h-[75vh] bg-black/70 z-10' />
                    <img
                        className='absolute w-full h-[75vh] z-1'
                        src={img}
                        alt='/'
                    />
                    <div className='absolute top-[47%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2'>
                        <h2 className='py-2 text-green-500 text-6xl font-bold'>{name}</h2>
                        <h3 className="text-white text-4xl font-semibold">{mainTechnology}</h3>
                    </div>
                </div>

                <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                    <div className='col-span-4 p-4'>
                        <h2 className="text-4xl font-semibold pt-4 pb-4">Project Overview:</h2>
                        <p className="text-xl">{description}</p>
                        <div className="px-3 pt-4 pb-2">
                            <a target="_blank" rel='noreferrer' href={live} className="inline-block bg-green-500 hover:bg-green-600 rounded-full px-5 py-3 text-base font-semibold text-white mr-2 mb-2 transition durartion-300 delay-100">Live demo</a>

                            <a target="_blank" rel='noreferrer' href={client} className="inline-block bg-green-500 hover:bg-green-600 rounded-full px-5 py-3 text-base font-semibold text-white mr-2 mb-2 transition durartion-300 delay-100">Client site</a>

                            <a target="_blank" rel='noreferrer' href={server} className="inline-block bg-green-500 hover:bg-green-600 rounded-full px-5 py-3 text-base font-semibold text-white mr-2 mb-2 transition durartion-300 delay-100">Server site</a>
                        </div>

                    </div>
                    <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-300 rounded-xl py-4'>
                        <div className='p-2'>
                            <p className='text-center text-2xl font-bold pb-2'>Technologies</p>
                            <div className='grid grid-cols-3 md:grid-cols-1 '>
                                {
                                    toolsAndTechnology.map(item => {
                                        return (
                                            <p className='text-gray-600 py-2 flex text-xl font-semibold items-center'>
                                                <RiRadioButtonFill className='pr-1' />{item}
                                            </p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <button onClick={goBack}
                        className="underline text-2xl font-semibold"
                    >Go Back</button>
                </div>
            </div>
        </>
    );
};

export default ProjectDetails;