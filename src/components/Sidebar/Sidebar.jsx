import './Sidebar.scss'
import Links from './Links/Links'
import ToggleButton from './ToggleButton/ToggleButton'
import {motion} from "framer-motion"
import React, { useState } from 'react'

const Sidebar = () => {
    const[open,setOpen] = useState(false)


    const variants = {
        open:{
            clipPath:"circle(1500px at 50px 50px)",
            transition:{
                delay: 0.5,
                type:"spring",
                stiffness: 400,
                damping: 40,
            }
        },
        closed:{
            clipPath: "circle(30px at 50px 50px)",
            transition:{
                delay: 0.5,
                type:"spring",
                stiffness: 400,
                damping: 40,
            }
        }

    }
  return (
  
    <motion.div className='sidebar' variants={variants} animate = {open ? "open" : "closed"}>
      <motion.div className="bg">
        <Links/>
      </motion.div>
      <ToggleButton setOpen = {setOpen}/>
    </motion.div>
  )
}

export default Sidebar
