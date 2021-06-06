import {
    Col,
    Row,
    Button,
    Card
   
  } from "react-bootstrap";
  import { Link } from "react-router-dom";


  function ListProducts(props) {
      let products = props.products;
      return(
        <Row className="ProductsList min-vh-100">
        {
            products.length === 0? "no product": products.map((element, index) => {
              return (
                <Col md={3} key={element.id} className="text-center mt-4">
                  <Card style={{ width: "100%" }} border="light">
                    <Link to={"/item/" + element.slug}>
                      <Card.Img
                        variant="top"
                        src={element.picture}
                        style={{ minHeight: "200px" }}
                      />
                    </Link>
                    <Card.Body style={{ Height: "100px" }}>
                      <Card.Title>{element.title}</Card.Title>
                      <Card.Text>${element.price}</Card.Text>
                    </Card.Body >
                    <Link
                      
                        style={{ textDecoration: "none", color: "black"}}
                        to={"/item/" + element.slug}
                      >
                    <Button
                      variant="light"
                      style={{ border: "1px solid black", color: "#fffff",width:"100%" }}
                    >
                        More Info
                    </Button>
                    </Link>
                  </Card>
                </Col>
              );


                })
                      
            
       }
      </Row>
      )
      
  }
  export default ListProducts;