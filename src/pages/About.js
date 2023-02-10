import Nav from '../components/Nav';
import React from 'react';
import Footer from '../components/Footer';
import {motion} from 'framer-motion'
import Centre from '../components/Centre'
import Newsletter from '../components/Newsletter'



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
      <Centre/>
      <Newsletter/>
          <Footer/>
    </div>
  )
}

export default About