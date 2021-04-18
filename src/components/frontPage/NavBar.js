import {
  Container,
  Col,
  Row,
  Navbar,
  NavDropdown,
  Nav,
  Button,
  Badge,
} from "react-bootstrap";
import { BsBag } from "react-icons/bs";
function NavBar() {
  return (
    <div className="NavBar">
      <header>
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Container>
            <Row className="w-100">
              <Col md={10} sm={6} className="container">
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#home">les nouveaux </Nav.Link>
                    <NavDropdown title="Apparel" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Action
                      </NavDropdown.Item>
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
                      <NavDropdown.Item href="#action/3.1">
                        Action
                      </NavDropdown.Item>
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
              <Col md={2} sm={6}>
                <Button variant="light">
                  <BsBag size="25" />
                  <Badge variant="danger">5</Badge>
                </Button>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default NavBar;
