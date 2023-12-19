import React from 'react';
import Item from './Item';

function ItemList ({ itens }){
  return (
    <div className="lista-de-itens">
      {itens.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

const promisseItemList =new Promise((resolve, reject) => {
  setTimeout (()=> {
    resolve(ItemList)
  }, 2000)
})

promisseItemList.then ((response)=> {
  console.log(response)
})

export default ItemList;
