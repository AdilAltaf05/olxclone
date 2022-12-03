import React from 'react'
import { useState } from 'react';
import './Add.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';
import {db} from "../db"
import { collection, addDoc } from "firebase/firestore"; 
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom"





function Add() {

    const [name, setName] = useState("")
    const [email, setemail] = useState("")
    const [City, setCity] = useState("")
    const [picture, setpicture] = useState("")
    const [desc, setdesc] = useState("")
    const [price, setPrice] = useState("")

  




    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  async function han() {
    alert("Your Ad is Posted")
    try {
      const docRef = await addDoc(collection(db, "users"), {
           name,
           desc,
           picture,
           price,
           City,
           email,
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          
          window.location.reload(true);
  }
           




  return (
    <div>

        <div className="container1" >
            <h1 className='mainheading' >Post Your Product Here</h1>
        </div>

        <div className='display-container'>
         <div className='container2'>
        {/* <FloatingLabel 
        
        controlId="floatingInput"
        label="Full Name"
        className="mb-3 input1 "
        >
        <Form.Control onChange={(event) => {
            setName(event.target.value)
        }} type="text" placeholder="Full Name" />
      </FloatingLabel>


      <FloatingLabel  controlId="floatingPassword" label="name@example.com" className='input2' >
        <Form.Control type="text" placeholder="name@example.com" />
      </FloatingLabel> */}
        </div>

        <div className='container3'>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Product Name"
            onChange={(event) => {
              setName(event.target.value)
            }}
          />

          
          
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
          className='price-input'
            required
            type="text"
            placeholder="Product Price"
            onChange={(event) => {
              setPrice(event.target.value)
            }}
          />

          

          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
          <div className="username-add">
        <Form.Group   as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label id="inputGroupPrepend">UserName</Form.Label>
          <InputGroup hasValidation  >
            <InputGroup.Text  id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
            onChange={(event) => {
              setemail(event.target.value)
            }}
            type="text"
            placeholder="Enter your UserName"
            aria-describedby="inputGroupPrepend"
            required
            />
            <Form.Control.Feedback type="invalid">
              Enter your UserName.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
          </div>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Picture</Form.Label>
          <Form.Control type="text" placeholder="Picturen URL" required
          onChange={(event) => {
            setpicture(event.target.value)
          }}  />
          
        </Form.Group>
        {/* <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid City.
          
          </Form.Control.Feedback>
        </Form.Group> */}

        <Form.Select id='select' onChange={(event) => {
              setCity(event.target.value)
            }}  >
        <option>Choose Your City</option>
        <option>Karachi</option>
        <option>Islamabad</option>
        <option>Lahore</option>
        <option>Peshawar</option>
        <option>Multan</option>
        <option>Quetta</option>
      </Form.Select>

        <div className='input1'>
        <Form.Group className="  input1" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3}  placeholder="Write Description of your Product"
        onChange={(event) => {
          setdesc(event.target.value)
        }} />
      </Form.Group>
        </div>
        
      </Row>

      
      <div>
      <Button   className='btn btn-success' onClick={han}   >Submit form</Button>
      
      <Link className='Home' to={"/"} >Back to Home</Link>
      </div>
    </Form>
      </div>
  

        </div>

        

    </div>
  )
}

export default Add