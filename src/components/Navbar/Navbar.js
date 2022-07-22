import React, { useState, useEffect } from 'react';
import { Fade } from 'react-reveal';
import SideDrawerMenu from './SideDrawerMenu';
import MenuIcon from './MenuIcon';
import BigScreenMenuItems from './BigScreenMenuItems';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#fff');
  const [linkColor, setLinkColor] = useState('#1f2937');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <Fade top>
      <div
        style={{ backgroundColor: `${navBg}` }}
        className={
          shadow
            ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 px-8'
            : 'fixed w-full h-20 z-[100] px-9'
        }
      >
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
          <a href="/">
            <span className="ml-3 text-green-500 font-medium text-4xl">{"nahid_"}</span>
          </a>
          <div>
            <BigScreenMenuItems linkColor={linkColor} />
            {/* Menu Icon */}
            <MenuIcon linkColor={linkColor} handleNav={handleNav} />
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Overlay */}
        <div
          className={
            nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
          }
        >
          {/* Side Drawer Menu */}
          <SideDrawerMenu  nav={nav} handleNav={handleNav} setNav={setNav}/>
        </div>
      </div>
    </Fade>
  );
};

export default Navbar;