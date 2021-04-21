import {
  Container,
  Col,
  Row,
  Navbar,
  NavDropdown,
  Nav,
  Button,
  Badge,
  FormControl,
} from "react-bootstrap";
import ItemBag from "./ItemsBag";
import { useState } from "react";
import { BsBag } from "react-icons/bs";

function NavBar(props) {
  const [show, setShow] = useState(false);

  function hideclicked() {
    setShow(!show);
  }
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>

      <Container>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Row className="w-100">
          <Col md={8} sm={6} className="container">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {/*<Nav.Link href="#home">les nouveaux </Nav.Link>*/}
                <NavDropdown title="Apparel" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Accessories" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Col>
          <Col md={4} sm={6}>
            <Button variant="light" onClick={() => setShow(!show)}>
              <BsBag size="25" />
              <Badge variant="danger">{props.productCount}</Badge>
            </Button>
            <ItemBag mystate={hideclicked} state={show} />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavBar;
