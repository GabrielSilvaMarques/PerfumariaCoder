import React from 'react';

const ItemDetail = ({ item }) => {
  return (
    <div className="item-detail">
      <h3>{item.title}</h3>
      <p>Descrição: {item.description}</p>
      <p>Preço: R$ {item.price.toFixed(2)}</p>
      <img src={item.pictureUrl} alt={item.title} />
    </div>
  );
};

export default ItemDetail;
