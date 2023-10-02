
import React from 'react';
import './style.css';
import CartButton from './CardWidget';

function Header() {
  return (
    <header>
    <h1> Perfumaria Coder </h1>
      <nav className='menu'>
        <a href="#">Início</a>
        <a href="#">Produtos</a>
        <a href="#">Carrinho</a>
      </nav>
      <CartButton/>
      <div> <h2>(Icones de redes Sociais) </h2> </div>
    </header>
  );
}

export default Header;
