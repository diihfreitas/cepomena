import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Sobre from './Sobre';

const Inicio = () => <div><h1>Bem-vindo à página Início</h1></div>;
const Cortes = () => <div><h1>Nossos Cortes</h1></div>;
const Contato = () => <div><h1>Entre em Contato</h1></div>;

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cortes" element={<Cortes />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
};

export default App;
