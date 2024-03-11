import "./Project.scss";
import htmlImg from "../../assets/projects/html.png";
import cssImg from "../../assets/projects/css.png";
import github from "../../assets/github1.png";
import javascriptImg from "../../assets/projects/javascript.png";
import reactImg from "../../assets/projects/react.png";
import beejImg from "../../assets/projects/beejProfile.png";
import gstImg from "../../assets/projects/gastProfile.png";
import dashboardImg from "../../assets/projects/dashboardProfile.png";
import { motion } from "framer-motion";


const projectData = [
  {
    id: 1,
    projectName: "BEEJ",
    description:
      "This investment website serves as a platform for customers to engage in investment activities. Designed using HTML and CSS statically.",
    tool1: htmlImg,
    tool2: cssImg,
    codeLink: "https://github.com/gopu001/INVESTOR-FOUNDER-BEEJ-PLATFORM",
    githubImg: github,
    projectImg: beejImg,
  },


  {
    id: 2,
    projectName: "GST",
    description:
      "This project is a GST (Goods and Services Tax) calculator specifically designed for restaurants. Where restaurents can calculate the total ordered food price along with gst.",
    tool1: htmlImg,
    tool2: cssImg,
    tool3: javascriptImg,
    codeLink: "https://github.com/gopu001/GST-DINE-CALCULATOR",
    githubImg: github,
    projectImg: gstImg,
  },


  {
    id: 3,
    projectName: "Student Dashboard",
    description:
      "A dynamic platform that offers a 360-degree view of a student's academic profile, progress, and educational history.This intuitive dashboard serves as a one-stop destination for both students and educators to track and understand the educational journey",
    tool1: htmlImg,
    tool2: cssImg,
    tool3: javascriptImg,
    tool4: reactImg,
    codeLink: "https://github.com/gopu001/Edu-Navigator-Dashboard",
    githubImg: github,
    projectImg: dashboardImg,
  },

];

const variants = (index) => ({
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
      delay: index * 0.25,
    },
  },
});

const Project = () => {
  return (
    <div name='Projects' className="project">
      <div className="projectsMainContainer">
        <div className="projectTitle">
          <h2>Projects</h2>
        </div>
        <div className="gridCards">
          {projectData.map((item, index) => (
            <motion.div
              className="eachGrid"
              key={item.id}
              variants={variants(index)}
              initial="initial"
              whileInView="animate"
              whileHover={{scale:1.1}}
            >
              <motion.div className="detailsCard" variants={variants(index)}>
                <h2>{item.projectName}</h2>
                <p>{item.description}</p>
                <div className="tools">
                  <div className="toolImages">
                    {item.tool1 && <img src={item.tool1} alt="" />}
                    {item.tool2 && <img src={item.tool2} alt="" />}
                    {item.tool3 && <img src={item.tool3} alt="" />}
                    {item.tool4 && <img src={item.tool4} alt="" />}
                  </div>
                  <div className="links">
                    <a target="_blank" href={item.codeLink}>
                      {" "}
                      <img src={item.githubImg} alt="" />{" "}
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
