// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/userSlice";
import "./Navbar.css";

function Navbar() {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { items } = useSelector((state) => state.cart); // Get cart items
  const dispatch = useDispatch();

  // Calculate total quantity of items in the cart
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">E-commerce Store</Link>
      </div>
      <div className="navbar-right">
        <Link to="/products">Products</Link>
        <Link to="/cart" className="cart-link">
          <i className="fas fa-shopping-cart"></i>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
