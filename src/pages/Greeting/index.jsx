import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Greeting = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("Гость");
    const [tooltipVisible, setTooltipVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            if (window.Telegram && window.Telegram.WebApp) {
                const WebApp = window.Telegram.WebApp;
                WebApp.expand();

                const user = WebApp.initDataUnsafe?.user;
                if (user && user.first_name) {
                    setUserName(user.first_name);
                }
            } else {
                alert("WebApp API всё ещё не найден. Mini App открыт не через Telegram?");
            }
        }, 3000);
    }, []);

    const buttonData = [
        { text: "Мужчин", icon: "./icons/right-arrow-color.svg", route: "/men" },
        { text: "Женщин", icon: "./icons/right-arrow-color.svg", route: "/women" },
        { text: "Парные фото", icon: "./icons/right-arrow-color.svg", route: null }, // Отключаем переход
    ];

    const handleClick = (route) => {
        if (route) {
            navigate(route);
        } else {
            setTooltipVisible(true);
            setTimeout(() => setTooltipVisible(false), 2000);
        }
    };

    return (
        <div className="greeting-wrapper">
            <div className="greeting-top">
                <img className="greeting-image" src="/images/15.png" alt="15 photos" />
            </div>

            <div className="greeting-container">
                <h2 className="greeting-title">Привет, {userName}!</h2>
                <p className="greeting-subtitle">
                    С тебя 15 фоток себя, с нас твоя полная цифровая копия! 
                    <span> Генерируй свои изображения в любом уголке мира</span>
                </p>
                <p className="greeting-subtitle">Можно использовать как готовые стили, так и написать с нуля свои</p>
                <p className="greeting-subtitle greeting-info">Выбери стиль для</p>

                <div className="greeting-button-selection">
                    {buttonData.map(({ text, icon, route }, index) => (
                        <div key={index} className="greeting-button-wrapper">
                            <button
                                className="greeting-button"
                                onClick={() => handleClick(route)}
                            >
                                <span className="greeting-button-text">{text}</span>
                                <img src={icon} alt="Colored right arrow" />
                            </button>
                            {text === "Парные фото" && tooltipVisible && (
                                <div className="tooltip">Скоро реализуем</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Greeting;
