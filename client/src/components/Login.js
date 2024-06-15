import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom"; // Correct import for Link
import { UserContext } from '../context/UserContext';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/loginsubmit', { email, password });
      alert(response.data);
      if (response.data === 'Login successful') {
        setUser({ email });
        navigate('/userprofile');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className='body'>
      <div className="login_top">
        <h1>Login... </h1>
        <form onSubmit={handleSubmit}>
          <div className="login_form">
            <div className="login_f1">
              <label className='login_label' htmlFor="email">Mail&nbsp;ID</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                className="login_input"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder=''
              />
            </div>
            <div className="login_f1">
              <label className='login_label' htmlFor="password">Password</label>&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                className="login_input"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <button type="submit" className="login_btnn">Submit</button>
            </div>
          </div>
        </form>
        <p>Don't have an account?<Link to="/signup" className='link'>SignUp</Link></p>
      </div>
    </div>
  );
}

export default Login;
