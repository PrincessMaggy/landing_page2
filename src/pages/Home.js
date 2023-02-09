
// components
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Card from '../components/Card';
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
     <Banner/>
     <Card />
        <Footer/>
      </motion.div>
    </div>
  )
}

export default Home;