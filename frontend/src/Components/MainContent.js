import React, { useState } from "react";

const MainContent = () => {
  const [selectedPage, setSelectedPage] = useState("home");

  const renderContent = () => {
    switch (selectedPage) {
      case "grocery":
        return (
          <div>
            <h2>Grocery Inventory Tracker</h2>
            <p>
              Effortlessly manage your grocery stock with our Grocery Inventory
              Tracker. Add, update, and track every item in your kitchen so you'll
              never run out of essentials again. Say goodbye to last-minute trips
              to the store—you’ll always know what’s in your pantry!
            </p>
          </div>
        );
      case "recipe":
        return (
          <div>
            <h2>Recipe Suggestion</h2>
            <p>
              Looking for meal ideas? With our Recipe Suggestion feature, you can
              explore a variety of delicious recipes based on what’s already in your
              kitchen. Search for any dish, or let us inspire you with meal ideas that
              fit your ingredients—dinner planning has never been easier!
            </p>
          </div>
        );
      case "shopping":
        return (
          <div>
            <h2>Shopping List</h2>
            <p>
              Create and manage your shopping lists in seconds! Easily add items
              you need, check them off as you go, and even send your list directly to
              your phone for a hassle-free shopping trip. Stay organized and never
              forget an item again!
            </p>
          </div>
        );
      case "compare":
        return (
          <div>
            <h2>Compare Price</h2>
            <p>
              Don’t settle for paying more. Use Compare Price to find the cheapest
              and most expensive items across nearby markets. Save money by comparing
              prices before heading to the store, ensuring you're always getting the
              best deal for your grocery budget.
            </p>
          </div>
        );
      default:
        return (
          <div>
            <h2>Welcome to Dapur Mate</h2>
            <p>
              Your ultimate companion for effortless grocery management! Say
              goodbye to chaotic grocery shopping and hello to a seamless kitchen
              experience. Dive in and take control of your grocery game today!
            </p>
          </div>
        );
    }
  };

  return (
    <div className="page-container">
      {/* Header */}
      <header className="header">
        <div className="logo">Dapur Mate</div>
        <div className="header-right">
         
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content" >
        <div className="button-container">
          <button onClick={() => setSelectedPage("grocery")}>
            Grocery Inventory Tracker
          </button>
          <button onClick={() => setSelectedPage("recipe")}>
            Recipe Suggestion
          </button>
          <button onClick={() => setSelectedPage("shopping")}>
            Shopping List
          </button>
          <button onClick={() => setSelectedPage("compare")}>
            Compare Price
          </button>
        </div>

        <div className="content-display">
          {renderContent()}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Dapur Mate. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainContent;
