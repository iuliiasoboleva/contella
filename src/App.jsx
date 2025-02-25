import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Greeting from "./pages/Greeting";
import OptionsPage from "./pages/OptionsPage";
import CategoryPage from "./pages/CategoryPage";

import BottomMenu from "./components/BottomMenu";

import "./index.css";

const optionsMenu = [
  { id: 1, icon: "/icons/create.svg", alt: "Create", label: "Создать", path: "/create", isMainButton: true },
  { id: 2, icon: "/icons/picture.svg", alt: "Gallery", path: "/pricing" },
  { id: 3, icon: "/icons/dollar-square.svg", alt: "Dollar", path: "/pricing" },
  { id: 4, icon: "/icons/user-octagon.svg", alt: "User", path: "/profile" },
];

const menuConfig = {
  "/": [
    { id: 1, icon: "/icons/colorfilter.svg", alt: "Stars", label: "Функции", path: "/", isMainButton: true },
    { id: 2, icon: "/icons/dollar-square.svg", alt: "Dollar", path: "/pricing" },
    { id: 3, icon: "/icons/user-octagon.svg", alt: "User", path: "/profile" },
  ],
  "/greeting": [
    { id: 1, icon: "/icons/colorfilter.svg", alt: "Stars", label: "Функции", path: "/greeting", isMainButton: true },
    { id: 2, icon: "/icons/dollar-square.svg", alt: "Dollar", path: "/pricing" },
    { id: 3, icon: "/icons/user-octagon.svg", alt: "User", path: "/profile" },
  ],
  "/generations": [
    { id: 1, icon: "/icons/create.svg", alt: "Create", path: "/" },
    { id: 2, icon: "/icons/picture.svg", alt: "Gallery", label: "Генерации", path: "/generations", isMainButton: true  },
    { id: 3, icon: "/icons/dollar-square.svg", alt: "Dollar", path: "/pricing" },
    { id: 4, icon: "/icons/user-octagon.svg", alt: "User", path: "/profile" },
  ],
  "/men": optionsMenu,
  "/women": optionsMenu,
  "/couples": optionsMenu,
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
        <Route path="/men" element={<OptionsPage />} />
        <Route path="/women" element={<OptionsPage />} />
        <Route path="/couples" element={<OptionsPage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
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
