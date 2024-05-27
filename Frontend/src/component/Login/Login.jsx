import { Link, useNavigate } from 'react-router-dom';
import './Loginstyle.css';
import axios from 'axios';
import { useState } from 'react';
import Swal from "sweetalert2";


function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('')
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password, role });
      if (response.data === 'Success') {
        Swal.fire({
          title: "Login Successfully",
          text: "You clicked the button!",
          icon: "success"
        });

        // Redirect based on role
        if (role === 'Admin') {
          navigate('/Productlist');
        } else if (role === 'Manager') {
          navigate('/Addproduct');
        } else if (role === 'Owner') {
          navigate('/Admin');
        } else {
          // Default redirect for other roles or if role is not set
          navigate('/Dashboard');
        }
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="container-fluid Login">
      <div className='backgroundimag'>
        {/* <img src="/image/login-img.png" className="login-imgs" alt="" /> */}

      </div>
      <div className="container-fluid  login-main "></div>
      <div className="container p-3  login-container shadow">
        <div className="row ">
          <div className="col-lg-6 login-img-box">
            <div className='login-heading'><p>Hello,</p> <h1><b className='uniqu'>FOODIES !</b> <br /> WE'RE ALWAYS </h1> <p>HERE FOR <b className='unique'>YOU. </b></p>
              <i className='login-thought'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis esse repellat exercitationem alias rerum, voluptatem ab! exercitationem Rerum.</i>
            </div>
            {/* <img src="/image/ll.png" className='login-img' alt="" /> */}
          </div>
          <div className="col-lg-6  mt-5 login-col ">


            <div className="pt-lg-5">
              <div className="box-root flex-flex flex-direction--column">
                <div className="formbg-outer">
                  <span className="password-toggle" onClick={togglePasswordVisibility}>
                    {showPassword ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
                  </span>
                  <div className="formbg ">
                    <div className="formbg-inner padding-horizontal--48">
                      <h1 className='form-heading unique px-3'>Sign in to your account 👋</h1>
                      <form id="stripe-login" onSubmit={handleSubmit}>
                        <div className="field padding-bottom--24">
                          <label htmlFor="email">Email</label>
                          <input type="email" placeholder='Enter your email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="field padding-bottom--24">
                          <label htmlFor="password">Password</label>
                          <input type={showPassword ? 'text' : 'password'} placeholder='Enter your password'  name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className=" field ">
                          <label>Role</label>
                          <select name="role" id="" className='form-control' onChange={(e)=>setRole(e.target.value)}>
                            <option value=" ">Select your role</option>
                            <option value="Admin">Admin</option>
                            <option value="Owner">Owner</option>
                            <option value="Manger">Manger</option>
                          </select>
                        </div>
                        <div className="field pt-2 padding-bottom--24 d-grid gap-2">
                          <button className="btn login-btn mt-2" type="submit">Submit</button>
                        </div>
                        <div className='newAcc'>
                          <span>New on our platform? <Link to="/Signup" className='unique'>Create an account</Link></span>
                        </div>
                        <div className="field or pt-2">
                          <hr />
                          <p>or</p>
                          <hr />
                        </div>
                      </form>
                    </div>
                    <div className="footer-link pb-3 ">
                      <div className="listing flex-flex center-center">
                        <span className='icon '>
                          <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                        </span>
                        <span className='icon'>
                          <a href=""><i className="fa-brands fa-google"></i></a>
                        </span>
                        <span className='icon'>
                          <a href=""><i className="fa-brands fa-twitter"></i></a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
