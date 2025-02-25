import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const BottomMenu = ({ items }) => {
    const navigate = useNavigate();

    const mainButton = items.find(item => item.isMainButton);

    return (
        <div className="bottom-menu">
            {items.map((item) => (
                <div
                    key={item.id}
                    className={mainButton && item.label ? "bottom-menu-button-active" : "bottom-menu-button"}
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
