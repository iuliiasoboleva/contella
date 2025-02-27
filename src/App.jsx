import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./pages/Home";
import Greeting from "./pages/Greeting";
import OptionsPage from "./pages/OptionsPage";
import CategoryPage from "./pages/CategoryPage";
import GenerationsPage from "./pages/GenerationsPage";
import AvatarSelection from "./pages/AvatarSelection";
import AvatarCreation from "./pages/AvatarCreation";
import AvatarSetup from "./pages/AvatarSetup";
import Result from "./pages/Result";
import Partner from "./pages/Partner";
import Profile from "./pages/Profile";
import Subscribe from "./pages/Subscribe";

import BottomMenu from "./components/BottomMenu";
import { store } from "./store/store";

import "./index.css";

const optionsMenu = [
  { id: 1, icon: "/icons/create.svg", alt: "Create", label: "Создать", path: "/women", isMainButton: true },
  { id: 2, icon: "/icons/picture.svg", alt: "Gallery", path: "/generations" },
  { id: 3, icon: "/icons/dollar-square.svg", alt: "Dollar", path: "/partner" },
  { id: 4, icon: "/icons/user-octagon.svg", alt: "User", path: "/profile" },
];

const menuConfig = {
  "/": [
    { id: 1, icon: "/icons/colorfilter.svg", alt: "Stars", label: "Функции", path: "/", isMainButton: true },
    { id: 2, icon: "/icons/dollar-square.svg", alt: "Dollar", path: "/partner" },
    { id: 3, icon: "/icons/user-octagon.svg", alt: "User", path: "/profile" },
  ],
  "/men": optionsMenu,
  "/women": optionsMenu,
  "/couples": optionsMenu,
  "/generations": [
    { id: 1, icon: "/icons/create-monochrome.svg", alt: "Create", path: "/women" },
    { id: 2, icon: "/icons/picture-color.svg", alt: "Gallery", label: "Генерации", path: "/generations", isMainButton: true },
    { id: 3, icon: "/icons/dollar-square.svg", alt: "Dollar", path: "/partner" },
    { id: 4, icon: "/icons/user-octagon.svg", alt: "User", path: "/profile" },
  ],
  "/partner": [
    { id: 1, icon: "/icons/create-monochrome.svg", alt: "Create", path: "/women" },
    { id: 2, icon: "/icons/picture.svg", alt: "Gallery", path: "/generations" },
    { id: 3, icon: "/icons/dollar-square-color.svg", alt: "Dollar", label: "Заработать", path: "/partner", isMainButton: true },
    { id: 4, icon: "/icons/user-octagon.svg", alt: "User", path: "/profile" },
  ],
  "/profile": [
    { id: 1, icon: "/icons/create-monochrome.svg", alt: "Create", path: "/women" },
    { id: 2, icon: "/icons/picture.svg", alt: "Gallery", path: "/generations" },
    { id: 3, icon: "/icons/dollar-square.svg", alt: "Dollar", path: "/partner" },
    { id: 4, icon: "/icons/user-octagon-color.svg", alt: "User", label: "Профиль", path: "/profile", isMainButton: true },
  ],
};

const AppContent = () => {
  const location = useLocation();
  const menuItems = menuConfig[location.pathname] || [];

  useEffect(() => {
    document.body.style.backgroundColor = "rgba(0, 0, 0, 1)";

    if (window.Telegram && window.Telegram.WebApp) {
      const WebApp = window.Telegram.WebApp;
      WebApp.expand();

      console.log("Telegram WebApp инициализирован");
    }
  }, []);

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greeting" element={<Greeting />} />
        <Route path="/men" element={<OptionsPage />} />
        <Route path="/women" element={<OptionsPage />} />
        {/* <Route path="/couples" element={<OptionsPage />} /> */}
        <Route path="/generations" element={<GenerationsPage />} />
        <Route path="/select-avatar" element={<AvatarSelection />} />
        <Route path="/create-avatar" element={<AvatarCreation />} />
        <Route path="/setup-avatar" element={<AvatarSetup />} />
        <Route path="/result" element={<Result />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
      </Routes>
      {menuItems.length > 0 && <BottomMenu items={menuItems} />}
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>

    <Router>
      <AppContent />
    </Router>
    </Provider>

  );
}

export default App;
