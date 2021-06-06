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
import SubCategories from "./SubCategories";
function ProductsLayout(props) {

  let {category} = useParams("category");
  const [value, setValue] = useState(false);
  let [filterBy,setFilterBy] = useState(false);
  let [products,setPoduct] = useState([]);
  let [categories,setcategotries] = useState([]);
  let productsFiltered = filterdata(products,props.filterby);
  useEffect(()=>{
          axios.get(`http://localhost:8000/api/items/bycategory/${category}`).then(res=>{
            products = res.data.data
          setPoduct(products)
          setValue(true);
       }).then(()=>{
        axios.get(`http://localhost:8000/api/categories`).then(res=>{
          categories = res.data.data;
          setcategotries(categories);
         
        })
       })
  },[value])
  
  function getproducts(gender){
    console.log("inside get products "+gender);
    axios.get(`http://localhost:8000/api/items/bycategory/${gender}`).then(res=>{
      products = res.data.data
  
     console.log(products)
     setPoduct(products)
    
    })
  }
  function getproductsBysubCategory(gender,subcategory){
    console.log("inside get products "+gender);
    axios.get(`http://localhost:8000/api/items/bysubcategory/${gender}/${subcategory}`).then(res=>{
      products = res.data.data
  
     console.log(products)
     setPoduct(products)
     
    
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
             onClick={()=>{
             
              getproducts("men")
             
            }}
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
           onClick={()=>{
             
            getproducts("kids")
           
          }}
            className={
              category === "kids"
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
        <SubCategories category= {category} categories={categories}  getBysubCategory={getproductsBysubCategory}/>
      </Container>
      
      <ListProducts category={category} products={productsFiltered}  />
      </Container>
  );
}
function filterdata(data,filterwith) {
  if(data.length > 0){
   return data.filter(prod=>prod.title.toLowerCase().includes(filterwith.toLowerCase()))
  }else{
    return []
  }
  
  
}

export default ProductsLayout;
