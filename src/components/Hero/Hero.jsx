import "./Hero.scss";
import github from "../../assets/github1.png";
import linkedin from "../../assets/linkedin1.png";
import profileImg from "../../assets/profileImg.png";
import frontendImg from "../../assets/frontendImgpng.png";
import resume from "../../assets/GOPU_NIKHIL(RESUME).pdf";
import { motion } from "framer-motion";

const leftVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,

    transition: {
      duration: 1.5,
      staggerChildren: 0.3,
    },
  },
};

const rightVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.3,
    },
  },
};

// const mobileViewVariants = {

//   initial:{
//     x:500,
//     opacity:0
//   },
//   animate:{
//     x:0,
//     opacity:1,
//     transition:{
//       duration:1.5,
//     }
//   }
// }

const mobileVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.8,
    },
  },
};

const Hero = () => {
  return (
    <motion.div name="Home" className="hero">
      <motion.div className="wrapper">
        <motion.div
          className="left"
          variants={leftVariants}
          initial="initial"
          whileInView="animate"
        >
          <motion.h2 variants={leftVariants}>NIKHIL GOPU</motion.h2>
          <motion.div
            className="mobileProfile"
            variants={mobileVariants}
            initial="initial"
            whileInView="animate"
          >
            <motion.img
              src={profileImg}
              alt=""
              variants={mobileVariants}
              initial="initial"
              whileInView="animate"
            />
          </motion.div>
          <motion.h1 variants={leftVariants}>
            Frontend Web Developer. <img src={frontendImg} alt="" />
          </motion.h1>

          <motion.div
            variants={leftVariants}
            className="professionalSocialMedia"
          >
            <motion.a
              variants={leftVariants}
              href="https://github.com/gopu001"
              target="_blank"
            >
              <motion.img src={github} alt="" />
            </motion.a>

            <motion.a
              variants={leftVariants}
              href="https://www.linkedin.com/in/nikhil-gopu-008a87181/"
              target="_blank"
            >
              <img src={linkedin} alt="" />
            </motion.a>

            <motion.a href={resume} download className="resume">
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="right"
          variants={rightVariants}
          initial="initial"
          whileInView="animate"
        >
          <motion.img src={profileImg} alt="" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
