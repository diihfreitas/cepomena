import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

const Header = () => {
  return (
    <header className='header'>
      <nav className='navbar'>
        <img src='src/assets/Telefone.png' alt="Logo do site" className="logo" />
        <div className='cepomena'>Carnes e Pescados Omena</div>
        <ul className='nav-links'>
          <Link to="/inicio">Início</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/cortes">Cortes</Link>
          <Link to="/contato">Contato</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;