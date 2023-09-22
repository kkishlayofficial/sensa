import React, { useEffect, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

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

  useEffect(() => {
    setSelectedCategory(queryParameters.category);
  }, [queryParameters]);

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
    onFilterChange(newCategory);
  };

  return (
    <div className="category-filter">
      <h2>Filter by Category:</h2>
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
  );
}

export default CategoryFilter;