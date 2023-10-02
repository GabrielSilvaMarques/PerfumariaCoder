import React from 'react';

function ItemListContainer({ greeting }) {
  return (
    <div className="container mt-5">
          <h2>Container</h2>
          <p>{greeting}</p>
    </div>
  );
}

export default ItemListContainer;