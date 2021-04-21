import {useContext,useState} from "react"
import { useParams } from "react-router-dom";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import Cookies from "universal-cookie";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { AddToBasket } from "../../App";
import InnerImageZoom from 'react-inner-image-zoom';
function ItemInfo() {
  const cookies = new Cookies();
  let {myProductCount} =  useContext(AddToBasket)
  let [quantity,setQuantity] = useState(1)
  if (cookies.get("myBag") === undefined) {
    cookies.set("myBag", [], { path: "/" });
    console.log("okk");
  }
  let { slug } = useParams();
  function AddToBasketClicked(e) {
    let product = productInfo.find((x) => x.slug === slug);
    
    if (product !== []) {
      product.quantity = quantity;
      console.log(product);
      saveToStorage(product, cookies);
      myProductCount()
    }
  }
  function setQuanity(e) {
    console.log(e.target.value);
    setQuantity(e.target.value)
  }
 
  let productInfo = [
    {
      slug: "product1",
      id: 0,
      title: "Classic Logo Beanie",
      price: 19.95,
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/bc144ab56823419ca8f5abd60136d3ff_9366/NMD_R1_Shoes_Black_FV9153_01_standard.jpg",
    },
    {
      id: 1,
      slug: "product2",
      title: "Classic Logo Beanie",
      price: 19.95,
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/178b0dce25ad4f26a04bac0200ac3b99_9366/NMD_R1_Shoes_Black_FY5727_01_standard.jpg",
    },
    {
      id: 3,
      title: "Classic Logo Beanie",
      slug: "product3",
      price: 19.95,
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/431917d3efdb46f0b72cac7c00b20241_9366/NMD_R1_Shoes_White_G55576_01_standard.jpg",
    },
    {
      id: 4,
      slug: "product4",
      title: "Classic Logo Beanie",
      price: 19.95,
      imageUrl:
        "https://static.footshop.com/380935-full_product/60850.jpg",
    },
    {
      id: 3,
      slug: "product5",
      title: "Classic Logo Beanie",
      price: 19.95,
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/0b49803254284e418fccaaf00111954c_9366/NMD_R1_Shoes_Black_FV9015_01_standard.jpg",
    },
    {
      id: 3,
      slug: "product6",
      title: "Classic Logo Beanie",
      price: 19.95,
      imageUrl:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg",
    },
    {
      id: 3,
      slug: "product7",
      title: "Classic Logo Beanie",
      price: 19.95,
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/38277b478a79419abf6da998000ab640_9366/Runfalcon_Shoes_Black_F36218_01_standard.jpg",
    },
    {
      id: 3,
      slug: "product8",
      title: "Classic Logo Beanie",
      price: 19.95,
      imageUrl:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_standard.jpg",
    },
  ];
  //console.log(id);
  return (
    <Container className="mt-5">
      {productInfo.map((product, index) => {
        if (slug === product.slug) {
          return (
            <Row key={product.id}>
              <Col md={6}>
                <div className="product-image w-100">
                  <InnerImageZoom src={product.imageUrl}  zoomSrc={product.imageUrl} />
                </div>
              </Col>
              <Col md={6}>
                <Form>
                  <h1>{product.title}</h1>
                  <h5>${product.price}</h5>
                  <Form.Group className="mt-5" controlId="formBasicInfo">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                      pattern="^[1-9]+"
                      className="w-25 quantity"
                      type="number"
                      name="zip"
                      onChange={setQuanity}
                      defaultValue={0}
                    />
                    <Form.Label>Color</Form.Label>
                    <br />
                    <Form.Control
                      className="w-25 "
                      as="select"
                      size="md"
                      custom
                    >
                      <option>black</option>
                      <option>blue</option>
                      <option>yellow</option>
                      <option>green</option>
                      <option>red</option>
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
          );
        }
      })}
    </Container>
  );
}
function saveToStorage(product, cookies) {
  let correntBag = cookies.get("myBag");
  
  correntBag.push(product);
  cookies.set("myBag", correntBag, { path: "/" });
  
}

export default ItemInfo;
