import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

export default function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent default behavior
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_HOSTNAME}/user/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        console.log('Signup successful!');
        navigate('/login'); // Navigate to the Quiz page
      } else {
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSignup}>
        <h1>Signup</h1>
        <div className="box">
          <input
            type="text"
            name="name"
            placeholder="Username"
            required
            value={user.name}
            onChange={handleChange}
          />
          <span>&#128100;</span>
        </div>
        <div className="box">
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            required
            value={user.email}
            onChange={handleChange}
          />
          <span>&#9993;</span>
        </div>
        <div className="box">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={user.password}
            onChange={handleChange}
          />
          <span>&#128274;</span>
        </div>
        <button type="submit" className="button">Signup</button>
        <div className="sign-up">
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </form>
    </div>
  );
}
