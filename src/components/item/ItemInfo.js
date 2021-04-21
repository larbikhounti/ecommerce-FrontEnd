import { useParams } from "react-router-dom";
import { Col, Row, Container, Image, Form, Button } from "react-bootstrap";
import { useContext } from "react";
import {AddToBasket} from "../../App";
function ItemInfo() {
  // const myAddToBasket = useContext(AddToBasket);
  let event = useContext(AddToBasket)
  let productInfo = event.itemsInfo
  function AddToBasketClicked(e) {
  //  my(e, []);
  event.myProductCount(event.itemsInfo);
  }
  let { id } = useParams();
  //console.log(id);
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Image src={productInfo.imageUrl} width="530px" height="530px" />
        </Col>
        <Col md={6}>
          <Form>
            <h1>{productInfo.title}</h1>
            <h5>${productInfo.price}</h5>
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
              <Form.Control className="w-25 " as="select" size="md" custom>
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
    </Container>
  );
}

export default ItemInfo;
