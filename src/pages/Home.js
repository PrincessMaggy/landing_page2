import React from 'react';
// components
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import {motion} from 'framer-motion'


function Home() {



  return (
    <div>
      <motion.div 
         className='home'
      // initial={{opacity:0}}
      //       animate={{opacity:1}}
      //       exit={{opacity:0}}
   >
  
      <Nav/>
     
        <Footer/>
      </motion.div>
    </div>
  )
}

export default Home;