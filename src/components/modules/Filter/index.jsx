import React, { useState } from 'react';

function CategoryFilter({ categories, onFilterChange }) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    let updatedCategories;
    
    if (selectedCategories.includes(category)) {
      updatedCategories = selectedCategories.filter((c) => c !== category);
    } else {
      updatedCategories = [...selectedCategories, category];
    }

    setSelectedCategories(updatedCategories);
    onFilterChange(updatedCategories); // Notify the parent component of the selected categories
  };

  return (
    <div className="category-filter">
      <h2>Filter by Category:</h2>
      {categories.map((category) => (
        <label key={category}>
          <input
            type="checkbox"
            value={category}
            checked={selectedCategories.includes(category)}
            onChange={() => handleCategoryChange(category)}
          />
          {category}
        </label>
      ))}
    </div>
  );
}

export default CategoryFilter;
