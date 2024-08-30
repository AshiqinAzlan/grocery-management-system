import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ShopListWrapper } from "./Components/ShoppingList/ShopListWrapper";


function App() {
  

  return (
    <Router>
        <Routes>
          <Route path="/" element={<ShopListWrapper />} />
        </Routes>
     
    </Router>
  );
}

export default App;
