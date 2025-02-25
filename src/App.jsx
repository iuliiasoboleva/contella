import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Greeting from "./pages/Greeting";
import BottomMenu from "./components/BottomMenu";
import "./index.css";

const menuConfig = {
  "/": [
    { id: 1, icon: "/icons/colorfilter.svg", alt: "Stars", label: "Функции", path: "/" },
    { id: 2, icon: "/icons/dollar-square.svg", alt: "Dollar", path: "/pricing" },
    { id: 3, icon: "/icons/user-octagon.svg", alt: "User", path: "/profile" },
  ],
  "/greeting":  [
    { id: 1, icon: "/icons/colorfilter.svg", alt: "Stars", label: "Функции", path: "/" },
    { id: 2, icon: "/icons/dollar-square.svg", alt: "Dollar", path: "/pricing" },
    { id: 3, icon: "/icons/user-octagon.svg", alt: "User", path: "/profile" },
  ],
};

const AppContent = () => {
  const location = useLocation();
  const menuItems = menuConfig[location.pathname] || [];

  useEffect(() => {
    document.body.style.backgroundColor = "rgba(0, 0, 0, 1)";
  }, []);

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
      {menuItems.length > 0 && <BottomMenu items={menuItems} />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
