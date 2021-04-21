import {
  Button,
  Modal,
  Table,
  Image,
  Col,
  Row,
  Container,
} from "react-bootstrap";

import Cookies from 'universal-cookie';
function ItemBag(props) {
  const cookies = new Cookies();
  let setHideToFalse = props.mystate;
  let items = cookies.get("myBag")
 // console.log(items);
  return (
    <div >
      <Container>

      <Modal
        show={props.state}
        onHide={setHideToFalse}
        dialogClassName="ml-100"
        size="lg"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            JUST ADDED TO YOUR CART
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
         
            {items != null
              ? items.length > 0
                ? items.map((item) => {
                    return (

                      <Row key={item.id}>
                        <Col md={6} sm={6} xs={6}>
                          <div className="product-image ">
                            <Image src={item.imageUrl} width="100%" />
                          </div>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                          <div className="product-title">
                            <h3>{item.title}</h3>
                          </div>
                          <div className="product-price">
                            <h5>price: ${item.price}</h5>
                          </div>
                          <div className="product-quantity">
                            <h5>Quantity: {item.quantity}</h5>
                          </div>
                          <div className="product-size">
                            <h5>size: #</h5>
                          </div>
                          <div className="product-color">
                            <h5>color: {item.color}</h5>
                          </div>
                        </Col>
                      </Row>
                    );
                  })
                : ""
              : ""}
              
          </Container>
        </Modal.Body>
        <Modal.Footer closeButton>
          <Table hover>
            <thead>
              <tr>
                <th>Shipping</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>free shipping</td>
                <td>$5150</td>
                <td>
                  <Button variant="success">Check Out</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Footer>
      </Modal>
      </Container>
    </div>
  );
}

export default ItemBag;
