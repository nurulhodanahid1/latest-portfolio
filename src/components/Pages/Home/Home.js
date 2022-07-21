import React from 'react';
import Contact from '../../Contact/Contact';
import Footer from '../../Footer/Footer';
import Main from '../../Main/Main';
import Navbar from '../../Navbar/Navbar';
import Portfolio from '../../Portfolio/Portfolio';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';
import Skills from '../../Skills/Skills';

const Home = () => {
    return (
        <>
            <Navbar />
            <ScrollToTop />
            <Main />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;