import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login/Login";
import Inventory from "./Components/Inventory/Inventory";
import ForgotPassword from "./Components/Login/ForgotPassword";
import ResetPassword from "./Components/Login/ResetPassword";
import VerificationSuccess from "./Components/Login/VerificationSuccess";
import VerifyYourEmail from "./Components/Login/VerifyYourEmail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/verify-email" element={<VerifyYourEmail />} />
          <Route path="/verify-success" element={<VerificationSuccess />} />
          <Route path="/verify/:token" element={<VerificationSuccess />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset/:token" element={<ResetPassword />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
