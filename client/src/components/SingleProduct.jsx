import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import Modal from "./Modal";

const SingleProduct = () => {
  const { products, loading, error } = useContext(ProductContext);
  const { ProductID } = useParams();
  const [product, setProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    console.log("Produkt lagt til i handlekurven:", product);
    setShowModal(true);
  };

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find(
        (prod) => prod.ProductID === parseInt(ProductID)
      );
      setProduct(foundProduct);
    }
  }, [product, ProductID]);

  if (loading) {
    return <p>Laster produktdata...</p>;
  }

  if (error) {
    return <p>Feil: {error}</p>;
  }

  if (!product) {
    return <p>Produktet finnes ikke.</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 relative">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
      >
        Tilbake
      </button>
      <div className="bg-white p-8 rounded-lg w-full max-w-4xl shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <img
              src={`/assets${product.ImageURL}`}
              alt={product.ProductName}
              className="w-full h-auto max-h-96 object-cover rounded-md shadow-md"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4">{product.Name}</h1>
            <p className="text-lg text-gray-600 mb-6">{product.Description}</p>

            <div className="mb-4">
              <p className="text-2xl font-semibold text-green-600">
                Pris: {product.Price} $
              </p>
            </div>

            <div className="mb-4">
              {product.Stock > 0 ? (
                <p className="text-lg font-medium text-gray-700">
                  Antall på lager:{" "}
                  <span className="text-green-600">{product.Stock}</span>
                </p>
              ) : (
                <p className="text-lg font-medium text-red-600">Utsolgt</p>
              )}
            </div>

            <div className="mb-4">
              <p className="text-lg  font-medium text-gray-700">
                Leveringstid: <span className="text-blue-600">5-7 dager</span>
              </p>
            </div>

            <div className="text-center md:text-left">
              <button
                onClick={handleAddToCart}
                className={`px-6 py-3 text-white font-semibold rounded-md ${
                  product.Stock > 0
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={product.Stock <= 0}
              >
                {product.Stock > 0 ? "Kjøp nå" : "Ikke tilgjengelig"}
              </button>
            </div>
          </div>
        </div>

        {showModal && (
          <Modal
            title="Produkt lagt til i handlekurv"
            message="Ønsker du å fortsette å handle, eller gå til handlekurven?"
            actions={[
              {
                label: "Fortsett å handle",
                click: () => setShowModal(false),
                className: "bg-gray-200 text-gray-800 hover:bg-gray-400",
              },
              {
                label: "Gå til handlekurv",
                click: () => navigate("/cart"),
                className: "bg-gray-200 text-gray-800 hover:bg-gray-400",
              },
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
