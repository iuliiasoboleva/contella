import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";

const BottomMenu = ({ items }) => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className="bottom-menu">
            {items.map((item) => (
                <div
                    key={item.id}
                    className={location.pathname === item.path ? "bottom-menu-button-active" : "bottom-menu-button"}
                    onClick={() => navigate(item.path)}
                >
                    <img src={item.icon} alt={item.alt} />
                    {item.label && <p>{item.label}</p>}
                </div>
            ))}
        </div>
    );
};

export default BottomMenu;
