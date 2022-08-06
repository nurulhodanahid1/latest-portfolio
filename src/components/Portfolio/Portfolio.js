import React from 'react';
import { Fade, Rotate } from 'react-reveal';
import { useNavigate } from 'react-router-dom';
import projectsData from '../../jsonData/projects';


const Portfolio = () => {
    const navigate = useNavigate();
    const projectDetails = id => {
        navigate(`/projects/${id}`);
    }

    return (
        <div className="bg-slate-800" id="portfolio">
            <div className="container mx-auto px-8 py-20 text-gray-600">
                <Fade top duration={1000}>
                    <h2 className="text-center text-slate-200 uppercase md:text-3xl lg:text-4xl text-2xl font-medium">Something that <span className="text-blue-500">I've build</span></h2>
                </Fade>
                <div className="grid md:grid-cols-3 gap-12 justify-center pt-16">
                <Rotate bottom right>

                    {
                        projectsData.map(p =>
                            <div key={p.id} className="max-w-md rounded overflow-hidden shadow-lg bg-slate-900">
                                    <div onClick={() => projectDetails(p.id)} className="relative scale-100 hover:scale-105 transform duration-500 cursor-pointer">
                                        <img className="rounded h-60" src={p.img} alt="project img" />
                                        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-slate-200'>
                                            <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                                                VIEW IN DETAILS
                                            </p>
                                            
                                        </div>
                                    </div>
                                    <div className="px-2 py-4">
                                        <div className="font-bold text-xl mb-2 text-slate-200">{p.name}</div>
                                        <p className="text-slate-400 text-base">
                                            {p.description.slice(0, 80)}
                                        </p>
                                    </div>
                                <div className="px-2 pt-4 pb-4">
                                    <a target="_blank" rel='noreferrer' href={p.live} className="inline-block bg-green-500 hover:bg-green-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 transition durartion-300 delay-100">Live demo</a>

                                    <a target="_blank" rel='noreferrer' href={p.client} className="inline-block bg-green-500 hover:bg-green-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 transition durartion-300 delay-100">Client site</a>

                                    <a target="_blank" rel='noreferrer' href={p.server} className="inline-block bg-green-500 hover:bg-green-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 transition durartion-300 delay-100">Server site</a>
                                </div>
                            </div>
                        )
                    }
                    </Rotate>
                </div>
            </div>


        </div>
    );
};

export default Portfolio;