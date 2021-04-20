import { Container, Col, Row, Button, Card } from "react-bootstrap";


function ProductsLayout(props) {
  return (
    <Container className="ProductsLayout mt-5">
      <Row className="ProductsList">
        <Col md={3} >
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://cdn.shopify.com/s/files/1/2262/1373/products/WTC102291_540x.png"
            />
            <Card.Body>
              <Card.Title>Classic Logo Beanie</Card.Title>
              <Card.Text>$19.95</Card.Text>
              <Button variant="warning" onClick={props.addProductCount}>Add to Card</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} >
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://cdn.shopify.com/s/files/1/2262/1373/products/Yellow_Classic_Logo_Tee_1200x1200_c80ca0e3-ada2-4390-b624-d00a24389dd3_540x.png"
            />
            <Card.Body>
              <Card.Title>Classic Logo Tee - Yellow</Card.Title>
              <Card.Text>$29.95</Card.Text>
              <Button variant="warning" onClick={props.addProductCount}>Add to Card</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} >
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://cdn.shopify.com/s/files/1/2262/1373/products/Classic_Logo_Beanie_1200x1200_93be5c0e-86c2-47a0-991c-5b5c4e4c12bc_540x.png?v=1569156548"
            />
            <Card.Body>
              <Card.Title>Classic Logo Toddler Tee</Card.Title>
              <Card.Text>$24.95</Card.Text>
              <Button variant="warning" onClick={props.addProductCount}>Add to Card</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} >
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://cdn.shopify.com/s/files/1/2262/1373/products/Classic_Logo_Hoodie_1200x1200_bc9af6d4-194c-464a-8912-b42d02838628_540x.png?v=1602013012"
            />
            <Card.Body>
              <Card.Title>Classic Logo Hoodie</Card.Title>
              <Card.Text>$24.95</Card.Text>
              <Button variant="warning" onClick={props.addProductCount}>Add to Card</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductsLayout;
