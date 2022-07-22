import React from 'react';
import { Fade } from 'react-reveal';
import { useNavigate } from 'react-router-dom';
import projectsData from '../../data/projects';


const Portfolio = () => {
    const navigate = useNavigate();
    const projectDetails = id => {
        navigate(`/projects/${id}`);
    }

    return (
        <div className="pb-8 mt-24 " id="portfolio">
            <div className="container mx-auto px-8 text-gray-600">
                <Fade top duration={1000}>
                    <h2 className="text-center md:text-4xl lg:text-5xl text-3xl font-medium">Something that I'have build</h2>
                </Fade>
                <div className="grid md:grid-cols-3 gap-12 justify-center pt-12">

                    {
                        projectsData.map(p =>
                            <div key={p.id} className="max-w-md p-5 rounded overflow-hidden shadow-lg bg-gray-100 hover:bg-white">
                                <div onClick={() => projectDetails(p.id)} className="cursor-pointer">
                                    <div>
                                        <img className="rounded scale-100 hover:scale-105 transform duration-500" src={p.img} alt="project img" />
                                    </div>
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2 hover:text-green-500 hover:scale-105 ease-out duration-300">{p.name}</div>
                                        <p className="text-base">
                                            {p.description.slice(0, 80)}
                                        </p>
                                    </div>
                                </div>
                                <div className="px-2 pt-4 pb-2">
                                    <a target="_blank" rel='noreferrer' href={p.live} className="inline-block bg-green-500 hover:bg-green-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 transition durartion-300 delay-100">Live demo</a>

                                    <a target="_blank" rel='noreferrer' href={p.client} className="inline-block bg-green-500 hover:bg-green-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 transition durartion-300 delay-100">Client site</a>

                                    <a target="_blank" rel='noreferrer' href={p.server} className="inline-block bg-green-500 hover:bg-green-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 transition durartion-300 delay-100">Server site</a>
                                </div>
                            </div>

                        )
                    }

                </div>


            </div>
        </div>
    );
};

export default Portfolio;