import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link do react-router-dom
import './Register.css';
import backgroundImage from '../assets/fotoverde.jpg'; // Importa a imagem

const Register = () => {
  return (
    <div className="containereg" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <form className="form">
        <h1>Faça seu registro</h1>
        <label>Email:</label>
        <input type="email" placeholder="Digite seu email" />
        <label>Senha:</label>
        <input type="password" placeholder="Digite sua senha" />
        <button type="submit">Registrar</button>
        
        <p className="register-message">
          Já tem uma conta? <Link to="/" className="login-link">Faça login!</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
