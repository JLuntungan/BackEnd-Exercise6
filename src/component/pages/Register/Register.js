import { useState } from 'react';
import {Button, Form, Container} from 'react-bootstrap';

const Register = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    return (
    <div>
      <div style={{display: "flex"}}>
      <Container style={{flex: "1 0 1px"}}/>
      <Container style={{flex: "4 0 1px"}}>
        <br></br>
        <h3>Register</h3>
      <Form>
      <Form.Group>
        <Form.Label>Full Name</Form.Label>
        <br/>
        <Form.Control placeholder="Enter Full Name" value={name} onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Username</Form.Label>
        <br/>
        <Form.Control placeholder="Enter Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>email</Form.Label>
        <br/>
        <Form.Control  placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <br/>
        <Form.Control  placeholder="Enter Phone Number" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Address</Form.Label>
        <br/>
        <Form.Control  placeholder="Enter Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
      </Form.Group>
      <br/>
      <Button variant="danger" type="submit" onClick={(e)=>{
          e.preventDefault()
          console.log(name, username, email, phoneNumber, address)}}> 
        Submit
      </Button> 
      </Form>
      </Container>
      <Container style={{flex: "1 0 1px"}}/>
    </div>
    </div>
    )
}

export default Register;