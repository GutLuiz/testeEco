import React, { useState } from 'react'; // Importa useState
import { Link } from 'react-router-dom'; // Importa Link do react-router-dom
import { registerUser } from '../services/register-service'; // Importa a função de registro
import './Register.css'; // Importa o CSS
import backgroundImage from '../assets/fotoverde.jpg'; // Importa a imagem
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [email, setEmail] = useState(""); // Estado para o email
  const [senha, setSenha] = useState(""); // Estado para a senha
  const [message, setMessage] = useState(""); // Estado para mensagens de feedback
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    const userData = {
        email: email,
        senha: senha,
    };

    try {
        const response = await registerUser(userData);
        if (response != null) {
            console.log("Usuário registrado com sucesso:", response);
            setMessage("Usuário registrado com sucesso!");

            // Redireciona para a homepage após o sucesso no registro
            navigate('/homepage'); 
        } 
        setEmail(""); // Limpa o campo de email
        setSenha(""); // Limpa o campo de senha
    } catch (error) {
        console.error("Erro ao registrar usuário:", error);
        setMessage("Erro ao registrar usuário: "); // Mensagem de erro
    }
};


  return (
    <div className="containereg" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <form className="form" onSubmit={handleRegister}> {/* Adicione onSubmit */}
        <h1>Faça seu registro</h1>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Digite seu email"
          required
          value={email} // Vincula o estado ao input
          onChange={(e) => setEmail(e.target.value)} // Atualiza o estado
        />
        <label>Senha:</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          required
          value={senha} // Vincula o estado ao input
          onChange={(e) => setSenha(e.target.value)} // Atualiza o estado
        />
        <button type="submit">Registrar</button>
        {message && <p className="register-message">{message}</p>} {/* Mensagem de feedback */}
        <p className="register-message">
          Já tem uma conta? <Link to="/" className="login-link">Faça login!</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
