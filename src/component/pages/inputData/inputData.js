import { useState } from 'react';
import {Button, Form, Container} from 'react-bootstrap';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const InputData = () => {
    const [email, setEmail] = useState('')  
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')



    const handleSubmit = () => {
      const TambahUser = {
        first_name: firstName,
        last_name: lastName,
        email: email,
      };
      Axios.post("http://localhost:3004/users", TambahUser);
    };

    return (
    <div>
      <div style={{display: "flex"}}>
      <Container style={{flex: "1 0 1px"}}/>
      <Container style={{flex: "4 0 1px"}}>
        <br></br>
        <h3>Input Data</h3>
      <Form>
      <Form.Group>
        <Form.Label>Full Name</Form.Label>
        <br/>
        <Form.Control placeholder="Enter Full Name" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Username</Form.Label>
        <br/>
        <Form.Control placeholder="Enter Username" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>email</Form.Label>
        <br/>
        <Form.Control  placeholder="Enter Email" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
      </Form.Group>
      <br/>
      <Link to="/Dashboard">
      <Button variant="danger" type="submit" onsubmit={handleSubmit}> 
        Submit
      </Button> 
      </Link>
      </Form>
      </Container>
      <Container style={{flex: "1 0 1px"}}/>
    </div>
    </div>
    )
}

export default InputData;