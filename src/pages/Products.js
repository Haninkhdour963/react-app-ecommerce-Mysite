import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const dummyProducts = [
  { id: 1, name: 'Laptop', price: 999, description: 'High performance laptop with 16GB RAM and 512GB SSD.' },
  { id: 2, name: 'Headphones', price: 199, description: 'Noise-canceling over-ear headphones with great sound.' },
  { id: 3, name: 'Smartwatch', price: 299, description: 'Track your fitness and stay connected on the go.' },
];

function Products() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold">Products</h2>
      <div className="row">
        {dummyProducts.map((p) => (
          <div key={p.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text text-muted">{p.description}</p>
                <h6 className="mt-auto fw-bold text-primary">${p.price}</h6>
                <button className="btn btn-primary mt-3" onClick={() => addToCart(p)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
