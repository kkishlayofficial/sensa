import React from 'react'
import { ProductList } from '../../../data'
import './index.scss'

function CardList() {
  return (
    <div className="card-list">
      {ProductList.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.name} className="card-image" />
          <div className="card-content">
            <h2 className="card-title">{item.name}</h2>
            <p className="card-description">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const Products = () => {
  const productList = ProductList;
  console.log(productList);
  return (
    <div className='container'>
      <div>
        <h1>filter</h1>
      </div>
    <div className='cards-container'>
            <CardList></CardList>
    </div>
    </div>
  )
}

export default Products