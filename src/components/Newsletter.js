import React from 'react'
import {motion} from 'framer-motion'

function Newsletter(props) {
    
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

  return (
    <div className='news' onClick={props.toggleall}>
        <h1> Create a free account now</h1>
        <p>Lorem ipsum ipsum ipsum ipsumipsum</p>
        <div className='newsletter'>
            <input type="text" className='input' placeholder="Enter your email address"/>
            <motion.span 
                variants={btnGroup}
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}
            >
                    <button className='newsbtn'>Get Started</button>
                </motion.span>
        </div>
    </div>
  )
}

export default Newsletter