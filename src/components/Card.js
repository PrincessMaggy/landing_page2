import React from 'react'
import {motion} from 'framer-motion'
import card1 from '../img/card1.png'
import card2 from '../img/card2.png'
import card3 from '../img/card3.png'
import card4 from '../img/card4.png'


function Card() {
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
    <div className='Card'>

    <div className='card-container one'>
        <div className='card-text'>
            <h2>Lorem ipsum lorem?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum vel nulla a consequat. Donec facilisis, leo </p>
            <motion.button    
            variants={btnGroup}
         whileHover={{scale:1.05}}
         whileTap={{scale:0.95}}
         className="card-btn">Learn more
          </motion.button>
        </div>
        <div className='card-img'>
            <img src={card1} alt="card" />
        </div>
    </div>

    <div className='card-container two'>
        <div className='card-text'>
            <h2>Lorem ipsum lorem?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla vestibulum vel nulla a consequat. Donec facilisis, leo </p>
            <motion.button    
            variants={btnGroup}
         whileHover={{scale:1.05}}
         whileTap={{scale:0.95}}
         className="card-btn">Learn more
          </motion.button>
        </div>
        <div className='card-img'>
            <img src={card2} alt="card" />
        </div>
    </div>

    <div className='card-container three'>
        <div className='card-text'>
            <h2>Lorem ipsum lorem?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum vel nulla a consequat. Donec facilisis, leo </p>
            <motion.button    
            variants={btnGroup}
         whileHover={{scale:1.05}}
         whileTap={{scale:0.95}}
         className="card-btn">Learn more
          </motion.button>
        </div>
        <div className='card-img'>
            <img src={card3} alt="card" />
        </div>
    </div>

    <div className='card-container four'>
        <div className='card-text'>
            <h2>Lorem ipsum lorem?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum vel nulla a consequat. Donec facilisis, leo </p>
            <motion.button    variants={btnGroup}
         whileHover={{scale:1.05}}
         whileTap={{scale:0.95}}
         className="card-btn">Learn more
          </motion.button>
        </div>
        <div className='card-img'>
            <img src={card4} alt="card" />
        </div>
    </div>

    </div>
  )
}

export default Card