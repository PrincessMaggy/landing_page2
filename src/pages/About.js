import Nav from '../components/Nav';
import React from 'react';
import Footer from '../components/Footer';
import {motion} from 'framer-motion'




function About() {
  return (
    <div 
    className="About">
         <Nav/>
         <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
         </motion.div>
      
          <Footer/>
    </div>
  )
}

export default About