import React from "react"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/register";
import Homepage from "./Components/Homepage";
import Agendamento from "./Components/Agendamento"; // Componente existente
import Scheduling from "./Components/Scheduling"; // Componente Scheduling
import Sucesso from "./Components/Sucesso"; // Componente Sucesso (sem o /Sucesso/Sucesso)

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Página inicial */}
        <Route path="/register" element={<Register />} /> {/* Página de Registro */}
        <Route path="/login" element={<Login />} /> {/* Página de Login */}
        <Route path="/agendamento" element={<Agendamento />} /> {/* Componente Agendamento */}
        <Route path="/scheduling" element={<Scheduling />} /> {/* Componente Scheduling */}
        <Route path="/sucesso" element={<Sucesso />} /> {/* Componente Sucesso */}
      </Routes>
    </Router>
  );
};

export default App;
