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
  let styles ={
    position:"relative",
    child : {
      position:"absolute",
      right:0
    }
  }
  let  id =  cookies.get("clientId");
 
    console.log(id)
  
 
  function hideclicked() {
    setShow(!show);
  }
  function logout(e) {
      if(e.target.textContent === "log out"){
        cookies.set("clientId","false",{path:"/"});
        window.location.reload(false);
        window.location = "/women"
      }
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
              <Nav className="mr-auto w-100 " style={styles}>
              <Link style={styles.child} to={id !== "false"?"/":"/login"}> <Button onClick={logout} variant="light"><strong>{ id !== "false"?"log out":"log in"}</strong></Button></Link> 
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
