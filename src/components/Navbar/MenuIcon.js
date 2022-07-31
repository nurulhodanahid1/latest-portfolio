import React from 'react';

const MenuIcon = (props) => {
    return (
        <>
            <div
              // style={{ color: `${props.linkColor}` }}
              onClick={props.handleNav}
              className='md:hidden text-slate-200'
            >
              <button
                className="cursor-pointer text-base leading-none px-3 py-3 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
        </>
    );
};

export default MenuIcon;