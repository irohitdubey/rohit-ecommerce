// src/components/ProductCard.jsx
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <div className="image-wrapper">
          <img src={product.image} alt={product.name} />
        </div>
        <h3>{product.name}</h3>
      </Link>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
