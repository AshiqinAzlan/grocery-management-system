// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from "./Components/LandingPage";
// import Login from "./Components/Login/Login";
// import Inventory from "./Components/Inventory/Inventory";
// import ForgotPassword from "./Components/Login/ForgotPassword";
// import ResetPassword from "./Components/Login/ResetPassword";
// import VerificationSuccess from "./Components/Login/VerificationSuccess";
// import VerifyYourEmail from "./Components/Login/VerifyYourEmail";
// import Sidebar from "./Components/Sidebar/Sidebar";
// import SidebarWrapper from "./Components/Sidebar/SidebarWrapper";
// import PriceComparison from "./Components/PriceComparison/PriceComparison";

// function App() {
//   return (
//     <>
//       <Router>
//         <div className ="App">
//           <Sidebar />
//           <div className="content">
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/verify-email" element={<VerifyYourEmail />} />
//           <Route path="/verify-success" element={<VerificationSuccess />} />
//           <Route path="/verify/:token" element={<VerificationSuccess />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/reset/:token" element={<ResetPassword />} />
//           <Route path="/inventory" element={<Inventory />} />
//         </Routes>
//         </div>
//         </div>
//       </Router>
//     </>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import LandingPage from './Components/LandingPage';
import Login from './Components/Login/Login';
import Inventory from './Components/Inventory/Inventory';
import ForgotPassword from './Components/Login/ForgotPassword';
import ResetPassword from './Components/Login/ResetPassword';
import VerificationSuccess from './Components/Login/VerificationSuccess';
import VerifyYourEmail from './Components/Login/VerifyYourEmail';
import PriceComparison from './Components/PriceComparison/PriceComparison';
import './Styles/Sidebar.css'; // Custom CSS

function App() {
  return (
    <Router>
      <div className="App-sidebar">
        <Sidebar />
        <div className="content-sidebar">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/verify-email" element={<VerifyYourEmail />} />
            <Route path="/verify-success" element={<VerificationSuccess />} />
            <Route path="/verify/:token" element={<VerificationSuccess />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset/:token" element={<ResetPassword />} />
            <Route path="/inventory" element={<Inventory />} />
            {/* <Route path="/home" element={<HomePage />} /> */}
            {/* <Route path="/inventory-page" element={<InventoryPage />} /> */}
            <Route path="/price-comparison" element={<PriceComparison />} />
            {/* Add more routes here as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
