// src/pages/Home.jsx
import { useState, useEffect } from "react";
import { fetchProducts } from "../utils/mockApi"; // Use mock API instead of Axios
import ProductCard from "../components/ProductCard";
import "./Home.css";

function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const data = await fetchProducts(); // Fetch from mock API
        setFeaturedProducts(data); // Set all products as "featured" for simplicity
        setLoading(false);
      } catch (error) {
        console.error("Error fetching featured products:", error);
        setLoading(false);
      }
    };
    fetchFeaturedProducts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="home">
      <h1>Welcome to Our E-commerce Store</h1>
      <div className="featured-products">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
