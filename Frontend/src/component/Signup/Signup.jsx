import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'
import axios from 'axios';
import { useState } from 'react';


const Signup = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [role, setRole] = useState();
  const [address, setAddress] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register', { name, password, email, mobile, role, address })
      .then(result => console.log(result))
      .catch(err => console.log(err))
    navigate('/');
  }
  // bacdropFilter
  return (
    <div className='container-fluid  '>
      <div className="sigup-clippy"></div>
      <div className="container-fluid  Signup">
        <div className=' container-fluid backdrop'>
          <div className="row px-lg-3 py-lg-3 " >
            <div className="col-lg-7  reg-back d-flex justify-content-center align-items-center">
              <div className="row ">
                <div className="col-lg-12 ">
                  <img src="/image/reg3.png" className='img-fluid reg-img-height ' alt="" />
                </div>
                {/* <div className="col-lg-6 p-0"> <img src="/image/dish1.png" className='img-fluid reg1' alt="" /> </div>
              <div className="col-lg-6 p-0"> <img src="/image/reg1.png" className='img-fluid reg2' alt="" /> </div> */}
              </div>
            </div>

            <div className="col-lg-5 p-0 form-section registration">
              <form action="#" onSubmit={handleSubmit} className="form  ">
                <h1 className='header'>Registration here 👋</h1>
                <div className="input-box">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter full name"
                    name='name'

                    onChange={(e) => setName(e.target.value)}
                    required="" />
                </div>
                <div className="input-box">
                  <label>Email Address</label>
                  <input type="text" placeholder="Enter email address"
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                    required="" />
                </div>
                <div className="column">
                  <div className="input-box">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password"
                      name='password'
                      onChange={(e) => setPassword(e.target.value)}
                      required="" />
                  </div>
                  <div className="input-box">
                    <label>Mobile no</label>
                    <input type="number" placeholder="Enter phone number"
                      name='mobile'
                      onChange={(e) => setMobile(e.target.value)}
                      required="" />
                  </div>
                </div>
                <div className="input-box">
                  <label>Role</label>
                  <select name="role" id="" className='form-control' onChange={(e) => setRole(e.target.value)}>
                    <option value=" ">Select your role</option>
                    <option value="Admin">Admin</option>
                    <option value="Owner">Owner</option>
                    <option value="Manager">Manager</option>
                  </select>
                </div>
                <div className="input-box">
                  <label>Address</label>
                  <input type="text" placeholder="Enter phone Address"
                    onChange={(e) => setAddress(e.target.value)}
                    required="" />
                </div>
                <div className="agree">
                  <input type="checkbox" id="termsAndConditions" name="termsAndConditions" required />
                  <label className='mt-2 px-2 agree-line' >I agree to the terms and conditions</label>
                </div>
                <div className='newAcc'>
                  <span>
                    New on our platform?  <Link to="/" className='unique'>
                      if have already account</Link>
                  </span>




                </div>

                <div className=" d-grid gap-2 mt-2">
                  <button className="btn register-btn  p-2" type="submit">Submit</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup

