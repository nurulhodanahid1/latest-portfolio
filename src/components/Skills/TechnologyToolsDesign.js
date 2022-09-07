import React from 'react';
import { Zoom } from 'react-reveal';

const TechnologyToolsDesign = (props) => {
    console.log(props)
    return (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center justify-center">
            {
                props.data.map(item => {
                    return (
                        <div key={item.id} className=" hover:scale-105 transition ease-out duration-300">
                            <Zoom duration={1000}>
                                <div className={props.bgItem
                                    ? "bg-slate-900 rounded-md flex items-center justify-center"
                                    : "bg-slate-800 rounded-md flex items-center justify-center"
                                }>
                                    <div className="p-5">
                                        <img className="w-10 h-10" src={item.img} alt={item.name} />
                                        <h3 className="text-base text-slate-300 font-semibold mt-4">{item.name}</h3>
                                    </div>
                                </div>
                            </Zoom>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default TechnologyToolsDesign;