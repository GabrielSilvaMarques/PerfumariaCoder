import React, { useState, useEffect } from 'react';
import Item from './Item.js';
import ItemList from './ItemList.js';

function ItemListContainer (){
  const [itens, setItens] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItens = () => {
      setTimeout(() => {
        const data = [
          {
            id: 1,
            nome: 'Egeu',
            preco: 59.99,
            descricao: 'Perfume com fragrância floral.',
          },
          {
            id: 2,
            nome: 'Malbec',
            preco: 199.99,
            descricao: 'Perfume amadeirado.',
          },
          {
            id: 3,
            nome: 'Sabonete Perfumado',
            preco: 9.99,
            descricao: 'Sabonete com fragrância suave.',
          },
        ];

        setItens(data);
        setIsLoading(false);
      }, 2000);
    };

    fetchItens();
  }, []);

  return (
    <div className="item-list-container">
      <h2>Produtos Perfumaria</h2>
      {isLoading ? (
        <p>Carregando produtos...</p>
      ) : (
        <ItemList itens={itens} />
      )}
    </div>
  );
};

export default ItemListContainer;