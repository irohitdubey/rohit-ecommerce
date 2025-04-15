import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";
import Axios from "axios";

function Checkout() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderData = { userId: user.id, items, name };
      await Axios.post("https://api.example.com/orders", orderData);
      dispatch(clearCart());
    } catch (error) {
      console.error("Order placement failed:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Place Order</button>
    </form>
  );
}
export default Checkout;
