import { Container, Col, Row, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductsLayout(props) {
  let products = [
    {
      slug: "product1",
      id: 0,
      title: "NMD_R1 SHOES",
      price: 195.95,
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/bc144ab56823419ca8f5abd60136d3ff_9366/NMD_R1_Shoes_Black_FV9153_01_standard.jpg",
    },
    {
      id: 1,
      slug: "product2",
      title: "NMD_R545 SHOES",
      price: 1249.95,
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/178b0dce25ad4f26a04bac0200ac3b99_9366/NMD_R1_Shoes_Black_FY5727_01_standard.jpg",
    },
    {
      id: 3,
      title: "NMD_R1 SHOES s4 ",
      slug: "product3",
      price: 1789.95,
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/431917d3efdb46f0b72cac7c00b20241_9366/NMD_R1_Shoes_White_G55576_01_standard.jpg",
    },
    {
      id: 4,
      slug: "product4",
      title: "FMDZD_R1 SHOES s468",
      price: 1689.95,
      imageUrl: "https://static.footshop.com/380935-full_product/60850.jpg",
    },
    {
      id: 3,
      slug: "product5",
      title: "EMD_R1f5 SHOES s4",
      price: 1789.95,
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/0b49803254284e418fccaaf00111954c_9366/NMD_R1_Shoes_Black_FV9015_01_standard.jpg",
    },
    {
      id: 3,
      slug: "product6",
      title: "GElassic Logo Beanie",
      price: 1569.95,
      imageUrl:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg",
    },
    {
      id: 3,
      slug: "product7",
      title: "Classic Logo Beanie",
      price: 42.95,
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/38277b478a79419abf6da998000ab640_9366/Runfalcon_Shoes_Black_F36218_01_standard.jpg",
    },
    {
      id: 3,
      slug: "product8",
      title: "Classic Logo Beanie",
      price: 1549.95,
      imageUrl:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_standard.jpg",
    },
  ];

  return (
    <Container className="ProductsLayout mt-5 ">
      <Row className="ProductsList">
        {products.map((element, index) => {
          return (
            <Col md={3} key={element.id} s className="text-center">
              <Card style={{ width: "18rem" }} border="light">
                <Link to={"/item/" + element.slug}>
                  <Card.Img
                    variant="top"
                    src={element.imageUrl}
                    style={{ minHeight: "200px" }}
                  />
                </Link>
                <Card.Body style={{ Height: "100px" }}>
                  <Card.Title>{element.title}</Card.Title>
                  <Card.Text>${element.price}</Card.Text>
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
