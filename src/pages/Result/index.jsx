import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainButton from "../../components/MainButton";
import "./styles.css";

const items = [
    { id: 1, icon: "/icons/share.svg", alt: "Share", label: "Поделиться", action: "share" },
    { id: 2, icon: "/icons/download.svg", alt: "Download", action: "download" },
    { id: 3, icon: "/icons/edit.svg", alt: "Edit", path: "/setup-avatar" },
];

// Массив изображений для слайдера
const sliderImages = [
    { id: 1, url: "./images/studio-prompt/58.jpg" },
    { id: 2, url: "./images/studio-prompt/59.jpg" },
    { id: 3, url: "./images/studio-prompt/60.jpg" },
    { id: 4, url: "./images/studio-prompt/61.jpg" },
];

const AvatarSelection = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [startX, setStartX] = useState(null);

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        if (!startX) return;

        const endX = e.changedTouches[0].clientX;
        const deltaX = startX - endX;

        if (deltaX > 50) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
        } else if (deltaX < -50) {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length);
        }

        setStartX(null);
    };

    const handleShare = () => {
        if (window.Telegram && window.Telegram.WebApp) {
            const WebApp = window.Telegram.WebApp;

            WebApp.showPopup({
                title: "Поделиться в историю",
                message: "Добавить фото в вашу историю Telegram?",
                buttons: [
                    { id: "yes", type: "default", text: "Добавить" },
                    { id: "cancel", type: "destructive", text: "Отмена" },
                ],
            }, (buttonId) => {
                if (buttonId === "yes") {
                    WebApp.openTelegramLink(`https://t.me/share/url?url=${encodeURIComponent(resultPhotoUrl)}&text=Добавлено+из+бота`);
                }
            });
        } else {
            console.warn("Telegram WebApp API не найден.");
        }
    };

    const handleDownload = () => {
        const currentPhoto = sliderImages[currentIndex];

        if (window.Telegram && window.Telegram.WebApp) {
            const WebApp = window.Telegram.WebApp;

            WebApp.showPopup({
                title: "Скачать фото",
                message: "Вы можете сохранить фото вручную, удерживая на нем палец и выбрав 'Сохранить'.",
                buttons: [
                    { id: "open", type: "default", text: "Открыть фото" },
                    { id: "cancel", type: "destructive", text: "Отмена" },
                ],
            }, (buttonId) => {
                if (buttonId === "open") {
                    window.open(currentPhoto.url, "_blank");
                }
            });
        } else {
            const link = document.createElement("a");
            link.href = currentPhoto.url;
            link.download = `photo-${currentPhoto.id}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    const handleClick = (action, path) => {
        if (action === "share") {
            handleShare();
        } else if (action === "download") {
            handleDownload();
        } else if (path) {
            navigate(path);
        }
    };

    return (
        <div className="result-container">
            <div className="avatar-selection-title-block">
                <h1 className="avatar-selection-title">Результат</h1>
            </div>

            <div
                className="slider-container"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="slider-track"
                    style={{
                        transform: `translateX(-${currentIndex * 80}%)`,
                    }}
                >
                    {sliderImages.map((image, index) => (
                        <img
                            key={image.id}
                            className="result-photo"
                            src={image.url}
                            alt={`Result photo ${image.id}`}
                        />
                    ))}
                </div>
            </div>

            <div className="result-buttons-block">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={`result-button ${item.label ? "active" : ""}`}
                        onClick={() => handleClick(item.action, item.path)}
                    >
                        <img src={item.icon} alt={item.alt} />
                        {item.label && <p>{item.label}</p>}
                    </div>
                ))}
            </div>

            <MainButton icon="./icons/wand.svg" text="Создать новые фото" onClick={() => navigate("/women")} />
        </div>
    );
};

export default AvatarSelection;
