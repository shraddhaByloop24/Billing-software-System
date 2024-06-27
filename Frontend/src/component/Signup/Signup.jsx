import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import axios from 'axios';
import { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://a339-2405-201-301d-f0d5-7984-d486-3b2d-c5d5.ngrok-free.app/api/signup', { 
      username: name, 
      password, 
      email, 
      mobileNo: mobile, 
      role, 
      address 
    })
      .then(result => {
        console.log(result);
        // Assuming success message handling if needed
        navigate('/');
      })
      .catch(err => {
        console.error(err);
        if (err.response && err.response.status === 500) {
          alert('Registration failed: Server error. Please try again later.');
        } else if (err.response && err.response.data && err.response.data.includes('duplicate key error')) {
          alert('Username already exists. Please choose a different username.');
        } else {
          alert('Registration failed. Please try again.');
        }
      });
  };
  
  return (
    <div className="wrapper shadow" >
      <div className="container main-inner">
        <div className="inner">
          <div className="image-holder">
            <img src="/image/Untitled-3.png" height={520} alt="" />
          </div>
          <form onSubmit={handleSubmit}>
            <h3>Registration Form</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum impedit sapiente ipsam.</p>
            <div className="form-group">
              <input type="text" placeholder="Username" name="username" onChange={(e) => setName(e.target.value)} className="form-control" />
              <input type="text" placeholder="Phone Number" name="mobileNo" onChange={(e) => setMobile(e.target.value)} className="form-control" />
            </div>

            <div className="form-wrapper">
              <input
                type="email"
                placeholder="Email Address"
                className="form-control"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <i className="zmdi zmdi-email" />
            </div>

            <div className="form-wrapper">
              <select name="role" onChange={(e) => setRole(e.target.value)} className="form-control" defaultValue="">
                <option value="" disabled>
                  Role
                </option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="user">User</option>
              </select>
              <i className="zmdi zmdi-caret-down" style={{ fontSize: 17 }} />
            </div>

            <div className="form-wrapper">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="zmdi zmdi-lock" />
            </div>

            <div className="form-wrapper">
              <input
                type="text"
                placeholder="Address"
                className="form-control"
                name="address"
                onChange={(e) => setAddress(e.target.value)}
              />
              <i className="zmdi zmdi-account" />
            </div>

            <div className="newAcc text-start">
              <span>New on our platform? <Link to="/" className="unique">Back</Link></span>
            </div>
            
            <button type="submit">
              Register
              <i className="zmdi zmdi-arrow-right" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
