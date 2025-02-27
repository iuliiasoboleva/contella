import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { categories, categoriesData } from "../../mockData";
import "./styles.css";

const OptionsPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [tooltipVisible, setTooltipVisible] = useState(false);

    const currentCategory = location.pathname.replace("/", ""); // men | women | couples
    const cards = categoriesData[currentCategory] || [];

    const switchCategory = () => {
        const currentIndex = categories.findIndex(({ value }) => value === currentCategory);
        const nextIndex = (currentIndex + 1) % categories.length;
        navigate(`/${categories[nextIndex].value}`);
    };

    const showTooltip = () => {
        setTooltipVisible(true);
        setTimeout(() => setTooltipVisible(false), 2000);
    };

    return (
        <div className="for-whom-container">
            <div className="for-whom-title-block">
                <div className="for-whom-select-wrapper" onClick={switchCategory}>
                    <div className="for-whom-select">
                        {categories.find(({ value }) => value === currentCategory)?.label}
                    </div>
                    <img src="./icons/down-arrow-color.svg" alt="Down arrow" className="for-whom-arrow" />
                </div>
            </div>

            <div className="cards-container">
                <div className="card-wrapper">
                    <img className="card-image" src="./images/icon-set.png" alt="Icon set" />
                    <p className="card-text">Создать стиль из своего запроса</p>
                </div>
                <div className="card-wrapper" onClick={showTooltip}>
                    <img className="card-image" src="./images/pinterest-one.png" alt="Pinterest" />
                    <img className="card-image-add" src="./images/pinterest-two.png" alt="Pinterest icon" />
                    <p className="card-text">Создать стиль из подборки Pinterest</p>
                    {tooltipVisible && <div className="tooltip">Скоро реализуем</div>}
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
