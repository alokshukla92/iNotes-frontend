import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';


const Login = () => {
    const hostname = "http://localhost:5000"
    const [credentials, setCredentials] = useState({
        "email": "",
        "password": ""
    })
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");    
        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body : JSON.stringify(
            {
                email: credentials.email,
                password: credentials.password
            }
        )
        };
        const response = await fetch(`${hostname}/api/auth/login`, requestOptions)
        const json = await response.json()
        console.log(json);
        if(json.success){
            localStorage.setItem('token' , json.authtoken);
            navigate("/");
        }
        else{
            console.log(json.error);
            toast(json.error)
        }
    }

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };

  return (
    <div className='container my-3'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={handleChange}/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name='password' onChange={handleChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Login
