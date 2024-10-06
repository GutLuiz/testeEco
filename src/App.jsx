import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/register';
import Homepage from './Components/Homepage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Página de Login */}
        <Route path="/register" element={<Register />} /> {/* Página de Registro */}
        <Route path="/Homepage" element={<Homepage/>} />
      </Routes>
      </Router>
      
  );
};

export default App;
