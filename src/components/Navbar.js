import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.body.className = darkMode ? 'bg-dark text-light' : 'bg-light text-dark';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-white'} shadow-sm sticky-top`}>
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/">ShopSmart</Link>
        <div className="d-flex align-items-center">
          <Link className="btn btn-outline-primary me-2" to="/products">Products</Link>
          <Link className="btn btn-outline-secondary me-2" to="/cart">
            🛒 <span className="badge bg-danger">{cart.length}</span>
          </Link>
          {user ? (
            <>
              <span className="me-2 text-muted">Hi, {user}</span>
              <button className="btn btn-outline-danger btn-sm" onClick={logout}>Logout</button>
            </>
          ) : (
            <Link className="btn btn-outline-success me-2" to="/login">Login</Link>
          )}
          <button
            className="btn btn-sm btn-outline-dark"
            onClick={() => setDarkMode((prev) => !prev)}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
