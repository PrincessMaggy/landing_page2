import React from 'react'
import phoneimg from '../img/phone.png'
import {motion} from 'framer-motion'
import play from '../img/playstore.svg'
import apple from '../img/apple.svg'

let easing = [0.6, -0.05, 0.01, 0.99];
const btnGroup ={
  initial:{
    y:-60,
    opacity:0,
    transition:{duration:0.05, ease:easing}
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

function Centre() {
  return (
    <div className='Centre'>
        <h1 className='title'>Lorem ipsum ipsum ipsum</h1>
        <div className='centre-container'>
            <div className='phone-img'>
                <img src={phoneimg} alt="img"/>
            </div>
            <div>
                <h1>Download our <br/> Mobile App</h1>
                <motion.button    
                className='centre-btn'
                variants={btnGroup}
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}>
                <img src={apple} alt="apple" />
            </motion.button>

            <motion.button    
            className='centre-btn'
            variants={btnGroup}
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}>
                <img src={play} alt="play" />
            </motion.button>
            </div>
        </div>
    </div>
  )
}

export default Centre