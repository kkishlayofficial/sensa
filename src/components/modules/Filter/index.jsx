import React, { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import "./index.scss";
import { BsChevronDown } from "react-icons/bs";

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

  const [selectedCategory, setSelectedCategory] = useState(
    queryParameters.category
  );
  const [selectedCategoryMobile, setSelectedCategoryMobile] = useState(
    queryParameters.category
  );
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    setSelectedCategory(queryParameters.category);
    setSelectedCategoryMobile(queryParameters.category);
  }, [queryParameters]);

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
    setSelectedCategoryMobile(newCategory);
    onFilterChange(newCategory);
  };

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div className='category-filter-container'>
      <div
        className={`category-filter-mobile ${showCategories ? "expanded" : ""}`}
      >
        <div className='heading' onClick={toggleCategories}>
          <h2 className={`category-title-mobile`}>Categories</h2>
          <BsChevronDown
            size={30}
            className={`rotate-image ${showCategories ? "up" : ""}`}
          />
        </div>

        <div className='filterList'>
          <label key='All' id='mobile'>
            <input
              type='radio'
              name='category mobile'
              value='All'
              checked={selectedCategoryMobile === "All"}
              onChange={handleCategoryChange}
            />
            All
          </label>
          {categories.map((category) => (
            <label key={category} id='mobile'>
              <input
                type='radio'
                name='category mobile'
                value={category.name}
                checked={selectedCategoryMobile === category.name}
                onChange={handleCategoryChange}
              />
              {category.name}
            </label>
          ))}
        </div>
      </div>
      <div className='category-filter'>
        <h2>Categories:</h2>
        <label key='All'>
          <input
            type='radio'
            name='category'
            value='All'
            checked={selectedCategory === "All"}
            onChange={handleCategoryChange}
          />
          All
        </label>
        {categories.map((category) => (
          <label key={category}>
            <input
              type='radio'
              name='category'
              value={category.name}
              checked={selectedCategory === category.name}
              onChange={handleCategoryChange}
            />
            {category.name}
          </label>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
