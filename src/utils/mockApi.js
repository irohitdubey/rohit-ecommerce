// src/utils/mockApi.js
import products from "../data/products.json";

// Simulate async API calls with Promises
export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500); // Fake delay
  });
};

export const fetchProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === parseInt(id));
      resolve(product || null);
    }, 500);
  });
};

export const simulateLogin = (email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, email, name: "Test User" });
    }, 500);
  });
};

export const simulateCheckout = (cartItems) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        orderId: Math.random().toString(36).substr(2, 9),
      });
    }, 1000);
  });
};
