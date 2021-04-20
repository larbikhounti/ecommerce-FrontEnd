import {
  Container,
  Col,
  Row,
  Button,
  Modal,
  Table,
  Image,
} from "react-bootstrap";
 import {ProductsContext} from "../../App";
 import { useContext } from "react";
function ItemBag(props) {
  let setHideToFalse = props.mystate;
  let items = useContext(ProductsContext)
  console.log(items)
  
  return (
    <div>
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
         
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>code</th>
                  <th>image</th>
                  <th>title</th>
                  <th>price</th>
                  <th>quantity</th>
                </tr>
              </thead>

              <tbody>
                {items != null?
                items.length > 0
                  ? items.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>
                            <Image src={item.imageUrl} width="80px" rounded />
                          </td>
                          <td>{item.title}</td>
                          <td>{item.price}</td>
                          <td>
                            <input type="number" defaultValue={0} />
                          </td>
                        </tr>
                      );
                    })
                  : "":""}
              </tbody>
            </Table>
          
        </Modal.Body>
        <Modal.Footer closeButton>
          <Table  hover>
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
    </div>
  );
}

export default ItemBag;
