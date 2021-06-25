import axios from "axios";
import { useState } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Card,
  ButtonGroup,
  Form,Image
} from "react-bootstrap";
import Cookies from 'universal-cookie';

function Checkout(props) {
 let [items,setItems] = useState([]);
  const cookies = new Cookies();
  let mybagg= cookies.get("myBag");
  items = mybagg;
  

    function orderNow() {

      if(mybagg.length > 0){
let config = {
  headers: {
    headers: {"Access-Control-Allow-Origin": "*"}
  }
}
        axios.post("http://127.0.0.1:8000/api/order",{
		
          mybag : mybagg
         },config ).then(res=>{
          console.log(res.data.state)
           if(res.data.state === 1){
            
             document.querySelector(".message").className = "text-success mt-5 message";
           }
         }).catch(err=>console.log(err));
      }
     
    }

  return (
    <Row>
      <Col className ="mt-5 ml-5 mr-auto ">
      <Container>
         
         {items != null
           ? items.length > 0
             ? items.map((item,index) => {
                 return (
                   
                   <Row key={index}>
                     <hr />
                     <Col md={6} sm={6} xs={6}>
                       <div className="product-image ">
                         <Image src={item.picture} width="100%" />
                       </div>
                     </Col>
                     <Col md={6} sm={6} xs={6}>
                       <div className="product-title">
                         <h4>{item.title}</h4>
                       </div>
                       <div className="product-price">
                         <h5>price: <b>${item.price}</b></h5>
                       </div>
                       <div className="product-quantity">
                         <h5>Quantity: <b>{item.quantity}</b></h5>
                       </div>
                       <div className="product-size">
                         <h5>size: <b>{item.size}</b></h5>
                       </div>
                       <div className="product-color">
                         <h5>color: <b>{item.color}</b></h5>
                       </div>
                     </Col>
                     
                   </Row>
                 );
               })
             : ""
           : ""}
           
       </Container>     
      </Col>



      <Col className="bg-light">
      <div className="container mt-5  text-center">
        <div className="ml-auto mr-auto">
          <h1>{cookies.get("full_name")}</h1>
          <p>{cookies.get("address")}</p>
          <Button variant="primary" onClick={orderNow} className="w-25">order</Button>
          <div className="d-none message mt-5">
          <h1 className="text-success  ">Ordered successfully</h1>
          <img width="50px" height="50px" alt ="success" src="https://lh3.googleusercontent.com/proxy/toq04kMSMFyI_NvxZk5CQW9uuyz_7sW8Y138Ypm7bOeCAHUh6gV4SG1rNM3u39BX2kRYqag9N6d_BhsPsEAkIZQlHSjUtar1PjP1EOygVa-q-46uLt9rCks26qsn8A"/>
          </div >
        </div>
      </div>
      </Col>
    </Row>
  );
}

export default Checkout;
