import React from 'react';
import { Fade } from 'react-reveal';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineHome } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const contactIconData = [
    {
        id: 1,
        title: "Address",
        address: "Telihaty - 1740, Sreepur, Gazipur, Dhaka, Bangladesh",
        icon: <AiOutlineHome />,
        email: false

    },
    {
        id: 2,
        title: "Phone Number",
        address: "+8801314410816",
        icon: <BsFillTelephoneFill />,
        email: false

    },
    {
        id: 3,
        title: "Email Address",
        address: "nurul.nahid17@gmail.com",
        icon: <AiOutlineMail />,
        email: true
    }

]

const ContactIcon = () => {
    return (
        <>
            <Fade left>
                <div>
                    <p className="text-base text-slate-300 leading-relaxed mb-9">I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just '<span className="text-blue-500 font-bold">say Hi</span>' to me.</p>
                </div>
                {
                    contactIconData.map(item => <div className="flex mb-8 max-w-[370px] w-full">
                        <div
                            class=" max-w-[60px]  sm:max-w-[70px] w-full h-[60px] sm:h-[70px] flex items-center justify-center mr-6 overflow-hidden bg-primary bg-opacity-5 text-primary rounded
                     "
                        >
                            <IconContext.Provider value={{ color: "#e2e8f0", className: "h-10 w-10 mb-5" }}>
                                <div className='grid grid-cols-1 place-items-center'>
                                    {item.icon}
                                </div>
                            </IconContext.Provider>
                        </div>
                        <div className="w-full">
                            <h4 className="font-bold text-slate-200 text-xl mb-1">{item.title}</h4>

                            {
                                item.email ? <a className="text-green-500 drop-shadow-md shadow-green-600/50 hover:underline text-base leading-relaxed" href="mailto:nurul.nahid17@gmail.com">{item.address}</a>
                                    : <p className="text-base text-slate-300 text-body-color">
                                        {item.address}
                                    </p>
                            }
                        </div>
                    </div>)
                }
            </Fade>
        </>
    );
};

export default ContactIcon;

// 