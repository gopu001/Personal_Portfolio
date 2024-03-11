import "./TechStacks.scss";
import reactImg from "../../assets/techStack/react.png";
import reduxImg from "../../assets/techStack/redux.png";
import jsImg from "../../assets/techStack/js.png";
import htmlImg from "../../assets/techStack/html.png";
import cssImg from "../../assets/techStack/css.png";
import sassImg from "../../assets/techStack/sass.png";
// import responsiveImg from '../../assets/techStack/responsive.png'
// import responsive2Img from '../../assets/techStack/responsive2.webp'
import {motion} from 'framer-motion'

const toolsData = [
  {
    img: reactImg,
    name: "REACT.JS",
  },
  {
    img: reduxImg,
    name: "REDUX",
  },
  {
    img: jsImg,
    name: "JAVASCRIPT",
  },
  {
    img: jsImg,
    name: "DOM",
  },
  {
    img:sassImg,
    name:"SASS",
  },
  {
    img: htmlImg,
    name: "HTML5",
  },

  {
    img: cssImg,
    name: "CSS",
  },
  {
    name:'RESPONSIVE WEB DESIGN'
  }
];

const variants = (index) => {
  return{
  initial:{
    y:-150,
    opacity:0,
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:1,
      type:'spring',
      stiffness:250,
      delay:index * 0.25
    }
  }
}
}

function TechStacks() {
  return (
    <motion.div name='TechStalk' className="techStacks" variants={variants()} >
      <motion.div className="techContainer">
        <h2>Tech | Stack</h2>
        <motion.div className="techCards">
         
            {toolsData.map((item, index) => (
              <motion.div key={item.name} className="eachTechCard" variants={variants(index)}  initial = 'initial'whileTap={{scale:1.1}} whileInView='animate' whileHover={{scale:1.1}} >
                {item.img && <img src={item.img} alt="" /> }
                
                <motion.h2>{item.name}</motion.h2>
              </motion.div>
            ))}
          
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default TechStacks;
