import { Container, Col, Row, Button, Card } from "react-bootstrap";

function ProductsLayout(props) {
  let products = [
    {
      id: 0,
      title: "Classic Logo Beanie",
      price: 19.95,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/2262/1373/products/WTC102291_540x.png",
    },
    {
      id: 1,
      title: "Classic Logo Beanie",
      price: 19.95,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/2262/1373/products/WTC102291_540x.png",
    },
  ];
  function saveToLocalStorage(e) {
    //const myStorage = window.localStorage
    // let data = JSON.parse(myStorage.getItem("items"));
    //  data.push(products[index])
    // myStorage.setItem("items",JSON.stringify(data));
    // console.log(myStorage.getItem("items"));
  }
  function myOnClick(e) {
    let index = e.target.getAttribute("index");
    props.addProductCount(e, products[index]);
  }
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
                  <Button variant="warning" onClick={myOnClick} index={index}>
                    Add to Card
                  </Button>
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
