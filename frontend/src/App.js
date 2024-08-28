

import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import './Styles/Sidebar.css';
import './Styles/MainContent.css';


const App = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar style={{ flex: "0 0 250px" }} />
      <MainContent style={{ flex: 1, padding: "20px" }} />
    </div>
  );
};

export default App;