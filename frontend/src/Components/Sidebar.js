import React, { useState } from 'react';


const Sidebar = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  const handleMenuClick = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <div className={`container ${isSidebarActive ? 'sidebar-active' : ''}`}>
      <div className="sidebar">
        <div className="menu-btn" onClick={toggleSidebar}>
          <i className={`ph-bold ph-caret-left ${isSidebarActive ? 'active' : ''}`}></i>
        </div>
        <div className="head">
        <div className="logo">Dapur Mate</div>
        </div>
        <div className="nav">
          <div className="menu">
            <p className="title">Main</p>
            <ul>
              <li>
                <a href="#">
                  <i className="icon ph-bold ph-house-simple"></i>
                  <span className="text">Home</span>
                </a>
              </li>
              <li onClick={() => handleMenuClick(1)} className={activeMenu === 1 ? 'active' : ''}>
                <a href="#">
                  <i className="icon ph-bold ph-clipboard"></i>
                  <span className="text">Grocery Inventory</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon ph-bold ph-shopping-cart-simple"></i>
                  <span className="text">Shopping List</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon ph-bold ph-lightbulb"></i>
                  <span className="text">Recipe Suggestion</span>
                </a>
              </li>
              <li onClick={() => handleMenuClick(2)} className={activeMenu === 2 ? 'active' : ''}>
                <a href="#">
                  <i className="icon ph-bold ph-scales"></i>
                  <span className="text">Compare Price</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#">
                <i className="icon ph-bold ph-sign-out"></i>
                <span className="text">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
