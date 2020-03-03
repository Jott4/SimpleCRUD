import React, { useState } from "react";

function Login({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLoginUser(e) {
    e.preventDefault();
    onSubmit({
      email,
      password,
    });
  }

  return (
    <div className="login-page">
      <div className="form">
        <form onSubmit={handleLoginUser} className="login-form">
          <input
            type="Email"
            value={email}
            required
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            required
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Entrar</button>
          <p className="message">
            Não é registrado? <a href="rocketseat.com.br">Crie uma conta</a>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Login;
