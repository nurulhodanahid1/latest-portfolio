import React from 'react';
import { ImArrowUp2 } from 'react-icons/im';
import styles from '../../styles/ScrollToTopButton.css';
import { IconContext } from "react-icons";

const ScrollToTopButton = (props) => {
    return (
        <div className={props.showGoTop} onClick={props.scrollUp}>
            <button className={styles.goTop}>
                <IconContext.Provider value={{ color: "#22c55e", className: "h-7 w-5" }}>
                    <ImArrowUp2 className={styles.goToIcon} />
                </IconContext.Provider>
            </button>
        </div>
    );
};

export default ScrollToTopButton;