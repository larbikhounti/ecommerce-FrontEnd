import { useContext, useState,useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Col, Row, Container, Form, Button,Carousel } from "react-bootstrap";
import Cookies from "universal-cookie";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import  store2  from "store2";
import { AddToBasket } from "../../App";
import InnerImageZoom from "react-inner-image-zoom";
import axios from "axios";
function ItemInfo(props) {
  const cookies = new Cookies();
  //let { myProductCount } = useContext(AddToBasket);
  let [quantity, setQuantity] = useState(1);
  let [color, setColor] = useState("#");
  let [size, setSize] = useState("#");
  const [value, setValue] = useState(false);
  let [productInfo,setProductInfo] = useState([]);
  let [product,setproduct] = useState([]);
  
  
  let { slug } = useParams();

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/item/${slug}`).then(res=>{
      productInfo = res.data.data;
      setProductInfo(productInfo);
      console.log(productInfo)
 }).then(()=>{
  
 })
},[value])
  
  function AddToBasketClicked(e) {
  
    if (productInfo.length > 0) {
      
      if (cookies.get("myBag") === undefined) {
        cookies.set("myBag", JSON.stringify([]), { path: "/" });
      }
    
      
      let newProduct = {};
      newProduct.quantity = quantity;
      newProduct.color = color;
      newProduct.size = size;
      newProduct.picture = productInfo[0].picture;
      newProduct.title = productInfo[0].title;
      newProduct.price = productInfo[0].price;
      //console.log("new product =  "+newProduct)

      product.push(newProduct);
      //setproduct(product)
      
      //cookies.set("myBag",product,{secure: true, sameSite: 'none',path: '/'});
      //console.log("state in item info =  "+product)
     //console.log("cookies in iteminfo "+cookies.get("myBag"));
     
      
     saveToStorage(newProduct);
      props.myProductCount();
    }
  }
 function saveToStorage(myproduct) {
   let  mybah = cookies.get("myBag")
   console.log("myBagproducts "+myproduct)
   mybah.push(myproduct);
   
    let test  =  JSON.stringify(mybah);
    //console.log(myproduct)
    cookies.set("myBag",test,{secure: true, sameSite: 'none',path : '/'})
    let corrent = cookies.get("myBag")
    cookies.set("productCount",corrent.length,{secure: true, sameSite: 'none',path : '/'})
    //console.log("new products "+corrent[1].color)
    
    //let correntBag = cookies.get("myBag");
    //let coorre = correntBag;
   // coorre.push(product);
   // cookies.set("myBag", coorre, { path: "/" });
   // cookies.set("productCount", coorre.length, { path: "/" });
   
  }
  
  
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
            <div>
            <Row key={product.id}>
              <Col md={6}>
              <Carousel fade>
                <Carousel.Item>
                  <img className="d-block w-100" src={product.picture} alt="First slide"
                  />
                </Carousel.Item>
                {product.pictures.map((pic,index)=>{
                return  <Carousel.Item key={index}>
                    <img className="d-block w-100" src={pic.image_path} alt="Second slide"
                    />
                  </Carousel.Item>

                })}

              </Carousel>


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
                      <option>7</option>
                      <option>8</option>
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
                      <option key={-1} value={-1}>#</option>
                      {
                        product.color.map((item,index)=>{
                          return <option key={index} value={item.name}>{item.name}</option> 
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
                      <option key={-1} value={-1}>#</option>
                      {
                        product.size.map((item,index)=>{
                          return <option key={item.id} value={item.name}>{item.name}</option> 
                        })
                      }
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="formBasicActions">
                    <Button
                      className="w-100"
                      variant="primary"
                      onClick={AddToBasketClicked}
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
            <Row className="w-100 container content-center mt-5">
            <h1>Description</h1>         
            <div   dangerouslySetInnerHTML={{ __html:product.descreption  }}>
              </div>
            
            </Row>
            
            
              
            </div>
          );
        }
      }):<h1>getting product..</h1>}
    </Container>
  );
}

export default ItemInfo;
