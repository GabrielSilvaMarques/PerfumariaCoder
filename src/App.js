
import React from 'react';
import Header from './header/Header.js';
import ItemListContainer from './ItemListContainer.js';
import ItemCount from './ItenCount.js';

function App() {
  return (
    <div className="App">
      <Header />
      <ItemListContainer greeting="Bem-vindo à nossa Perfumaria!" />
      <ItemCount />
    </div>
  );
}

export default App;


