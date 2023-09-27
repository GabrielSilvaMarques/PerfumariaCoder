
import React from 'react';
import './style.css';

function Header() {
  return (
    <header>
    <h1> Espaço para a Logo </h1>
      <nav className='menu'>
        <a href="#">Início</a>
        <a href="#">Produtos</a>
        <a href="#">Carrinho</a>
      </nav>
      <div> <h2>(Icones de redes Sociais) </h2> </div>
    </header>
  );
}

export default Header;
