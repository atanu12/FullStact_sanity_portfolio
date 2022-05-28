import React, { useState } from "react";
import "./NavBar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src={images.logo1} alt="logo" /> */}
        <h2 className="p-text ">ATANU <span>MONDAL</span></h2>
      </div>
      <ul className="app__navbar-links">
        {['home', 'about','project', 'skills', 'work', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* <div className="app__navbar-menu">
    
        {!toggle && <HiMenuAlt4  onClick={() => setToggle(true)} />}
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX className="cross__btn" onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about','project', 'skills', 'work', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div> */}

<div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about','project', 'skills', 'work', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
