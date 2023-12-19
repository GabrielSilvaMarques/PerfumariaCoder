import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

const getItem = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const item = {
        id: 1,
        title: 'Perfume Floral',
        description: 'Perfume com fragrância floral.',
        price: 59.99,
        pictureUrl: 'url_da_imagem_1.jpg',
      };
      resolve(item);
    }, 2000);
  });
};

function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const data = await getItem();
        setItem(data);
        setIsLoading(false); 
      } catch (error) {
        console.error('Ocorreu um erro ao buscar o item:', error);
        setIsLoading(false);
      }
    };

    fetchItem();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Detalhes do Item</h2>
      {isLoading ? (
        <p>Carregando detalhes do item...</p>
      ) : (
        <ItemDetail item={item} />
      )}
    </div>
  );
}

export default ItemDetailContainer;