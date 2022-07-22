import React from 'react';
import { Zoom } from 'react-reveal';

const TechnologyToolsDesign = (props) => {
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 place-items-stretch">
        {
            props.data.map(item => {
                return (
                    <Zoom key={item.id} duration={1000}>
                    <div className="bg-gray-100 hover:bg-green-500 shadow-lg hover:text-white rounded-md cursor-pointer transition ease-in-out duration-150">
                        <div className="p-5">
                            <h3 className="text-base text-center font-semibold">{item.name}</h3>
                        </div>
                    </div>
                    </Zoom>)
            })
        }
    </div>
    );
};

export default TechnologyToolsDesign;