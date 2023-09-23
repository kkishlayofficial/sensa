import React, { useEffect, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import './index.scss';
import { BsChevronDown } from "react-icons/bs"

function CategoryFilter({ categories, onFilterChange }) {
  const location = useLocation();

  const queryParameters = useMemo(() => {
    const queryParams = new URLSearchParams(location.search);
    const params = {};
    for (const [key, value] of queryParams.entries()) {
      params[key] = value;
    }
    return params;
  }, [location.search]);

  const [selectedCategory, setSelectedCategory] = useState(queryParameters.category);
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    setSelectedCategory(queryParameters.category);
  }, [queryParameters]);

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
    onFilterChange(newCategory);
  };

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div>
    <div className="category-filter-mobile" onClick={toggleCategories} >
    <BsChevronDown/>
    <h2 className={`category-title-mobile ${showCategories ? 'mobile-only' : ''}`} >
      Categories
    </h2>
    <ul className={`category-list-mobile ${showCategories ? 'show' : ''}`}>
    <label key="All">
        <input
          type="radio"
          name="category"
          value="All"
          checked={selectedCategory === 'All'}mobile
          onChange={handleCategoryChange}
        />
        All
      </label>
      {categories.map((category) => (
        <label key={category}>
          <input
            type="radio"
            name="category"
            value={category}
            checked={selectedCategory === category}
            onChange={handleCategoryChange}
          />
          {category}
        </label>
      ))}
    </ul>
  </div>
    <div className="category-filter">
      <h2>Categories:</h2>
      <label key="All">
        <input
          type="radio"
          name="category"
          value="All"
          checked={selectedCategory === 'All'}
          onChange={handleCategoryChange}
        />
        All
      </label>
      {categories.map((category) => (
        <label key={category}>
          <input
            type="radio"
            name="category"
            value={category}
            checked={selectedCategory === category}
            onChange={handleCategoryChange}
          />
          {category}
        </label>
      ))}
    </div>
    </div>
  );
}

export default CategoryFilter;