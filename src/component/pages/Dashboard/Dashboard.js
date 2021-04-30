import React,{ useEffect , useState}  from 'react';
import {Button} from 'react-bootstrap';
import Card from "../../../molecules/card/card";
import {Link} from 'react-router-dom';
import Axios from "axios";


const Dashboard = () => {


        const [users, setUsers] = useState([]);
        useEffect(() => {
          Axios.get("http://localhost:3004/users").then((res) => setUsers[res.data]);
        }, [users]);
      
        const TambahUser = () => {
          const data = {
            avatar: "https://source.unsplash.com/random",
            email: "juniorluntungan25@gmail.com",
            first_name: "Junior",
            last_name: "Luntungan",
          };
          Axios.post("http://localhost:3004/users", data);
        };
      
        return (
          <div className="container">
            <h3>Dashboard</h3>
            <hr />
            <br />
            <Link to="/InputData">
            <Button variant="danger" type="submit" onsubmit={TambahUser}> Tambah User</Button> 
            </Link>
      
            <div className="row align-items-start">
              {users.map((item) => (
                <Card
                  avatar={item.avatar}
                  fullName={`${item.first_name} ${item.last_name}`}
                  email={item.email}
                />
              ))}
            </div>
          </div>
        );
      };


export default Dashboard;