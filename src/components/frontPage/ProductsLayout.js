import { Container, Col, Row, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductsLayout(props) {
  let products = [
    {
      slug: "classic-logo-leanie",
      id: 0,
      title: "Classic Logo Beanie",
      price: 19.95,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1994/5431/products/DSC_6918_1800x1800.jpg",
    },
    {
      id: 1,
      title: "Classic Logo Beanie",
      price: 19.95,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1994/5431/products/DSC_7077_305151c6-9bea-4ff7-a8f8-acaf0749a87c_1800x1800.jpg",
    },
    {
      id: 3,
      title: "Classic Logo Beanie",
      price: 19.95,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1994/5431/products/DSC_2439_9e5aee1f-6219-40ba-9e79-23075d264034_1800x1800.jpg?v=1609950583",
    },
    {
      id: 4,
      title: "Classic Logo Beanie",
      price: 19.95,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1994/5431/products/DSC_2554_1800x1800.jpg?v=1609950571",
    },
    {
      id: 3,
      title: "Classic Logo Beanie",
      price: 19.95,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1994/5431/products/DSC_2439_9e5aee1f-6219-40ba-9e79-23075d264034_1800x1800.jpg?v=1609950583",
    },
  ];

  
  return (
    <Container className="ProductsLayout mt-5">
      <Row className="ProductsList">
        {products.map((element, index) => {
          return (
            <Col md={3} key={element.id}>
              <Card style={{ width: "18rem" }}>
               <Card.Img variant="top" src={element.imageUrl} />
              
                <Card.Body>
                  <Card.Title>{element.title}</Card.Title>
                  <Card.Text>${element.price}</Card.Text>
                  <Link to={"/item/" + element.slug}>
                    <Button variant="warning" >
                      More Details
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default ProductsLayout;
