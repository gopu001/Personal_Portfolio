import React from "react";
import "./About1.scss";
import profileImg from "../../assets/profile.jpg";
import {motion} from 'framer-motion'
import { Link } from "react-scroll";

const imageVariant = {
    initial:{
        x:80,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            ease:'easeInOut',
            staggerChildren:1,
            type:'spring',
            stiffness:60,
            mass:3,
        }
    }
}

const textVariant = {
    initial:{
        x:-80,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            ease:'easeInOut',
            staggerChildren:1,
            type:'spring',
            stiffness:60,
            mass:3,
        }
    },
}

const animateButton = {
    scale: 1.05,
  };


function About1() {
  return (
    <div name='About' className="about1">
      <motion.div className="aboutContainer" variants={imageVariant} >
        <motion.div className="leftImage" variants={imageVariant} >
          <motion.img src={profileImg} alt="" variants={imageVariant} initial='initial' whileInView='animate' />
        </motion.div>
        <motion.div className="rightText" variants={textVariant} initial='initial' whileInView='animate'>
          <motion.h2 variants={textVariant} initial='initial' whileInView='animate'>About Me</motion.h2>

          <motion.p variants={textVariant} initial='initial' whileInView='animate'>
            {" "}
            👋 Hi there! I'm a frontend developer with expertise in React,
            Redux, JavaScript,DOM, Responsive Web Design and SASS. I specialize in crafting responsive and
            interactive web experiences, focusing on clean code and user-centric
            design. With a passion for continuous learning and a knack for
            problem-solving, I thrive in collaborative environments where I can
            leverage my skills to deliver impactful solutions. Let's connect and
            bring your ideas to life!
          </motion.p>

          <motion.div  className="contactME" variants={textVariant} >
            <Link to="Contact" smooth={true} duration={300}>
            <motion.button variants={textVariant} initial='initial' whileInView='animate' whileHover={animateButton}>Contact Me</motion.button>
            </Link>
            <Link to="Timeline" smooth={true} duration={300} >
            <motion.button variants={textVariant} initial='initial' whileInView='animate' whileHover={animateButton}>Know More</motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About1;
