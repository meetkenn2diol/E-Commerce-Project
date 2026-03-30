import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";
import "./home-page.css";

function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`api/products`).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <title>E-Commerce</title>

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products}/>
      </div>
    </>
  );
}

export default HomePage;
