import React, { useEffect, useState, useMemo } from 'react';
import { ProductList } from '../../../data'
import './index.scss'
import CategoryFilter from '../Filter';
import Card from '../../elements/Card';
import { CategoryList } from '../../../data';
import { useLocation } from 'react-router-dom';

const Products = () => {
  const location = useLocation();

  const queryParameters = useMemo(() => {
    const queryParams = new URLSearchParams(location.search);
    const params = {};
    for (const [key, value] of queryParams.entries()) {
      params[key] = value;
    }
    return params;
  }, [location.search]);

  const [filteredCategory, setFilteredCategory] = useState(queryParameters.category);

  useEffect(() => {
    setFilteredCategory(queryParameters.category);
  }, [queryParameters]);

  const handleFilterChange = (category) => {
    setFilteredCategory(category);
    updateCategory(category);
  };

  const filteredItems = filteredCategory === 'All'
    ? ProductList
    : ProductList.filter((item) => item.category === filteredCategory);

  const updateCategory = (newCategory) => {
    queryParameters.category = newCategory;
    const updatedUrl = `${location.pathname}?${new URLSearchParams(queryParameters).toString()}`;
    window.history.replaceState({}, '', updatedUrl);
  };

  return (
    <div className='product-container'>
      <div className="filter-container">
        <h1>List of Items</h1>
        <CategoryFilter categories={CategoryList} onFilterChange={handleFilterChange} />
      </div>
      <div className="products">
        {filteredItems.map((item) => {
          return (
            item?.image && <div className='cards-container' key={item.id}>
              <Card img={item.image} title={item.name} height={'200px'} width={100} type='grey' className='categoryCard' />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Products;