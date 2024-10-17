import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/register';
import Homepage from './Components/Homepage';
import Agendamento from './Components/Agendamento';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Página de Login */}
        <Route path="/register" element={<Register />} /> {/* Página de Registro */}
        <Route path="/login" element={<Login/>} />
        <Route path="/Agendamento" element={<Agendamento/>} />
      
      </Routes>
      </Router>
      
  );
};

export default App;
