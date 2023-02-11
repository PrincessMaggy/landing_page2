
// components
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Centre from '../components/Centre';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import {motion} from 'framer-motion'
import { useState } from 'react';


function Home() {

  const[submenu, setsubmenu]= useState(false);
  const[submenu1, setsubmenu1]= useState(false);

  const togglesubmenu =()=>{
    setsubmenu(!submenu)
    setsubmenu1(false)
  }
  const togglesubmenu1 =()=>{
    setsubmenu1(!submenu1)
    setsubmenu(false)
  }
const toggleall =()=>{
  setsubmenu(false);
  setsubmenu1(false);
}
  return (
    <div>
      <motion.div 
         className='home'
   >
  
      <Nav submenu={submenu} submenu1={submenu1} togglesubmenu={togglesubmenu} togglesubmenu1= {togglesubmenu1}/>
     <Banner toggleall={toggleall} />
     <Card toggleall={toggleall}  />
     <Centre toggleall={toggleall} />
     <Newsletter toggleall={toggleall} />
        <Footer toggleall={toggleall} />
      </motion.div>
    </div>
  )
}

export default Home;