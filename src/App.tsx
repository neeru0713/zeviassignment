import React from "react";
import "./assets/styles/App.scss";
import LandingPage from "./components/LandingPage";
import ProductsPage from "./components/ProductsPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="app">
     
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
     
    </div>
  );
};

export default App;
