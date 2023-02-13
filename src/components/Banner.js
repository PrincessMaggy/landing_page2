import Carousel from 'react-bootstrap/Carousel';
import hero1 from '../img/hero1.jpg';


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
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Banner;