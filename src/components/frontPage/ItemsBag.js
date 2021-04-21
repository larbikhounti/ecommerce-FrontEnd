import {
  Button,
  Modal,
  Table,
  Image,
  Col,
  Row,
  Container,
} from "react-bootstrap";
import {useState} from "react"
import Cookies from 'universal-cookie';
function ItemBag(props) {
  let [total]= useState(0)
  const cookies = new Cookies();
  let setHideToFalse = props.mystate;
  let items = cookies.get("myBag")
 // get total of  price
 if(items.length != 0){
  let totalPrice = items.map(elem =>elem.price * elem.quantity).reduce((acc,prc)=> acc +prc).toFixed(2)
  total= totalPrice
 }


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
                            <h5>price: <b>${item.price}</b></h5>
                          </div>
                          <div className="product-quantity">
                            <h5>Quantity: <b>{item.quantity}</b></h5>
                          </div>
                          <div className="product-size">
                            <h5>size: <b>{item.size}</b></h5>
                          </div>
                          <div className="product-color">
                            <h5>color:<b>{item.color}</b></h5>
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
                <td>${total}</td>
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
