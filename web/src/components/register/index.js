import React, { useState } from 'react';
import './style.css';
import isCpf from '../../util/cpfTest';

function Register({ onSubmit }) {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ name, setName ] = useState("");
  const [ cpf, setCpf ] = useState("");
  const [ birthday, setbirthday ] = useState("");

  async function handleCreateUser(e) {
    e.preventDefault();

    if(isCpf(cpf)) {
        onSubmit({
            email,
            password,
            name,
            cpf,
            birthday
        });
    } else {
        alert('Invalid CPF!');
    }
  }
  return (
    <div className="login-page">
      <div className="form">
        <form onSubmit={handleCreateUser} className="login-form">
          <input type="Email" value={email} required placeholder="Email" onChange={e => setEmail(e.target.value)} />
          <input type="password" value={password} required placeholder="Password" onChange={e => setPassword(e.target.value)} />
          <input type="text" value={name} required placeholder="Name" onChange={e => setName(e.target.value)} />
          <input type="date" value={birthday} required placeholder="Date of birthday" onChange={e => setbirthday(e.target.value)} />
          <input type="text" value={cpf} required placeholder="CPF" onChange={e => setCpf(e.target.value)} />
          <button type="submit">Sign in</button>
          <p className="message">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
