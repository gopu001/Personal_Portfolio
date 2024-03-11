import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-scroll";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const navData = [
  {
    id: 1,
    link: "Home",
  },
  {
    id: 2,
    link: "About",
  },
  {
    id: 3,
    link: "Timeline",
  },
  {
    id: 4,
    link: "Projects",
  },
  {
    id:5,
    link: "TechStalk"
  },
  {
    id: 6,
    link: "Contact",
  },
];

const variants = {
  hidden: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function Navbar1() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="navbar1">
      <div className="navContainer">
        
          <div className="logo">
          <Link to="Home" smooth duration={500} onClick={closeNav}>
            <h1>Nikhil Gopu</h1>
          </Link>
          </div>
        

        <ul>
          {navData.map(({ id, link }) => (
            <li key={id}>
              <Link to={link} smooth duration={300} onClick={closeNav}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hamBurger" onClick={toggleNav}>
          {nav ? <IoClose /> : <IoMenu />}

          <AnimatePresence>
            {nav && (
              <motion.ul
                className="mobileNav"
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {navData.map(({ id, link }) => (
                  <li key={id}>
                    <Link to={link} smooth duration={300} onClick={closeNav}>
                      {link}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Navbar1;
