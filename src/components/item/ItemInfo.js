import {useContext} from "react"
import { useParams } from "react-router-dom";
import { Col, Row, Container, Image, Form, Button } from "react-bootstrap";
import Cookies from "universal-cookie";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { AddToBasket } from "../../App";
import InnerImageZoom from 'react-inner-image-zoom';
function ItemInfo() {
  const cookies = new Cookies();
  let {myProductCount} =  useContext(AddToBasket)
  if (cookies.get("myBag") === undefined) {
    cookies.set("myBag", [], { path: "/" });
    console.log("okk");
  }

  function AddToBasketClicked(e) {
    let product = productInfo.find((x) => x.id === 1);
    if (product !== []) {
      console.log(product);
      saveToStorage(product, cookies);
      myProductCount()
    }
  }
  let { slug } = useParams();
  let productInfo = [
    {
      slug: "classic-logo-leanie",
      id: 1,
      title: "Classic Logo Beanie",
      imageUrl:
        "https://footwearnews.com/wp-content/uploads/2019/11/jordan-melo-m12-555088_062_a_prem-e1575044740922.jpg",
      price: 99.99,
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
                      className="w-25 text-bolder"
                      type="text"
                      name="zip"
                      defaultValue={1}
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
