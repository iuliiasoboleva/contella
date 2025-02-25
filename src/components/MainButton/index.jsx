import React from "react";
import "./styles.css";

const MainButton = ({ icon, text, onClick }) => {
    return (
        <div className="main-button" onClick={onClick}>
            {icon && <img className="main-button-icon" src={icon} alt={text || "Button icon"} />}
            {text && <p className="main-button-text">{text}</p>}
        </div>
    );
};

export default MainButton;
