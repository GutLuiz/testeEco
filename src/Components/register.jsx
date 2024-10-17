import React, { useState } from 'react'; // Importa useState
import { Link, useNavigate } from 'react-router-dom'; // Importa Link e useNavigate
import { registerUser } from '../services/register-service'; // Importa a função de registro
import './Register.css'; // Importa o CSS


const Register = () => {
  const [email, setEmail] = useState(""); // Estado para o email
  const [senha, setSenha] = useState(""); // Estado para a senha
  const [message, setMessage] = useState(""); // Estado para mensagens de feedback
  const navigate = useNavigate(); // Hook para navegação

  const handleRegister = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    const userData = {
      email: email,
      senha: senha,
    };

    try {
      const response = await loginUser(userData); 

      if (response != null) {
        console.log("Registro bem-sucedido:", response);

        setMessage(`Bem-vindo, ${username}`);
        
        // Salva o e-mail do usuário no localStorage
        localStorage.setItem('userName', username);

        navigate('/'); // Redireciona para a homepage após login
      }
    } catch (error) {
      console.error("Erro no registro:", error);
      setMessage("Credenciais inválidas!"); 
    }
  };

  return (
    <div className="register-body"> {/* Usando a nova classe register-body */}
      <div className="register-container">
        <div className="register-left">
          <h2>Já tem uma conta?</h2>
          <p>Acesse sua conta agora</p>
          <Link to="/login">
            <button className="login-btn">Entrar</button> {/* Usar Link para redirecionar */}
          </Link>
        </div>
        <div className="register-right">
          <h2>Crie sua conta</h2>
          <form className="register-form" onSubmit={handleRegister}> {/* Adiciona o onSubmit */}
            <div className="form-group">
              <input 
                type="email" 
                placeholder="E-mail"
                value={email} // Vincula o input ao estado de email
                onChange={(e) => setEmail(e.target.value)} // Atualiza o estado ao digitar
              />
            </div>
            <div className="form-group">
              <input 
                type="password" 
                placeholder="Senha"
                value={senha} // Vincula o input ao estado de senha
                onChange={(e) => setSenha(e.target.value)} // Atualiza o estado ao digitar
              />
            </div>
            <button type="submit" className="register-btn">Cadastrar</button> {/* Botão de submit */}
          </form>
          {message && <p>{message}</p>} {/* Exibe mensagens de feedback */}
        </div>
      </div>
    </div>
  );
};

export default Register;
