
import React from "react";


import './Styles/Sidebar.css';
import './Styles/MainContent.css';
import MainContent from "./Components/MainContent";
import Sidebar from "./Components/Sidebar";


const App = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar style={{ flex: "0 0 250px" }} />
      <MainContent style={{ flex: 1, padding: "20px" }} />
    </div>
  );
};

export default App;