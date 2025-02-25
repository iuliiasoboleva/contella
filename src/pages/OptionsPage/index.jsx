import React, { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles.css";

export const cardData = {
    women: [
        { img: "./images/travel-prompt/4.jpg", text: "Путешествия", category: "travel" },
        { img: "./images/flowers-prompt/24.jpg", text: "Цветы", category: "flowers" },
        { img: "./images/sport-prompt/34.jpg", text: "Спорт", category: "sport" },
        { img: "./images/studio-prompt/57.jpg", text: "Студия", category: "studio" },
        { img: "./images/brand-prompt/64.jpg", text: "Бренды", category: "brand" },
        { img: "./images/body-prompt/66.jpg", text: "Фигура", category: "body" },
        { img: "./images/ski-prompt/76.jpg", text: "SKI", category: "ski" },
        { img: "./images/dress-prompt/86.jpg", text: "Вечерние платья", category: "dress" },
        { img: "./images/barbie-prompt/98.jpg", text: "Барби", category: "barbie" },
        { img: "./images/futurism-prompt/105.jpg", text: "Футуризм", category: "futurism" },
        { img: "./images/creativity-prompt/116.jpg", text: "Креатив", category: "creativity" },
        { img: "./images/lifestyle-prompt/125.jpg", text: "Лайфстайл", category: "lifestyle" },
        { img: "./images/night-city-prompt/139.jpg", text: "Ночной город", category: "night-city" },
        { img: "./images/monochrome-prompt/149.jpg", text: "Монохром", category: "monochrome" },
        { img: "./images/pastel-prompt/157.jpg", text: "Пастель", category: "pastel" },
        { img: "./images/boho-prompt/168.jpg", text: "Бохо", category: "boho" },
        { img: "./images/retro-prompt/177.jpg", text: "Ретро", category: "retro" },
    ],
    men: [
        { img: "./images/business-prompt/5.jpg", text: "Бизнес" },
        { img: "./images/sport-prompt/12.jpg", text: "Спорт" },
    ],
    couples: [
        { img: "./images/love-prompt/9.jpg", text: "Любовь" },
        { img: "./images/family-prompt/18.jpg", text: "Семья" },
    ],
};

const categories = [
    { value: "women", label: "Женщинам" },
    { value: "men", label: "Мужчинам" },
    { value: "couples", label: "Парам" },
];

const OptionsPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const selectRef = useRef(null);

    const currentCategory = location.pathname.replace("/", ""); // men | women | couples
    const cards = cardData[currentCategory] || [];

    const openSelect = () => {
        if (selectRef.current) {
            selectRef.current.focus();
            selectRef.current.click();
        }
    };

    return (
        <div className="for-whom-container">
            <div className="for-whom-title-block">
                <div className="for-whom-select-wrapper">
                    <select
                        ref={selectRef}
                        className="for-whom-select"
                        value={currentCategory}
                        onChange={(e) => navigate(`/${e.target.value}`)}
                    >
                        {categories.map(({ value, label }) => (
                            <option key={value} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>
                    <img
                        src="./icons/down-arrow-color.svg"
                        alt="Down arrow"
                        className="for-whom-arrow"
                        onClick={openSelect}
                    />
                </div>
            </div>

            <div className="cards-container">
                <div className="card-wrapper">
                    <img className="card-image" src="./images/icon-set.png" alt="Icon set" />
                    <p className="card-text">Создать стиль из своего запроса</p>
                </div>
                <div className="card-wrapper">
                    <img className="card-image" src="./images/pinterest-one.png" alt="Pinterest" />
                    <img className="card-image-add" src="./images/pinterest-two.png" alt="Pinterest icon" />
                    <p className="card-text">Создать стиль из подборки Pinterest</p>
                </div>

                {cards.map(({ img, text, category }, index) => (
                    <div
                        key={index}
                        className="card-button-wrapper"
                        style={{ backgroundImage: `url(${img})` }}
                        onClick={() => navigate(`/category/${category}`)}
                    >
                        <button className="card-button-text">{text}</button>
                    </div>
                ))}
            </div>
            <div className="gradient-overlay"></div>
        </div>
    );
};

export default OptionsPage;
