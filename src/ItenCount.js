import React, { useState } from 'react';

const ItemCount = ({ estoque , Adicionar}) => {
  const [quantidade, setQuantidade] = useState(1);

  const aumentarQuantidade = () => {
    if (quantidade < estoque) {
      setQuantidade(quantidade + 1);
    }
  };

  const diminuirQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  const naoAdicionar = () => {
    if (quantidade <= estoque) {
      Adicionar(quantidade);
    }
  };

  return (
    <div>
      <button onClick={diminuirQuantidade}>-</button>
      <span>{quantidade}</span>
      <button onClick={aumentarQuantidade}>+</button>
      <button onClick={naoAdicionar} disabled={quantidade > estoque}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ItemCount;
