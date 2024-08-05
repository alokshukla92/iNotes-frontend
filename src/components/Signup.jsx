import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    showPassword: false 
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const togglePasswordVisibility = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword
    });
  };

  let navigate = useNavigate();
  const hostname = "http://localhost:5000"

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., API calls, validation, etc.

    const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");    
        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body : JSON.stringify(
            formData
        )
        };
        const response = await fetch(`${hostname}/api/auth/createuser`, requestOptions)
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

    // console.log('Form submitted with:', formData);
    setFormData({
      name: '',
      email: '',
      password: '',
      showPassword: false
    });
  };

  return (
    <div className="container mt-4">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">Password</label>
          <div className="input-group">
            <input
              type={formData.showPassword ? 'text' : 'password'}
              className="form-control"
              id="inputPassword"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={togglePasswordVisibility}
            >
              {formData.showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <button type="submit" disabled={formData.password.length < 5} className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
