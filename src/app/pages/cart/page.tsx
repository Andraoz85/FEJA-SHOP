"use client";

import { CartProvider, useCart } from "@/context/CartContext";

export default function Cart() {
  return (
    <CartProvider>
      <CartContent />
    </CartProvider>
  );
}

function CartContent() {
  const { cart, subtotal, shipping, total } = useCart();

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity} = $
                {(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <hr />
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Shipping: ${shipping.toFixed(2)}</p>
          <p>
            <strong>Total: ${total.toFixed(2)}</strong>
          </p>
        </>
      )}
    </div>
  );
}
