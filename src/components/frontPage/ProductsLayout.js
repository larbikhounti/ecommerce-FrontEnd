import {
  Container,
  Col,
  Row,
  Button,
  Card,
  ButtonGroup,
  ListGroup,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import {useState} from "react";
function ProductsLayout(props) {
  let {category} = useParams("category");
  let productsList = [
    {
      slug: "product1",
      id: 0,
      title: "NMD_R1 SHOES",
     
      categories:["shoes","newarrivals","all","women"],
      price: 195.95,
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/bc144ab56823419ca8f5abd60136d3ff_9366/NMD_R1_Shoes_Black_FV9153_01_standard.jpg",
    },
    {
      id: 1,
      slug: "product2",
      title: "NMD_R545 SHOES",
      price: 1249.95,
      
      categories:["shoes","newarrivals","women","all"],
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/178b0dce25ad4f26a04bac0200ac3b99_9366/NMD_R1_Shoes_Black_FY5727_01_standard.jpg",
    },
    {
      id: 3,
      title: "NMD_R1 SHOES s4 ",
      slug: "product3",
     
      categories:["shoes","newarrivals","men","all"],
      price: 1789.95,
      
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/431917d3efdb46f0b72cac7c00b20241_9366/NMD_R1_Shoes_White_G55576_01_standard.jpg",
    },
    {
      id: 4,
      slug: "product4",
      title: "FMDZD_R1 SHOES s468",
      price: 1689.95,
      
      categories:["shoes","newarrivals","wome","all"],
      imageUrl: "https://static.footshop.com/380935-full_product/60850.jpg",
    },
    {
      id: 3,
      slug: "product5",
      title: "EMD_R1f5 SHOES s4",
      categories:["shoes","newarrivals","all"],
      price: 1789.95,
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/0b49803254284e418fccaaf00111954c_9366/NMD_R1_Shoes_Black_FV9015_01_standard.jpg",
    },
    {
      id: 3,
      slug: "product6",
      title: "GElassic Logo Beanie",
      price: 1569.95,
      categories:["shoes","newarrivals","all"],
      imageUrl:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg",
    },
    {
      id: 3,
      slug: "product7",
      title: "Classic Logo Beanie",
      price: 42.95,
      categories:["shoes","newarrivals","all"],
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/38277b478a79419abf6da998000ab640_9366/Runfalcon_Shoes_Black_F36218_01_standard.jpg",
    },
    {
      id: 3,
      slug: "product8",
      title: "Classic Logo Beanie",
      price: 1549.95,
      categories:["shoes","newarrivals","all"],
      imageUrl:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_standard.jpg",
    },
  ];
  let [products] = useState(productsList)
 
  

  let data =  productsList.map(el => el).filter(el=> el.categories.includes(category))
  //console.log(data)
  products = data

  return (
    <Container className="ProductsLayout mt-5 ">
      <ButtonGroup aria-label="Categories ">
      <Link to="/all">
          <Button
            className={
              category === "all"
                ? "ml-2 font-weight-bold text-uppercase"
                : "ml-2  text-uppercase"
            }
            variant="light"
          >
            All
          </Button>
        </Link>
        <Link to="/women">
          <Button
            className={
              category === "women"
                ? "ml-2 font-weight-bold text-uppercase"
                : "ml-2  text-uppercase"
            }
            variant="light"
          >
            Women
          </Button>
        </Link>
        <Link to="/men">
          <Button
            className={
              category === "men"
                ? "ml-2 font-weight-bold text-uppercase"
                : "ml-2  text-uppercase"
            }
            variant="light"
          >
            Men
          </Button>
        </Link>
        <Link to="/kids">
          <Button
            className={
              category === "kids"
                ? "ml-2 font-weight-bold text-uppercase"
                : "ml-2  text-uppercase"
            }
            variant="light"
          >
            Kids
          </Button>
        </Link>

      </ButtonGroup>
      <br />
      <Container>
       {loadSubCategory(category)}
      </Container>

      <Row className="ProductsList">
        {
          
        products.map((element, index) => {
        
            return (
              <Col md={3} key={element.id} className="text-center mt-4">
                <Card style={{ width: "100%" }} border="light">
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
                  <Button
                    variant="light"
                    style={{ border: "1px solid black", color: "#fffff" }}
                  >
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/item/" + element.slug}
                    >
                      More Info
                    </Link>
                  </Button>
                </Card>
              </Col>
            );
          
         
        })}
      </Row>
    </Container>
  );
}
function loadSubCategory(param) {
  if(param){
    return (<div>
        <Button variant="white" className="ml-1 ">
    SHOES
    </Button>
    <Button variant="white" className="ml-1 ">
    TOPS
    </Button>
    <Button variant="white" className="ml-1 ">
    PANTS AND TIGHTS
    </Button>
    <Button variant="white" className="ml-1 ">
    NEW ARRIVALS
    </Button>
    <Button variant="white" className="ml-1 ">
    TOPS
    </Button>
    </div>)
        
  }
}

export default ProductsLayout;
