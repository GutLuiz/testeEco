import React, { useState } from "react"; // Importa useState
import { Link, useNavigate } from "react-router-dom"; // Importa Link e useNavigate
import { registerUser } from "../services/register-service"; // Importa a função de registro
import "./Register.css"; // Importa o CSS

const Register = () => {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [message, setMessage] = useState(""); 
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault(); 

    const userData = {
      email: username,
      senha: password,
    };


    try {
      const response = await registerUser(userData);

      if (response != null) {
        console.log("Registro bem-sucedido:", response);

        setMessage(`Bem-vindo, ${username}`);

        // Salva o e-mail do usuário no localStorage
        localStorage.setItem("userEmail", username);

        // Redireciona para a homepage após o registro
        navigate("/");
      }
    } catch (error) {
      console.error("Erro no registro:", error);
      setMessage("Erro no registro, tente novamente!");
    }
  };

  return (
    <div className="register-body">
      <div className="register-container">
        <div className="register-left">
          <h2>Já tem uma conta?</h2>
          <p>Acesse sua conta agora</p>
          <Link to="/login">
            <button className="login-btn">Entrar</button>
          </Link>
        </div>
        <div className="register-right">
          <h2>Crie sua conta</h2>
          <form className="register-form" onSubmit={handleRegister}>
            <div className="form-group">
              <input
                type="email"
                placeholder="E-mail"
                value={username} // Corrige o valor do estado
                onChange={(e) => setUsername(e.target.value)} // Atualiza o estado ao digitar
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Senha"
                value={password} // Corrige o valor do estado
                onChange={(e) => setPassword(e.target.value)} // Atualiza o estado ao digitar
              />
            </div>
            <button type="submit" className="register-btn">
              Cadastrar
            </button>
          </form>
          {message && <p>{message}</p>} {/* Exibe mensagens de feedback */}
        </div>
      </div>
    </div>
  );
};

export default Register;
