import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import './Login.css';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const { setUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/signinsubmit', formData);
      alert(response.data);
      setUser({ username: formData.username, email: formData.email });
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className='body'>
      <div className="login_top1">
        <h1>SignUp</h1>
        <form onSubmit={handleSubmit}>
          <div className="login_f1">
            <label className='login_label' htmlFor="username">Username:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className="login_input" type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
          </div>
          <div className="login_f1">
            <label className='login_label' htmlFor="email">Email:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className="login_input" type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="login_f1">
            <label className='login_label' htmlFor="password">Password:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className="login_input" type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>

          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/login" className='link'>Login</Link></p>
      </div>
    </div>
  );
}

export default Signup;
