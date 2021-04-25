import { Carousel } from "react-bootstrap";
function Slider() {
    return <Carousel fade className="pl-2 pr-2 pt-2 mt-2 ml-5 mr-5 ">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.sneaker4shoes.com/media/wysiwyg/infortis/slideshow/adidas-banner-1.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://cooljsonline.com/wp-content/uploads/2018/09/adidas-banner-cooljs.jpg"
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3 className="text-dark">Second slide label</h3>
        <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.kickz.com/media/images/SEO-LPs/Banner-980x326_AdidasGazelle.jpg"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
}
export default Slider;

