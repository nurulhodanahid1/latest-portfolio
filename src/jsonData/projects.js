import heroAirvice from './hero-airvice.jpg';
import heroFanstagram from './fanstagram.jpg';
import heroBetterBuys from './better-buys.jpg';
import heroFaveTravel from './fave-travel.jpg';

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
    },
    {
        id: 4,
        name: 'Fave Travel (Full Stack)',
        img: heroFaveTravel,
        description: 'Fave Travel is a MERN Stack project. In this website I use Firebase Authentication, User can booking his favourite travelling place, User can see all his booking list',
        mainTechnology: "React JS, Node JS, Express, MongoDB, Firebase",
        toolsAndTechnology: ['React JS', 'Node JS', 'Express Js', 'MongoDB', 'Firebase Authentication', 'React Router', 'React Hook From'],
        live: 'https://fave-travel.netlify.app/',
        client: 'https://github.com/nurulhodanahid1/fav-travel-client',
        server: 'https://github.com/nurulhodanahid1/fav-travel-server'
    },
    {
        id: 5,
        name: 'Todo application with RTK Query (Full Stack)',
        img: heroFaveTravel,
        description: 'In this web app user can add his daily todo items, user can manage his todos, user can create, delete, filter by status, set priority on his todos',
        mainTechnology: "React JS, Redux, RTK Query, JSON Server, Tailwind CSS ",
        toolsAndTechnology: ['React JS', 'Redux', 'Redux Toolkit', 'RTK Query', 'Tailwind CSS', 'JSON Server'],
        live: 'https://roaring-conkies-5f5024.netlify.app',
        client: 'https://github.com/nurulhodanahid1/todo-application-with-rtk-query',
        server: ''
    }
];

export default projectsData;