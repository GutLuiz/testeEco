import React from "react"; 
import { Link } from "react-router-dom"; 
import "./Sucesso.css";  

const Sucesso = () => {
  return (
    <div className="sucesso-container">
      <div className="sucesso-content">
        <img
          src="./src/assets/fundo.png"
          alt="Success"
          className="sucesso-image"
        />
        <h1 className="sucesso-title">
          Agendamento realizado com sucesso
        </h1>
        <p className="sucesso-message">
          Obrigado por agendar conosco
        </p>
        {/* Link para o menu principal */}
        <Link to="/" className="sucesso-link">
          Voltar para o menu principal
        </Link>
      </div>
    </div>
  );
};

export default Sucesso;
