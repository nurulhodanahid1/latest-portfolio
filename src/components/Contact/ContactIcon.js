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
                    contactIconData.map(item =>
                        <div className="flex mb-8 w-full" key={item.id}>
                            <div className="mr-6">
                                <IconContext.Provider value={{ color: "#e2e8f0", className: "h-8 w-7" }}>
                                    <div className=''>
                                        {item.icon}
                                    </div>
                                </IconContext.Provider>
                            </div>
                            <div className="">
                                <h4 className="font-bold text-slate-200 text-xl mb-1">{item.title}</h4>

                                {
                                    !item.email ? <p className="text-base text-slate-300">
                                        {item.address}
                                    </p> :
                                        <p><a className="text-green-500 hover:underline md:text-base text-sm" href="mailto:nurul.nahid17@gmail.com">nurul.nahid17@gmail.com</a></p>
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