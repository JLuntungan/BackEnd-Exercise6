import React ,{useState}from 'react';
import firebase from '../../../config/FireBase';
import {useHistory} from "react-router-dom";

const Registrasi = () => {
    const [fullName, setFullName]  = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    let history = useHistory();

    const onSubmit=()=>{

        const data ={
            email:email,
            fullName:fullName,
        };

        firebase
        .auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
             //simpan ke realtime database
             const userId = userCredential.user.uid;
             firebase
             .database()
             .ref('users/' + userId)
             .set(data);

             setFullName("");
             setEmail("");
             setPassword("");
             //riderect ke login
             history.push("/Login");
            })
        .catch((error) => {
             console.log(error);
            //tampilakn pesan error
             });
    }

    return (
        <div>
            <p>Nama Lengkap</p>
            <input
                className="form-control"
                placeholder="Masukkan Nama Lengkap"
                value={fullName}
                onChange={(e)=>setFullName(e.target.value)}>
            </input>
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

            <button type="button" onClick={onSubmit} className="btn btn-danger">Register New User</button>
        </div>
    )
};

export default Registrasi;