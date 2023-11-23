import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Products.jsx";
import Homepage from "./Homepage.jsx";

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Homepage />} />
            <Route path="/products" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default App;