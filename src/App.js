import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/modules/Footer";
import Navbar from "./components/modules/Navbar";
import Products from "./components/modules/Products";
import Dashboard from "./components/modules/Dashboard";
import Header from "./components/modules/Header";

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route exact path='/home' element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
