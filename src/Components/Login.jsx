import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { loginUser } from '../services/login-service'; 
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [message, setMessage] = useState(""); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); 

    const userData = {
      email: username,
      senha: password,
    };

    try {
      const response = await loginUser(userData); 

      if (response != null) {
        console.log("Login bem-sucedido:", response);

        setMessage(`Bem-vindo, ${username}`);
        
        // Salva o e-mail do usuário no localStorage
        localStorage.setItem('userName', username);

        navigate('/'); // Redireciona para a homepage após login
      }
    } catch (error) {
      console.error("Erro no login:", error);
      setMessage("Credenciais inválidas!"); 
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
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <input 
                type="email" 
                placeholder="E-mail"
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
              />
            </div>
            <div className="form-group">
              <input 
                type="password" 
                placeholder="Senha"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <button type="submit" className="register-btn">Entrar</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
