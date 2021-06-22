
import { useState } from "react";
import { Col, Row, Container, Form, Button,Carousel } from "react-bootstrap";
import axios from "axios";  
import Cookies from "universal-cookie";
function Login(params) {
  const cookies = new Cookies();
    var [full_name,setFullName] =useState("")
    var [address,setadress] =useState("")
    var [email,setemail] =useState("")
    var [password,setpassword] =useState("")
    var [email_address,setEmailAdress] =useState("")
    var [email_password,setEmailPassword] =useState("")
    function logIn(e) {
      e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/loginclient",{
            email_password,
            email_address
        }).then(res=>{
          if(res.statusText === "OK"){
            cookies.set("clientId",res.data.id,{path:"/"});
            cookies.set("full_name",res.data.fullname,{path:"/"});
            cookies.set("address",res.data.address,{path:"/"});
            window.location.reload(false);
            window.location = "/women"
              
          }
          console.log(res)
        }).catch(ex=>console.log(ex))
      
    }
    function signUp(e) {
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/addclient",{
            full_name,
            address,
            email,
            password
        }).then(res=>{
          if(res === "ok"){
              console.log("good")
          }
        }).catch(ex=>console.log(ex))
    }
    return(
        <Container className="mt-5">
  <Row>
    <Col>
    <h1 className="ml-auto mr-auto">Log in </h1>
                <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={(e)=>setEmailAdress(e.target.value)}  type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={(e)=>setEmailPassword(e.target.value)}  type="password" placeholder="Password" />
  </Form.Group>
  <Button onClick={logIn} variant="primary" type="submit">
    Log in
  </Button>
</Form>
    </Col>

    <Col>
    <h1 className="ml-auto mr-auto">sign up </h1>
                <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Full name</Form.Label>
    <Form.Control onChange={(e)=>setFullName(e.target.value)} className="full_name" type="text" placeholder="Enter full name"  />
    <Form.Label>address</Form.Label>
    <Form.Control onChange={(e)=>setadress(e.target.value)}  type="text" placeholder="Enter address" />
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={(e)=>setemail(e.target.value)}  type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={(e)=>setpassword(e.target.value)}  type="password" placeholder="Password" />
  </Form.Group>
  <Button onClick={signUp} variant="primary" type="submit">
    Sign up
  </Button>
</Form>
    </Col>
  </Row>
 
</Container>
    )
}
export default Login;