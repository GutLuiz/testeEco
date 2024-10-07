import { useState } from 'react'; // Adicione o useState
import { Link } from 'react-router-dom';
import { loginUser } from '../services/login-service'; // Importe a função de login
import './Login.css';
import backgroundImage from '../assets/fotoverde.jpg';

const Login = () => {
  const [username, setUsername] = useState(""); // Estado para o email
  const [password, setPassword] = useState(""); // Estado para a senha
  const [message, setMessage] = useState(""); // Estado para mensagens de feedback

  const handleLogin = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    const userData = {
      email: username,
      senha: password,
    };

    try {
      const response = await loginUser(userData); // Chama a função de login
      console.log("Login bem-sucedido:", response);
      setMessage("Login realizado com sucesso!");
      // Aqui você pode redirecionar o usuário para outra página após o login
    } catch (error) {
      console.error("Erro no login:", error);
      setMessage("Credenciais inválidas!"); // Mensagem de erro
    }
  };

  return (
    <div className="container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <form className="form" onSubmit={handleLogin}> {/* Adicione onSubmit */}
        <h1>Faça seu login</h1>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Digite seu email"
          required
          value={username} // Vincula o estado ao input
          onChange={(e) => setUsername(e.target.value)} // Atualiza o estado
        />
        <label>Senha:</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          required
          value={password} // Vincula o estado ao input
          onChange={(e) => setPassword(e.target.value)} // Atualiza o estado
        />
        <button type="submit">Entrar</button>
        {message && <p className="login-message">{message}</p>} {/* Mensagem de feedback */}
        <p className="login-message">
          Não tem uma conta? <Link to="/register" className="register-link">Registre-se!</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
