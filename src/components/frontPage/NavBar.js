import {
  Container,
  Col,
  Row,
  Navbar,
  Nav,
  Button,
  Badge,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemBag from "./ItemsBag";
import { useState } from "react";
import { BsBag } from "react-icons/bs";
import Cookies from 'universal-cookie';

function NavBar(props) {
  const cookies = new Cookies();
  const [show, setShow] = useState(false);
 
  
 
  function hideclicked() {
    setShow(!show);
  }
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Link to='/'><Navbar.Brand >Khounti Shop</Navbar.Brand></Link>

      <Container>
        <FormControl type="text" placeholder="Search" className="mr-sm-2"  onChange={props.search}/>
        <Row className="w-100">
          <Col md={8} sm={6} className="container">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {/*<Nav.Link href="#home">les nouveaux </Nav.Link>*/}
                
              </Nav>
            </Navbar.Collapse>
          </Col>
          <Col md={4} sm={6}>
            <Button variant="light" onClick={() => setShow(!show)}>
              <BsBag size="25" />
              <Badge variant="danger">{cookies.get("productCount")}</Badge>
            </Button>
            <ItemBag mystate={hideclicked} state={show} />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavBar;
