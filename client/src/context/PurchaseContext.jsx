import { createContext, useState, useEffect } from "react";

const PurchaseContext = createContext();

const PurchaseContextProvider = (props) => {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const response = await fetch("http://localhost:4000/purchases");
        if (!response.ok) throw new Error("Failed to fetch purchases");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPurchases();
  }, []);

  return (
    <PurchaseContext.Provider value={{ purchases, loading, error }}>
      {props.children}
    </PurchaseContext.Provider>
  );
};

export default PurchaseContextProvider;
