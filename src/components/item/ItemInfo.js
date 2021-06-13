import { useContext, useState,useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import Cookies from "universal-cookie";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { AddToBasket } from "../../App";
import InnerImageZoom from "react-inner-image-zoom";
import axios from "axios";
function ItemInfo() {
  const cookies = new Cookies();
  let { myProductCount } = useContext(AddToBasket);
  let [quantity, setQuantity] = useState(1);
  let [color, setColor] = useState("#");
  let [size, setSize] = useState("#");
  const [value, setValue] = useState(false);
  let [productInfo,setProductInfo] = useState([]);
  if (cookies.get("myBag") === undefined) {
    cookies.set("myBag", [], { path: "/" });
  }
  let { slug } = useParams();

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/item/${slug}`).then(res=>{
      productInfo = res.data.data;
      setProductInfo(productInfo);
      console.log(productInfo)
 }).then(()=>{
  
 })
},[value])
  /*
  function AddToBasketClicked(e) {
    let product = productInfo.find((item) => item.slug === slug);

    if (product !== []) {
      product.quantity = quantity;
      product.color = color;
      product.size = size;
      saveToStorage(product, cookies);
      myProductCount();
    }
  }
  */
  function setMyQuantity(e) {
    console.log(e.target.value);
    setQuantity(e.target.value);
  }
  function setMyColor(e) {
    console.log(e.target.value);
    setColor(e.target.value);
  }
  function setMySize(e) {
    console.log(e.target.value);
    setSize(e.target.value);
  }

  
  //console.log(id);
  return (
    <Container className="mt-5">
      <Link to="/">
        <Button className="w-15 border mb-2" variant="light">
          <span className="text-dark">
            <b>{"<"}</b>
          </span>{" "}
          Back
        </Button>
      </Link>
      {productInfo.length > 0 ? productInfo.map((product, index) => {
        if (slug === product.slug) {
          return (
            <Row key={product.id}>
              <Col md={6}>
                <div className="product-image w-100">
                  <InnerImageZoom
                    src={product.picture}
                    zoomSrc={product.picture}
                  />
                </div>
              </Col>
              <Col md={6}>
                <Form>
                  <h3>{product.title}</h3>
                  <h5>${product.price}</h5>
                  <Form.Group className="mt-5" controlId="formBasicInfo">
                    <Form.Label>Quantity</Form.Label>
                    <br />
                    <Form.Control
                      className="w-25 "
                      as="select"
                      size="md"
                      custom
                      onChange={setMyQuantity}
                    >
                      
                      <option>1 </option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                    </Form.Control>
                    <br />
                    <Form.Label>Color</Form.Label>
                    <br />
                    <Form.Control
                      className="w-25 "
                      as="select"
                      size="md"
                      custom
                      onChange={setMyColor}
                    >
                      {
                        product.color.map((item,index)=>{
                          return <option key={index} value={item.id}>{item.name}</option> 
                        })
                      }
                     
                    </Form.Control>
                    <br />
                    <Form.Label>Size</Form.Label>
                    <br />
                    <Form.Control
                      className="w-25 "
                      as="select"
                      size="md"
                      custom
                      onChange={setMySize}
                    >
                      {
                        product.size.map((item,index)=>{
                          return <option key={index} value={item.id}>{item.name}</option> 
                        })
                      }
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="formBasicActions">
                    <Button
                      className="w-100"
                      variant="primary"
                     // onClick={AddToBasketClicked}
                      p-index={index}
                    >
                      ADD TO CART
                    </Button>
                  </Form.Group>
                  <Form.Group controlId="formBasicActions2">
                    <Button
                      className="w-100"
                      variant="primary"
                      type="submit"
                      onClick={(e) => e.preventDefault()}
                    >
                      Buy it now
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          );
        }
      }):<h1>getting product..</h1>}
    </Container>
  );
}
function saveToStorage(product, cookies) {
  let correntBag = cookies.get("myBag");
  correntBag.push(product);
  cookies.set("myBag", correntBag, { path: "/" });
  cookies.set("productCount", correntBag.length, { path: "/" });
}

export default ItemInfo;
