import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import {BiMenuAltRight} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion'
import arrow from '../img/arrow-down.png'




function Navmenu() { 
  const [menu, setMenu] = useState(false);
const[submenu, setsubmenu]= useState(false);
const[submenu1, setsubmenu1]= useState(false);
const [navbar, setNavbar] = useState(false);

const togglesubmenu =()=>{
  setsubmenu(!submenu)
}
const togglesubmenu1 =()=>{
  setsubmenu1(!submenu1)
}

const changeBackground = ()=>{
  if(window.scrollY > 70){
    setNavbar(true);
  }else{
    setNavbar(false);
  }

}
window.addEventListener('scroll', changeBackground)

const menuToggle = () =>{
    setMenu((p) => !p)
}

// animations
let easing = [0.6, -0.05, 0.01, 0.99];
const stagger ={
  animate:{
    transition:{
      delayChildren:0.4,
      staggerChildren:0.2,
      staggerDirection:1
    }
  }
}

const header={
  initial:{
    y:-60,
    opacity:0,
    transition:{duration:0.8, ease:easing}
  },
  animate:{
    y:0,
    opacity:1,
    animation:{
      duration:0.6,
      ease:easing
    }
  }
}

const item={
  exit:{
    opacity:0,
    height:0,
    transition:{
      ease:"easeInOut",
      duration:0.3,
      delay:1.2
    }
  }
}


return (
  <Navbar 
  // className='Nav' 
  bg="dark" expand="lg">
    <motion.Container
    variants={stagger} className='navContainer'>
      <div className='logoham'>
      <Navbar.Brand href="#home"><motion.h2 variants={header}>
                  <Link id="logo" to="/sample" className='navlink'>Logo</Link> 
            </motion.h2></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </div>
     
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home"> <motion.li 
                  initial={{y:80,opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{delay:.8}}
                    exit={{
                      opacity:0,
                      y:90,
                        transition:{
                          ease:"easeInOut",
                          delay:1
                        }
                    }}><Link  className='navlink' to="/about">About Us</Link> </motion.li></Nav.Link>

          <Nav.Link href="#link"><motion.li
                className='li'
                 initial={{y:80,opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{delay:.7}}
                    exit={{
                      opacity:0,
                      y:90,
                        transition:{
                          ease:"easeInOut",
                          delay:.8
                        }
                    }}><Link  className='navlink' to="/career">Careers</Link> </motion.li></Nav.Link>



          <NavDropdown className='li navlink'
                 initial={{y:80,opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{delay:.7}}
                    exit={{
                      opacity:0,
                      y:90,
                        transition:{
                          ease:"easeInOut",
                          delay:.8
                        }
                    }} title="Products" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Refill
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Airtime</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Shopping</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Gift Card
            </NavDropdown.Item>
          </NavDropdown>

          
          <NavDropdown className='li navlink'
                 initial={{y:80,opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{delay:.7}}
                    exit={{
                      opacity:0,
                      y:90,
                        transition:{
                          ease:"easeInOut",
                          delay:.8
                        }
                    }} title="Resources" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Refill
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Airtime</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Shopping</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Gift Card
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="#link"><motion.li
                className='li'
                 initial={{y:80,opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{delay:.7}}
                    exit={{
                      opacity:0,
                      y:90,
                        transition:{
                          ease:"easeInOut",
                          delay:.8
                        }
                    }}><Link  className='navlink' to="/career">Business</Link> </motion.li></Nav.Link>


        </Nav>
      </Navbar.Collapse>
    </motion.Container>
  </Navbar>
);
}
export default Navmenu;