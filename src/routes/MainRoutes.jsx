import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Import Routes, Route, and Navigate
import { useSelector } from 'react-redux'; // Import useSelector
import Navbar from '../components/Navbar'; // Assuming your Navbar is in a separate file
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Product from '../pages/Product';
import ProductList from '../pages/ProductList';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import Success from '../pages/Success'; // Import Success component if it exists
import '../styles.css';

const Root = () => {
  const user = useSelector((state) => state.user.currentUser);
  console.log('Rendering Root component');

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/success"
          element={user ? <Success /> : <Navigate to="/" />} // Redirect if user not logged in
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />} // Redirect if user logged in
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />} // Redirect if user logged in
        />
      </Routes>
      <Footer />
    </>
  );
};

export default Root;
