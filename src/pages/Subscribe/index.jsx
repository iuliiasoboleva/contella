import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MainButton from "../../components/MainButton";
import "./styles.css";

const slides = [
    { img: "./images/travel-prompt/2.jpg", text: "Проведи фотосессию онлайн в любой локации мира без вложений" },
    { img: "./images/travel-prompt/3.jpg", text: "Примерь на себя одежду любого бренда" },
    { img: "./images/travel-prompt/4.jpg", text: "Проведи фотосессию онлайн в любой локации мира без вложений" },
    { img: "./images/travel-prompt/5.jpg", text: "Создай уникальный образ с AI" }
];

const Subscribe = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const visibleSlides = 2;
    const maxIndex = slides.length - visibleSlides;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const swipeDistance = touchStartX.current - touchEndX.current;
        if (swipeDistance > 50) {
            nextSlide();
        } else if (swipeDistance < -50) {
            prevSlide();
        }
    };

    return (
        <div className="subscribe-container">
            <div className="subscribe-wrapper">
                <img className="subscribe-image" src="./icons/wand-color.svg" alt="Wand" />
                <h1 className="subscribe-title">Мы генерируем любое твое фото по запросу</h1>
                <p className="subscribe-subtitle">а не просто накладываем лицо на фото</p>
                <div
                    className="subscribe-slider"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="slider-track"
                        style={{
                            transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
                            transition: "transform 0.3s ease-in-out",
                            width: `calc(100% * ${slides.length / visibleSlides})`
                        }}
                    >
                        {slides.map((slide, index) => (
                            <div key={index} className="card-slider">
                                <img className="slider-image" src={slide.img} alt="AI photo" />
                                <p className="slider-text">{slide.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <MainButton text="Подписаться" onClick={() => navigate("/profile")} />
            </div>
        </div>
    );
};

export default Subscribe;
