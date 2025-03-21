"use client";

import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, subtotal, shipping, total } =
    useCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <span>
                {item.title} - ${item.price} x {item.quantity}
              </span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
      <h3>Shipping: ${shipping.toFixed(2)}</h3>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
