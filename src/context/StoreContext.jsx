import { useState, createContext, useEffect } from 'react';
import { getAllItems } from '@/services/productServices';

const StoreContext = createContext();

function StoreProvider(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://ecommerce-json-lacm.onrender.com/items')
      .then((response) => response.json())
      .then((results) => {
        console.log(results);
        setProducts(results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const data = {
    products,
    loading,
    selectedProduct,
    setSelectedProduct,
    setSearch,
    search,
  };

  return (
    <StoreContext.Provider value={data}>{props.children}</StoreContext.Provider>
  );
}

export { StoreProvider, StoreContext };
