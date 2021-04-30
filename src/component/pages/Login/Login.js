import { useState } from 'react';
import {Button, Form, Container} from 'react-bootstrap';
import firebase from "../../../config/FireBase";
import {useHistory} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let history =useHistory();

    const handleSubmit= () =>{
      const data ={
        email:email,
        password:password,
      };
    firebase
        .auth().createUserWithEmailAndPassword(email,password).then(res => console.log("Login berhasil",res))
        .catch((error) =>console.log("error",error));
    }
    return  (
      <div>
          
          <p>email</p>
          <input
              className="form-control"
              placeholder="Masukkan Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}>
          </input>
          <p className="mt-4">Password</p>
          <input
              className="form-control"
              placeholder="Masukkan Password"
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}>
          </input>
          <br></br>

          <button type="button" onClick={handleSubmit} className="btn btn-danger">Login</button>
      </div>
  )
}

export default Login;