import React, { useState } from "react";

const ProductFiltering = ({ categories, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [priceSort, setPriceSort] = useState("-");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onFilterChange(e.target.value, priceRange, priceSort);
  };

  const handlePriceChange = (e) => {
    if (e.target.value === "") {
      setPriceRange([]);
    } else {
      const [minPrice, maxPrice] = e.target.value.split(",").map(Number);
      setPriceRange([minPrice, maxPrice]);
      onFilterChange(selectedCategory, [minPrice, maxPrice], priceSort);
    }
  };

  const handlePriceSortChange = (e) => {
    const sortOrder = e.target.value;
    setPriceSort(sortOrder);
    onFilterChange(selectedCategory, priceRange, sortOrder);
  };

  return (
    <div className="sidebar p-8 bg-gray-200">
      <h3 className="text-xl font-semibold mb-4">Filter</h3>

      <div className="mb-4">
        <h4 className="font-medium">Kategori</h4>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="border rounded p-2 w-full mt-2"
        >
          <option value="">Alle Kategorieer</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <h4 className="font-medium">Pris</h4>
        <select
          onChange={handlePriceChange}
          className="border rounded p-2 w-full mt-2"
        >
          <option value="">-</option>
          <option value="0,1000">0 - 1000</option>
          <option value="1000, 5000">1000 - 5000</option>
          <option value="5000,10000">5000- 10000</option>
          <option value="10000,20000">10000 - 20000</option>
        </select>
      </div>

      <div className="mb-4">
        <h4 className="font-medium">Lav/Høy</h4>
        <select
          value={priceSort}
          onChange={handlePriceSortChange}
          className="border rounded p-2 w-full mt-2"
        >
          <option value="">-</option>
          <option value="lowToHigh">Lav til Høy</option>
          <option value="highToLow">Høy til Lav</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFiltering;
