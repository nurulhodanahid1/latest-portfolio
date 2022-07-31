import React from 'react';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Main from '../../components/Main/Main';
import MenuNotUsed from '../../components/MenuNotUsed';
import Navbar from '../../components/Navbar/Navbar';
import Portfolio from '../../components/Portfolio/Portfolio';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Skills from '../../components/Skills/Skills';

const Home = () => {
    return (
        <>
            <MenuNotUsed />
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