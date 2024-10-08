import React, { useState } from 'react';
import { agendarUser } from '../services/agendamento-service';
import './Agendamento.css';

const AgendamentoForm = () => {
  const [nome, setNome] = useState('');
  const [modelo, setModelo] = useState('');
  const [placa, setPlaca] = useState('');
  const [dataHora, setDataHora] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { nome, modelo, placa, data_hora: dataHora };

    try {
      const result = await agendarUser(userData);
      console.log('Agendamento realizado com sucesso:', result);
    } catch (error) {
      console.error('Erro ao agendar:', error);
    }
  };

  return (
    <div className="agendamento-container">
      <form className="agendamento-form" onSubmit={handleSubmit}>
        <h1 className="agendamento-title">Agendamento</h1>
        <label className="agendamento-label">Nome</label>
        <input className="agendamento-input" type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        
        <label className="agendamento-label">Modelo</label>
        <input className="agendamento-input" type="text" placeholder="Modelo" value={modelo} onChange={(e) => setModelo(e.target.value)} />
        
        <label className="agendamento-label">Placa</label>
        <input className="agendamento-input" type="text" placeholder="Placa" value={placa} onChange={(e) => setPlaca(e.target.value)} />
        
        <label className="agendamento-label">Data e Hora</label>
        <input className="agendamento-input" type="datetime-local" value={dataHora} onChange={(e) => setDataHora(e.target.value)} />
        
        <button className="agendamento-button" type="submit">Agendar</button>
      </form>
    </div>
  );
};

export default AgendamentoForm;
