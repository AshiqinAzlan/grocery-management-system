import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./Components/Login/Login";
import Inventory from "./Components/Inventory/Inventory";
// import Header from "./Components/LandingPage/Header";
// import ForgotPassword from "./Components/ForgotPassword";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Router>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/inventory" element={<Inventory />} />
          {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
