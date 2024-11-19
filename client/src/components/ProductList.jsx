import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductFiltering from "./ProductFiltering";

const ProductList = () => {
  const { products } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setFilteredProducts(products);

    const productCategories = products.map(
      (product) => product.ProductCategory
    );
    setCategories([...new Set(productCategories)]);
  }, [products]);

  const handleFilterChange = (category, priceRange, priceSort) => {
    let filtered = products;

    // Filtrere på kategori
    if (category) {
      filtered = filtered.filter(
        (product) => product.ProductCategory === category
      );
    }

    // Filtrere på pris
    filtered = filtered.filter(
      (product) =>
        product.Price >= priceRange[0] && product.Price <= priceRange[1]
    );

    // Sortere på pris lav/høy
    if (priceSort === "lowToHigh") {
      filtered = filtered.sort((a, b) => a.Price - b.Price);
    } else {
      filtered = filtered.sort((a, b) => b.Price - a.Price);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="flex">
      <ProductFiltering
        categories={categories}
        onFilterChange={handleFilterChange}
      />

      <div className="product-list p-4 ml-4 flex-grow">
        <h2 className="text-2xl font-semibold mb-6">Produkter</h2>
        <div className="grid grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2">
          {filteredProducts.map((product) => (
            <div
              key={product.ProductID}
              className="product-card p-4 border rounded-lg"
            >
              <img
                src={`./public/assets${product.ImageURL}`}
                alt={product.ProductName}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="font-semibold">{product.Name}</h3>
              <p>{product.Price} $</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
