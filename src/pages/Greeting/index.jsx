import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Greeting = () => {
    const navigate = useNavigate();

    // Данные для кнопок с маршрутами
    const buttonData = [
        { text: "Мужчин", icon: "./icons/right-arrow-color.svg", route: "/men" },
        { text: "Женщин", icon: "./icons/right-arrow-color.svg", route: "/women" },
        { text: "Парные фото", icon: "./icons/right-arrow-color.svg", route: "/couples" },
    ];

    return (
        <div className="greeting-wrapper">
            <div className="greeting-top">
                <img className="greeting-image" src="/images/15.png" alt="15 photos" />
            </div>

            <div className="greeting-container">
                <h2 className="greeting-title">Привет, ИМЯ!</h2>
                <p className="greeting-subtitle">
                    С тебя 15 фоток себя, с нас твоя полная цифровая копия! 
                    <span> Генерируй свои изображения в любом уголке мира</span>
                </p>
                <p className="greeting-subtitle">Можно использовать как готовые стили, так и написать с нуля свои</p>
                <p className="greeting-subtitle greeting-info">Выбери стиль для</p>

                <div className="greeting-button-selection">
                    {buttonData.map(({ text, icon, route }, index) => (
                        <button 
                            key={index} 
                            className="greeting-button"
                            onClick={() => navigate(route)}
                        >
                            <span className="greeting-button-text">{text}</span>
                            <img src={icon} alt="Colored right arrow" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Greeting;
