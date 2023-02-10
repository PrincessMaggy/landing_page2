
// components
import Nav from '../components/Nav';
import Navmenu from '../components/Navmenu';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Centre from '../components/Centre';
import Newsletter from '../components/Newsletter';
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
      {/* <Navmenu/> */}
     <Banner/>
     <Card />
     <Centre/>
     <Newsletter/>
        <Footer/>
      </motion.div>
    </div>
  )
}

export default Home;