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
  let [filterBy,setFilterBy] = useState(false);
  let productsList = [
    {
      slug: "product1",
      id: 0,
      title: "NMD_R1 SHOES",
     
      categories:["shoes","newarrivals","women","new arrivals"],
      price: 195.95,
      imageUrl:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy/9c8c09c992ae488a94b1ac92009bbf49_9366/ultraboost-21-shoes.jpg",
    },
    {
      id: 1,
      slug: "product2",
      title: "NMD_R545 SHOES",
      price: 1249.95,
      
      categories:["shoes","newarrivals","women"],
      imageUrl:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy/9061a7718c7843668f17ac8a006c6b22_9366/ultraboost-21-shoes.jpg",
    },
    {
      id: 2,
      title: "NMD_R1 SHOES s4 ",
      slug: "product3",
     
      categories:["shoes","newarrivals","men"],
      price: 1789.95,
      
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/431917d3efdb46f0b72cac7c00b20241_9366/NMD_R1_Shoes_White_G55576_01_standard.jpg",
    },
    {
      id: 3,
      slug: "product4",
      title: "FMDZD_R1 SHOES s468",
      price: 1689.95,
      
      categories:["shoes","newarrivals","women"],
      imageUrl: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy/3c7a5a1783ac4716ac82ac7900c4b56c_9366/ultraboost-5.0-dna-shoes.jpg",
    },
    {
      id: 4,
      slug: "product5",
      title: "EMD_R1f5 SHOES s4",
      categories:["shoes","newarrivals"],
      price: 1789.95,
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/0b49803254284e418fccaaf00111954c_9366/NMD_R1_Shoes_Black_FV9015_01_standard.jpg",
    },
    {
      id: 5,
      slug: "product6",
      title: "GElassic Logo Beanie",
      price: 1569.95,
      categories:["shoes","newarrivals"],
      imageUrl:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg",
    },
    {
      id: 6,
      slug: "product7",
      title: "Classic Logo Beanie",
      price: 42.95,
      categories:["shoes","newarrivals"],
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/38277b478a79419abf6da998000ab640_9366/Runfalcon_Shoes_Black_F36218_01_standard.jpg",
    },
    {
      id: 7,
      slug: "product8",
      title: "Classic Logo Beanie",
      price: 1549.95,
      categories:["shoes","newarrivals"],
      imageUrl:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_standard.jpg",
    },
    {
      id: 8,
      slug: "product9",
      title: "Classic Logo Beanie",
      price: 1549.95,
      categories:["shoes","newarrivals","women"],
      imageUrl:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy/acddb039823945e0a4b9acb000e4108b_9366/ultraboost-21-shoes.jpg",
    },
    {
      id: 9,
      slug: "product10",
      title: "Classic Logo Beanie",
      price: 1549.95,
      categories:["shoes","newarrivals","women"],
      imageUrl:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy/88608e80bcf9413ebe39ac6f01271c8d_9366/sl-andridge-shoes.jpg",
    },
    {
      id: 10,
      slug: "product11",
      title: "TENNIS LUXE POLO SHIRT",
      price: 1549.95,
      categories:["shoes","newarrivals","women","tops"],
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/4da715e4cd364c80a084acd700f4b0bb_9366/Tennis_Luxe_Polo_Shirt_Blue_H56471_21_model.jpg",
    },
    {
      id: 11,
      slug: "product12",
      title: "TENNIS LUXE POLO SHIRT",
      price: 40,
      categories:["shoes","newarrivals","women","tops"],
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/f447eb65ca9e4c43ad9facd700f42548_9366/Tennis_Luxe_Polo_Shirt_Yellow_H56469_21_model.jpg",
    },
    {
      id: 12,
      slug: "product13",
      title: "TENNIS LUXE POLO SHIRT",
      price: 40,
      categories:["shoes","newarrivals","women","tops"],
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/a4585753f21f409f8dc2ac7500e483d2_9366/LOUNGEWEAR_Adicolor_Essentials_Tee_Pink_H13877_21_model.jpg",
    },
    {
      id: 13,
      slug: "product14",
      title: "TIRO TRACK PANTS",
      price: 40,
      categories:["pants and tights","newarrivals","women",],
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/c4197b5e74b8415eb319ac9801250dc5_9366/Tiro_Track_Pants_Black_GN5492_21_model.jpg",
    },
    {
      id: 14,
      slug: "product15",
      title: "TIRO TRACK PANTS",
      price: 45,
      categories:["pants and tights","newarrivals","women",],
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/c36745ebf54840f1be6dacbd00eb9a19_9366/Tiro_Track_Pants_White_GN5493_21_model.jpg",
    },
  ];
  let [products] = useState(productsList)
  products = productsList
 
  if(category !== undefined){
    
    let filterByGender =  productsList.map(el => el).filter(el=> el.categories.includes(category))
    if(filterBy !== false){
      let filterBySubCategory =  filterByGender.map(el => el).filter(el=> el.categories.includes(filterBy)?el:false)
      //console.log(data)
      products = filterBySubCategory
    }else{
      products = filterByGender
    }
 
  }else{
    
  }
  function setMyFilterBy(params) {
    //filterBy = params
    setFilterBy(params)
    
  }
  
 

  return (
    <Container className="ProductsLayout mt-5 ">
      <ButtonGroup aria-label="Categories ">
      <Link to="/">
      
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
      <Container className="mt-3">
       {loadSubCategory(category,setMyFilterBy)}
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
          
         
        })}
      </Row>
    </Container>
  );
}
function loadSubCategory(param,setFilterBy) {
  if(param){
    return (<div>
    <Button onClick={()=>setFilterBy("shoes")}  variant="white" className="ml-1 border ">
    SHOES
    </Button>
    <Button onClick={()=>setFilterBy("tops")}  variant="white" className="ml-1 border">
    TOPS
    </Button>
    <Button onClick={()=>setFilterBy("pants and tights")}  variant="white" className="ml-1 border">
    PANTS AND TIGHTS
    </Button>
    <Button onClick={()=>setFilterBy("new arrivals")}  variant="white" className="ml-1 border">
    NEW ARRIVALS
    </Button>
  
    </div>)
        
  }
}

export default ProductsLayout;
