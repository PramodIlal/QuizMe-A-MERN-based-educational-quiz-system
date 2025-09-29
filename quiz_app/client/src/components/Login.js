import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css'; // Ensure this path matches your folder structure

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    if (username && password) {
      console.log('Login Success:', { username, password });
      navigate('/main'); // Redirect to the quiz page after successful login
    } else {
      alert('Please fill all fields');
    }
  }

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>

        <div className="box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <span>&#128100;</span>
        </div>

        <div className="box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span>&#128274;</span>
        </div>

        <button type="submit" className="button">Login</button>

        <div className="signup">
          <p>Don't have an account? 
            <Link to="/signup">Signup</Link> {/* Navigate to Signup page */}
          </p>
        </div>
      </form>
    </div>
  );
}
