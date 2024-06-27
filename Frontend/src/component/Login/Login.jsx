import { Link, useNavigate } from 'react-router-dom';
import './Loginstyle.css';
import axios from 'axios';
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://a339-2405-201-301d-f0d5-7984-d486-3b2d-c5d5.ngrok-free.app/api/login', { email, password });
      if (response.status === 200) {
        // Assuming the API returns a success status code
        navigate('/Dashboard');
      } else {
        // Handle other potential response cases based on API behavior
        alert('Login failed. Please check your credentials and try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      if (error.response && error.response.status === 401) {
        alert('Invalid email or password');
      } else {
        alert('Login failed. Please try again later.');
      }
    }
  };

  return (
    <>
       <div className="wrapper shadow" >
            <div className="container main-inner">
                <div className="inner">
                    <div className="image-holder">
                        <img src="/image/login.jpg" height={380} alt="" />
                    </div>
                    <form action="" onSubmit={handleSubmit}>
                        <h3>Login Form</h3>
                        <p>Enter your credentials to log in.</p>

                        <div className="form-wrapper">
                            <input
                                type="email"
                                name='email'
                                value={email}
                                placeholder="Email Address"
                                className="form-control"
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                            <i className="zmdi zmdi-email" />
                        </div>
                       

                        <div className="form-wrapper">
                            <input
                                type="password"
                                placeholder="Password"
                                className="form-control"
                                name='password'
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                            <i className="zmdi zmdi-lock" />
                        </div>
               
                  
                        <button type="submit">
                            Login
                            <i className="zmdi zmdi-arrow-right" />
                        </button>
                        <div className=' text-center pt-2'>
                          <span>New on our platform? <Link to="/Signup" className='unique'>Create an account</Link></span>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </>
  );
}

export default Login;
