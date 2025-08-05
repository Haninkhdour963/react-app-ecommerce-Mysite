import React from 'react';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <main className="container py-5">
      <Helmet>
        <title>ShopSmart | Home</title>
        <meta name="description" content="ShopSmart - Your smart destination for online shopping." />
      </Helmet>

      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">Welcome to ShopSmart</h1>
        <p className="lead text-secondary">Your one-stop shop for everything awesome.</p>
      </div>

      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h5 className="card-title">🚀 Fast Shipping</h5>
              <p className="card-text text-muted">Get your products delivered within 2 days, anywhere in the world!</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h5 className="card-title">🏆 Top Products</h5>
              <p className="card-text text-muted">Browse our top-selling and highest-rated items across categories.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h5 className="card-title">🔐 Secure Payments</h5>
              <p className="card-text text-muted">All transactions are encrypted and safe. Shop with confidence.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
