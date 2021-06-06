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
import ListProducts from "./ListProducts";
function ProductsLayout(props) {
  let {category} = useParams("category");
  const [value, setValue] = useState(false);
  let [filterBy,setFilterBy] = useState(false);
 
  let [products,setPoduct] = useState([]);
  let [mycatgory,setmygategory] = useState(['women','men','kids']);

 
 
 

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/items/bycategory/${category}`).then(res=>{
      products = res.data.data
     setPoduct(products)
     setValue(true);
    })
  },[value])
  
  function getproducts(gender){
    
   // setmygategory(category);
    console.log("inside get products "+gender);
    axios.get(`http://localhost:8000/api/items/bycategory/${gender}`).then(res=>{
      products = res.data.data
    // setPoduct(products)
     console.log(products)
     setPoduct(products)
     
    
     //products = res.data.data
     // console.log(products)
    })
    
   
  }


  function setMyFilterBy(params) {
    //filterBy = params
    setFilterBy(params)
    
  }
  
 

  return (
    <Container className="ProductsLayout mt-5 ">
      <ButtonGroup aria-label="Categories ">
      
      <Link to="/women">
          <Button
         onClick={()=>{
         
          getproducts("women")
          
        }}
            className={
              mycatgory === "women"
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
             onClick={()=>{
             
              getproducts("men")
             
            }}
            className={
              mycatgory === "men"
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
           onClick={()=>{
             
            getproducts("kids")
           
          }}
            className={
              mycatgory === "kids"
                ? "ml-2 font-weight-bold text-uppercase "
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
       {loadSubCategory(mycatgory,setMyFilterBy)}
      </Container>
      <ListProducts products={products} />
      </Container>
  );
}
function loadSubCategory(param,setFilterBy) {
  if(param){
    return (<div>
    <Button onClick={()=>setFilterBy("all")}  variant="dark" className="ml-1 border">
    All products
    </Button>
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
