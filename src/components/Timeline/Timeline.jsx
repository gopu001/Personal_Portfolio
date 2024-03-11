import React from "react";
import "./Timeline.scss";
import iiit from "../../assets/Career/IIIT.png";
import careerpedia1 from "../../assets/Career/careerpedia1.png";
import freelancing from "../../assets/Career/freealncing.jpeg";
import { motion } from "framer-motion";

const careerData = [
  {
    id: 1,
    img: iiit,
    desc: "I successfully completed my Bachelor of Technology (B.Tech) degree in Computer Science and Engineering from the Indian Institute of Information Technology (IIIT) Kota in the year 2023.",
  },
  {
    id: 2,
    img: careerpedia1,
    desc: "I completed an apprenticeship as a frontend developer at Careerpedia. I actively contributed to the development of both static and dynamic websites, gaining hands-on experience in various aspects of web development.",
  },
  {
    id: 3,
    img: freelancing,
    desc: "I started freelancing in January 2024, making custom websites for clients. I'm good at creating all sorts of websites, from simple ones to online stores. I make sure my clients are happy even after the website is live.",
  },
];

const variants = {
  initial: {
    // y: -400,
    opacity: 0,
    scale:0.5,
  },
  animate: {
    // y: 0,
    opacity: 1,
    scale:1,
    transition: {
      duration: 2,
      ease: "easeInOut",
      staggerChildren: 1,
      type: "spring",
      stiffness: 50,
      mass: 4,
    },
  },
};

function Timeline() {
  return (
    <motion.div name='Timeline' className="timelineMainContainer">
      <motion.div className="timeline" variants={variants} initial='initial' whileInView='animate'>
        <h2>CareerTimeline</h2>
        <motion.div className="timelineContainer">
          {careerData.map((item) => (
            <motion.div className="eachContainer" key={item.id}>
              <motion.div className="image">
                <img src={item.img} alt="" />
              </motion.div>
              <div className="description">
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Timeline;
