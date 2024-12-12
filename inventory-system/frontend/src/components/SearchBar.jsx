import React, { useState } from 'react';

const SearchBar = ({ products, setFilteredProducts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter products based on the search term
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered); // Update filtered products state
  };

  return (
    <div className="text-xs w-full">
      <input
        type="text"
        className="w-full sm:w-1/2 lg:w-1/3 p-2 border rounded"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
