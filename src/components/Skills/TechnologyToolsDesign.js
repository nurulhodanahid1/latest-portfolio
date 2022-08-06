import React from 'react';
import { Zoom } from 'react-reveal';

const TechnologyToolsDesign = (props) => {
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 place-items-stretch">
            {
                props.data.map(item => {
                    return (
                        <div key={item.id} className=" hover:scale-105 transition ease-out duration-300">
                            <Zoom duration={1000}>
                                <div className={props.bgItem
                                    ? "bg-slate-800 rounded-md"
                                    : "bg-slate-900 rounded-md"
                                }>
                                    <div className="p-5">
                                        <h3 className="text-base text-slate-400 text-center font-semibold">{item.name}</h3>
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