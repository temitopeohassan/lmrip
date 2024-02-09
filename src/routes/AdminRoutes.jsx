import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";
import "../App.css";
import Home from "../pages/home/Home";
import UserList from "../pages/userList/UserList";
import User from "../pages/user/User";
import NewUser from "../pages/newUser/NewUser";
import ProductList from "../pages/productList/ProductList";
import Product from "../pages/product/Product";
import Login from "../pages/login/Login";
import { useSelector } from "react-redux";

const AdminRoutes = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const isAdmin = currentUser?.isAdmin || false;

  return (
    <Routes>
      {currentUser ? (
        <>
          <Route path="/" element={<Navigate to="home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          {isAdmin && (
            <>
              <Topbar />
              <div className="container">
                <Sidebar />
              </div>
            </>
          )}
        </>
      ) : (
        <Route path="*" element={<Login />} />
      )}
    </Routes>
  );
};

export default AdminRoutes;
