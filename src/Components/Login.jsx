import React from 'react';
import { Link } from 'react-router-dom'; // Adicione esta linha
import './Login.css';
import backgroundImage from '../assets/fotoverde.jpg'; // Importa a imagem

const Login = () => {
  return (
    <div className="container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <form className="form">
        <h1>Faça seu login</h1>
        <label>Email:</label>
        <input type="email" placeholder="Digite seu email" />
        <label>Senha:</label>
        <input type="password" placeholder="Digite sua senha" />
        <button type="submit">Entrar</button>
        <p className="login-message">
          Não tem uma conta? <Link to="/register" className="register-link">Registre-se!</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
