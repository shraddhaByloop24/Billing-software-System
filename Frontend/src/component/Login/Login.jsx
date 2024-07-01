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
    <div className="container-fluid backk">
        <h1 className='text-start pt-3 text-white px-5'>Logo </h1>
        {/* <img src="icons/Byloop.png" className='img-fluid p-0 mx-3 bg-dark' width={150} alt="" /> */}
      <div className="wrapper " >
        <div className="container main-inner  p-3">
          <div className="inner ">
            <div className="image-holder">
              <img src="/image/6333204.jpg" alt="" />
            </div>
            <form action="" onSubmit={handleSubmit}>
              <h1>Login Form</h1>
              <p className='pt-1'>Enter your credentials to log in.</p>

              <div className="form-wrapper">
                <input
                  type="email"
                  name='email'
                  value={email}
                  placeholder="Email Address"
                  className="form-control form-control-login"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <i className="zmdi zmdi-email" />
              </div>


              <div className="form-wrapper">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control form-control-login"
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i className="zmdi zmdi-lock" />
              </div>


              <button className="custom-btn btn-2  ">Sign In</button>
              <div className=' text-start pt-2'>
                <span>New on our platform? <Link to="/Signup" className='unique'>Create an account</Link></span>
              </div>

              <div className="icons pt-4">
                <div className="social mx-2 ">
                  <a href="#">
                    <i className="social-icon fab fa-facebook-f" />
                  </a>
                </div>
                <div className="social mx-2">
                  <a href="#">
                    <i className="social-icon fab fa-twitter" />
                  </a>
                </div>
                <div className="social mx-2">
                  <a href="#">
                    <i className="social-icon fab fa-google-plus-g" />
                  </a>
                </div>
                <div className="social mx-2">
                  <a href="#">
                    <i className="social-icon fab fa-instagram" />
                  </a>
                </div>
                <div className="social mx-2">
                  <a href="#">
                    <i className="social-icon fab fa-linkedin-in" />
                  </a>
                </div>
              </div>


              

            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Login;
