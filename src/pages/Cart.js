import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="alert alert-info">Your cart is empty.</div>
      ) : (
        <>
          <ul className="list-group mb-4">
            {cart.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.name}</strong> <br />
                  <small className="text-muted">${item.price}</small>
                </div>
                <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h4 className="fw-bold">Total: ${total.toFixed(2)}</h4>
          <button className="btn btn-success mt-3">Proceed to Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart;
