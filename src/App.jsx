import Home from "./home/Home";
import Topbar from "./topbar/Topbar";
import { Routes, Route, Link } from "react-router-dom";
import CreateProduct from "./createProduct/CreateProduct";
import React from 'react';
import ProductDetail from "./product/ProductDetail";

const App = () => {
  return (
    <div className="bg-slate-100 h-full mx-[auto] flex w-full max-w-[114.4rem] flex flex-col">
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/product-details/:id" element={<ProductDetail/>} />
      </Routes>
    </div>
  );
};

export default App;
