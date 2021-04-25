import { Carousel } from "react-bootstrap";
import "./item.css"
function Slider() {
    return <div className="pl-4 pr-4 pt-2 mt-2 ml-5 mr-5 myslider">
      <Carousel indicators={false} fade className="">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.portotheme.com/shopify/porto/documentation/assets/images/sections/banner-slider-content.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.epcc.co/image/cache/catalog/slider/slider3-sneaker1-1920x685.jpg"
        alt="Second slide"
      />
  
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://lh3.googleusercontent.com/L62MWaSKQK4VkgZ4HbBiYTAN_JxQ-4ZQBhOLTDDnKHXxZW4-gZ72KoVeKVGjprSBMOLWyNHLlHg2tlzK7xL5-G3KDQ8=w1000"
        alt="Third slide"
      />
  
      <Carousel.Caption>
     
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
      </div>
}
export default Slider;

