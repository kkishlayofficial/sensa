import React, { useState } from 'react';
import { ProductList } from '../../../data'
import './index.scss'
import CategoryFilter from '../Filter';
import Card from '../../elements/Card';

const Products = () => {
  const categories = ['Category 1', 'Category 2', 'Category 3']; // Replace with your categories
  const [filteredCategory, setFilteredCategory] = useState('');

  const handleFilterChange = (category) => {
    setFilteredCategory(category);
  };
  
  const filteredItems =
    filteredCategory === ''
      ? ProductList
      : ProductList.filter((item) => item.category === filteredCategory);

  const productList = ProductList;
  console.log(productList);
  return (
    <div className='product-container'>
     <div className="App">
      <h1>List of Items</h1>
      <CategoryFilter categories={categories} onFilterChange={handleFilterChange} />
      {/* <CardList data={filteredItems} /> */}
    </div>
    {/* <div className='cards-container'>
            <Card img={} title={item} height={'200px'} width={'100%'} type='grey' className='categoryCard'/>
    </div> */}
    {ProductList.map((item)=>{
      return(
          <div className='cards-container'>
            <Card img={item.image} title={item.name} height={'200px'} width={'100%'} type='grey' className='categoryCard'/>
      </div> 
      )
    })}
    </div>
  )
}

export default Products