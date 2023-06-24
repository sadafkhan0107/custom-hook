// Write a custom Hook called "useFetch" that accepts
//  a URL and returns an object with the following
//  properties:

// "data": the fetched data, initially set to null
// "isLoading": a boolean that indicates whether
// the data is currently being fetched, initially
// set to true
// https://dummyjson.com/products

import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
export default function App() {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const useFetch = () => {
    useEffect(() => {
      (async () => {
        try {
          const {
            data: { products }
          } = await axios.get("https://dummyjson.com/products");
          setProducts(products);
          setIsLoading(false);
        } catch (err) {
          console.log(err);
        }
      })();
    }, []);
  };

  useFetch();
  console.log(products);
  return (
    <div className="App">
      {isLoading ? <h1> Is Loading</h1> : <h1>Products loaded</h1>}
    </div>
  );
}
