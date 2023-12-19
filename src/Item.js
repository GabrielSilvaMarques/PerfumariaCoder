import React from 'react';

function Item ({ item }) {
  return (
    <div className="item">
      <h3>{item.nome}</h3>
      <p>Preço: R$ {item.preco.toFixed(2)}</p>
      <p>Descrição: {item.descricao}</p>
    </div>
  );
};

export default Item;
