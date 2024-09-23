import React from "react";
import {Routes, Route } from 'react-router-dom';
import Header from "./components/Header/index";
import './App.css';
import Home from "./modules/Home/Home";
import Footer from "./components/Footers/index";
import Product from "./modules/Product/index";
import Products from "./modules/Products";
import CategoryProduct from "./modules/CategoryProducts";
import Cart from "./modules/Cart";


function App() {
  return (
   
      <div  style={{ backgroundColor: 'whitesmoke', fontFamily: "'Poppins', sans-serif" }}>
        <Header/>
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/products/:id" element={<Product/>} />
          <Route path="/categories/:name" element={<CategoryProduct/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={"Not found"} /> 
        </Routes>
      
        <Footer/>
      </div>

  )
}

export default App;