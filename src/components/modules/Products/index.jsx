import React, { useState } from 'react';
import { ProductList } from '../../../data'
import './index.scss'
import CategoryFilter from '../Filter';
import Card from '../../elements/Card';
import { CategoryList } from '../../../data';

const Products = () => {
  const [filteredCategory, setFilteredCategory] = useState('');

  const handleFilterChange = (category) => {
    setFilteredCategory(category);
  };
  
  const filteredItems = filteredCategory === ''
    ? ProductList
    : ProductList.filter((item) => item.category === filteredCategory);

  return (
    <div className='product-container'>
      <div className="filter-container">
        <h1>List of Items</h1>
        <CategoryFilter categories={CategoryList} onFilterChange={handleFilterChange} />
      </div>
      <div className="products">
        {filteredItems.map((item)=>{
          return(
            item?.image && <div className='cards-container'>
              <Card img={item.image} title={item.name} height={'200px'} width={100} type='grey' className='categoryCard'/>
            </div> 
          )
        })}
      </div>
    </div>
  )
}

export default Products