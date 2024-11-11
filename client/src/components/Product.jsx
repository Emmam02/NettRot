import React, { useEffect, useState } from "react";

function Product() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch data: ${response.status} ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => setError(error));
  }, []);

  return (
    <div className="mt-10">
      <ul className="grid grid-cols-4 gap-4 cursor-pointer">
        {products.map((product) => (
          <li
            key={product.ProductID}
            className="flex flex-col items-center bg-white p-4 border rounded-md"
          >
            <div className="hover:scale-110 transition ease-in-out items-center">
              <h3>{product.Name}</h3>
              <img
                src={`/assets${product.ImageURL}`}
                alt={product.Name}
                className="w-[300px] h-auto object-cover"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
