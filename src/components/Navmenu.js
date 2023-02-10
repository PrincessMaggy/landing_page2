import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {motion, AnimatePresence} from 'framer-motion'
import {Link} from 'react-router-dom';


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
    <motion.Navbar  
    initial= 'initial' 
    className={navbar ? "Nav active" :'Nav'}
    style={{height: !menu ? '4em':'60vh'}}
    animate='animate'>
      <Container>
        <Navbar.Brand>
         <motion.h2 variants={header}>
                  <Link id="logo" to="/sample" className='navlink'>Logo</Link> 
            </motion.h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </motion.Navbar>
  );
}

export default Navmenu;