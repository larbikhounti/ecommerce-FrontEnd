import {
  Container,
  Col,
  Row,
  Button,
  Card,
  ButtonGroup,
} from "react-bootstrap";
import axios from "axios"
import { Link, useParams } from "react-router-dom";
import {useState,useEffect} from "react";
function ProductsLayout(props) {
  let {category} = useParams("category");
  const [value, setValue] = useState('');
  let [filterBy,setFilterBy] = useState(false);
  let [products,setPoduct] = useState()

  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/items").then(res=>{
      products = res.data.data
     setPoduct(products)
     //products = res.data.data
     // console.log(products)
    })
  },[value])


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

      <Row className="ProductsList min-vh-100">
        {
          checkIfThereIsProducts(products)
        
            
       }
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
function checkIfThereIsProducts(products) {
  if(products !== undefined){  
    console.log(products)      
   return products.map((element, index) => {
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
  }else{
    <h1>hehe</h1>
  }

}
