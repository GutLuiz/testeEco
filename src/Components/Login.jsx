import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Para navegação
import { loginUser } from '../services/login-service'; // Função de login
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState(""); // Estado para o email
  const [password, setPassword] = useState(""); // Estado para a senha
  const [message, setMessage] = useState(""); // Estado para mensagens de feedback
  const navigate = useNavigate(); // Hook para navegação

  const handleLogin = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    const userData = {
      email: username,
      senha: password,
    };

    try {
      const response = await loginUser(userData); // Chama a função de login

      if (response != null) {
        console.log("Login bem-sucedido:", response);
        setMessage("Login realizado com sucesso!");
        navigate('/homepage'); // Redireciona para a página de homepage
      }

    } catch (error) {
      console.error("Erro no login:", error);
      setMessage("Credenciais inválidas!"); // Mensagem de erro genérica
    }
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <div className="login-left">
          <h2>Não tem conta?</h2>
          <p>Crie sua conta agora</p>
          <button className="login-btn">Logar</button>
        </div>
        <div className="login-right">
          <h2>Entre na sua conta</h2>
          <form className="login-form" onSubmit={handleLogin}> {/* Adiciona o onSubmit */}
            <div className="form-group">
              <input 
                type="email" 
                placeholder="E-mail"
                value={username} // Vincula ao estado do username
                onChange={(e) => setUsername(e.target.value)} // Atualiza o estado ao digitar
              />
            </div>
            <div className="form-group">
              <input 
                type="password" 
                placeholder="Senha"
                value={password} // Vincula ao estado do password
                onChange={(e) => setPassword(e.target.value)} // Atualiza o estado ao digitar
              />
            </div>
            <button type="submit" className="register-btn">Entrar</button> {/* Botão de submit */}
          </form>
          {message && <p>{message}</p>} {/* Exibe mensagens de feedback */}
        </div>
      </div>
    </div>
  );
};

export default Login;
