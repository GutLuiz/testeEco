import React, { useState } from "react";
import { agendarUser } from "../services/agendamento-service"; // Importa o serviço
import "./Scheduling.css"; // Arquivo CSS

const Scheduling = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    modelo: "",
    placa: "",
    dataHora: "",
  });

  const [message, setMessage] = useState(""); // Para feedback ao usuário
  const [error, setError] = useState(""); // Para mensagens de erro

  // Função para formatar a data no formato 'yyyy-MM-dd HH:mm:ss'
  const formatDate = (date) => {
    if (date) {
      const d = new Date(date);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      const hours = String(d.getHours()).padStart(2, '0');
      const minutes = String(d.getMinutes()).padStart(2, '0');
      const seconds = String(d.getSeconds()).padStart(2, '0');
      
      // Retorna a data no formato 'yyyy-MM-dd HH:mm:ss'
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
    return date;
  };

  // Atualiza os valores do formulário
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Envia os dados para a API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    // Formata a data antes de enviar
    const formattedData = { 
      ...formData, 
      dataHora: formatDate(formData.dataHora) // Formatação aqui
    };

    try {
      const response = await agendarUser(formattedData);
      setMessage("Agendamento realizado com sucesso!");
      console.log("Resposta da API:", response);
    } catch (err) {
      setError("Erro ao realizar agendamento. Tente novamente.");
      console.error(err);
    }
  };

  return (
    <div className="scheduling-container">
      <div className="form-section">
        <h2>Preencha seus dados</h2>
        <p>Quanto mais detalhes você fornecer, melhor será o serviço que podemos oferecer</p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome *</label>
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Telefone</label>
            <input
              type="text"
              name="telefone"
              placeholder="Telefone"
              value={formData.telefone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Modelo do Carro *</label>
            <input
              type="text"
              name="modelo"
              placeholder="Modelo do Carro"
              value={formData.modelo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Placa do Carro *</label>
            <input
              type="text"
              name="placa"
              placeholder="Placa do Carro"
              value={formData.placa}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Data e Hora *</label>
            <input
              type="datetime-local"
              name="dataHora"
              value={formData.dataHora}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Agendar Agora</button>
        </form>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
      <div className="summary-section">
        <h2>Resumo da Reserva</h2>
        <h3>Selecione a data, hora e unidade para realizar o seu agendamento</h3>
        <div className="form-group">
          <label>Selecione uma Unidade</label>
          <select>
            <option value="opcao1">Estação das Docas</option>
            <option value="opcao2">Av. Dr. Freitas</option>
            <option value="opcao3">Av. Centenário</option>
            <option value="opcao4">Passagem Santa Inês</option>
            <option value="opcao5">BR 316</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Scheduling;
