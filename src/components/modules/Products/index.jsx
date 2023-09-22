import React, { useState } from 'react';
import { ProductList } from '../../../data'
import './index.scss'
import CategoryFilter from '../Filter';
import Card from '../../elements/Card';
import { CategoryList } from '../../../data';

const Products = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleFilterChange = (selectedCategories) => {
    setSelectedCategories(selectedCategories);
  };

  let filteredItems = ProductList;

  if (selectedCategories.length > 0) {
    filteredItems = ProductList.filter((item) =>
      selectedCategories.includes(item.category)
    );
  }
  return (
    <div className='product-container'>
      <div className="filter-container">
        <CategoryFilter categories={CategoryList} onFilterChange={handleFilterChange} />
      </div>
      <div className="products">
        {filteredItems.map((item)=>{
          return(
            item?.image && <div className='cards-container'>
              <Card img={item.image} title={item.name} subTitle = {item.category} height={'200px'} width={100} type='grey' className='categoryCard'/>
            </div> 
          )
        })}
      </div>
    </div>
  )
}

export default Products