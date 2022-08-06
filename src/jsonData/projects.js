import heroAirvice from './hero-airvice.jpg';
import heroFanstagram from './fanstagram.jpg';
import heroBetterBuys from './better-buys.jpg';

const projectsData = [
    {
        id: 1,
        name: 'FanstaGram (MERN Stack)',
        img: heroFanstagram,
        description: 'This is Social Media type website. In this website user can create new post, like and unlike in any post, comment in any post, follow and unfollow any user, manage his profile.',
        mainTechnology: "React JS, Node JS, Express Js, MongoDB, React Bootstrap",
        toolsAndTechnology: ['React JS', 'Node JS', 'Express Js', 'MongoDB', 'Firebase Hosting', 'React Bootstrap', "React Router", 'React Hook From'],
        live: 'https://fanstagram-5cb3a.web.app/',
        client: 'https://github.com/nurulhodanahid1/fanstagram-client',
        server: 'https://github.com/nurulhodanahid1/fanstagram-server'
    },
    {
        id: 2,
        name: 'Airvice AC Repair (Full Stack)',
        img: heroAirvice,
        description: 'AirVice AC Repair is Service providing type website. This project is done with React JS. From this website you can get the service as per your demand. After taking the service, you will be able to give your review. Different dashboard for user and admins. Admin can see all orders placed by users, make someone an admin, add new services, Manage orders',
        mainTechnology: "React JS, Node JS, Express, MongoDB, Firebase",
        toolsAndTechnology: ['React JS', 'Node JS', 'Express Js', 'MongoDB', 'Firebase Authentication', "Firebase Hosting", 'React Router', 'React Hook From'],
        live: 'https://airvice-ac-repair.web.app/',
        client: 'https://github.com/nurulhodanahid1/airvice-ac-repair-client',
        server: 'https://github.com/nurulhodanahid1/airvice-ac-repair-server'
    },
    {
        id: 3,
        name: 'Better Buys (Full Stack)',
        img: heroBetterBuys,
        description: 'Better Byus is a MERN Stack project. In this website I use Firebase Authentication, User can Order his chosen items, User can see all his oreder list',
        mainTechnology: "React JS, Node JS, Express, MongoDB, Firebase",
        toolsAndTechnology: ['React JS', 'Node JS', 'Express Js', 'MongoDB', 'Firebase Authentication', "Firebase Hosting", 'React Router', 'React Hook From'],
        live: 'https://better-buys-cbd4f.web.app/',
        client: 'https://github.com/nurulhodanahid1/better-buys',
        server: 'https://github.com/nurulhodanahid1/better-buys-server'
    }
];

export default projectsData;