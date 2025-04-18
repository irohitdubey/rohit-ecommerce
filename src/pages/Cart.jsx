// src/pages/Cart.jsx
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../store/cartSlice";
import { saveForLater, removeFromSaved } from "../store/savedSlice";
import "./Cart.css";

function Cart() {
  const { items } = useSelector((state) => state.cart);
  const savedItems = useSelector((state) => state.saved.items);
  const dispatch = useDispatch();

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = totalPrice * 0.4;
  const platformFee = 3;
  const deliveryCharges = 0;
  const tax = totalPrice * 0.05;
  const finalTotal =
    totalPrice - discount + platformFee + deliveryCharges + tax;

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleSaveForLater = (item) => {
    dispatch(saveForLater(item));
    dispatch(removeFromCart(item.id));
  };

  const handleMoveToCart = (item) => {
    dispatch(removeFromSaved(item.id));
    dispatch({ type: "cart/addToCart", payload: item });
  };

  if (items.length === 0 && savedItems.length === 0) {
    return <p>Your cart is empty. Add items to proceed.</p>;
  }

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="cart-container">
        <div className="cart-items">
          <h2>From Saved Addresses</h2>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>
                  Seller: SuperComNet <span className="assured">Assured</span>
                </p>
                <p>
                  <span className="original-price">
                    ₹{(item.price * 2).toFixed(2)}
                  </span>{" "}
                  ₹{(item.price * item.quantity).toFixed(2)}{" "}
                  <span className="discount">40% OFF</span>{" "}
                  <span className="coupon">1 coupon applied</span>
                </p>
                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                </div>
                <div className="cart-actions">
                  <button
                    className="save-for-later"
                    onClick={() => handleSaveForLater(item)}
                  >
                    SAVE FOR LATER
                  </button>
                  <button
                    className="remove"
                    onClick={() => handleRemove(item.id)}
                  >
                    REMOVE
                  </button>
                </div>
              </div>
              <p className="delivery-info">
                Delivery by Mon Apr 14 |{" "}
                <span className="free-delivery">₹40 Free</span>
              </p>
            </div>
          ))}
          {savedItems.length > 0 && (
            <div className="saved-items">
              <h2>Saved for Later</h2>
              {savedItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>₹{item.price.toFixed(2)}</p>
                    <div className="cart-actions">
                      <button
                        className="move-to-cart"
                        onClick={() => handleMoveToCart(item)}
                      >
                        MOVE TO CART
                      </button>
                      <button
                        className="remove"
                        onClick={() => dispatch(removeFromSaved(item.id))}
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="price-summary">
          <h2>PRICE DETAILS</h2>
          <div className="price-details">
            <p>
              Price ({items.length} item{items.length !== 1 && "s"}){" "}
              <span>₹{totalPrice.toFixed(2)}</span>
            </p>
            <p>
              Discount <span>-₹{discount.toFixed(2)}</span>
            </p>
            <p>
              Coupons for you <span>-₹30</span>
            </p>
            <p>
              Platform Fee <span>₹{platformFee}</span>
            </p>
            <p>
              Delivery Charges <span>₹{deliveryCharges} Free</span>
            </p>
            <p>
              Tax (5%) <span>₹{tax.toFixed(2)}</span>
            </p>
            <hr />
            <p className="total-amount">
              Total Amount <span>₹{finalTotal.toFixed(2)}</span>
            </p>
            <p className="savings">
              You will save ₹{(discount + 30).toFixed(2)} on this order
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
