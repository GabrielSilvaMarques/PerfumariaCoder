
import React from 'react';
import Header from './header/Header.js';
import ItemListContainer from './ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <ItemListContainer greeting="Bem-vindo à nossa Perfumaria!" />
    </div>
  );
}

export default App;


