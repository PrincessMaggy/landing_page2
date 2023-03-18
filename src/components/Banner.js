import Carousel from 'react-bootstrap/Carousel';
import hero1 from '../img/hero1.jpg';
import hero2 from '../img/hero2.jpg';
import hero3 from '../img/hero3.jpg';
import hero4 from '../img/hero4.jpg';
import hero5 from '../img/hero5.jpg';
import hero6 from '../img/hero6.jpg';


function Banner(props) {
  return (
    <Carousel buttonsVisibility="hide" controls={false} className='banner' onClick={props.toggleall}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>


   <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>


   <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>


   <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero5}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
   

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero6}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
   
      
    </Carousel>
  );
}

export default Banner;