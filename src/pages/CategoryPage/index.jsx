import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./styles.css";
import { cardData } from "../OptionsPage";

const images = import.meta.glob("/public/images/**/*.jpg", { eager: true });

const generateImageList = (category) => {
    return Object.keys(images)
        .filter((path) => path.includes(`${category}-prompt`))
        .map((path) => ({
            img: path.replace("/public", ""),
            id: path.match(/(\d+)\.jpg$/)?.[1],
        }));
};

const CategoryPage = () => {
    const { categoryName } = useParams();
    const navigate = useNavigate();

    const category = Object.values(cardData)
        .flat()
        .find((item) => item.category === categoryName);

    const images = generateImageList(categoryName);
    const title = category ? category.text : "Категория";

    const handleImageClick = (id) => {
        console.log(`Выбранное изображение ID: ${id}`);
    };

    useEffect(() => {
        if (window.Telegram && window.Telegram.WebApp) {
            const WebApp = window.Telegram.WebApp;

            WebApp.BackButton.show();
            WebApp.BackButton.onClick(() => {
                navigate(-1);
            });

            return () => {
                WebApp.BackButton.hide();
                WebApp.BackButton.offClick();
            };
        }
    }, [navigate]);

    return (
        <div className="category-container">
            <div className="category-title-block">
                <h1 className="category-title">{title}</h1>
            </div>

            <div className="cards-container">
                {images.length > 0 ? (
                    images.map(({ img, id }) => (
                        <div
                            key={id}
                            className="card-button-wrapper"
                            style={{ backgroundImage: `url(${img})` }}
                            onClick={() => handleImageClick(id)}
                        >
                        </div>
                    ))
                ) : (
                    <p className="no-images-text">Изображения не найдены</p>
                )}
            </div>
            <div className="gradient-overlay"></div>
        </div>
    );
};

export default CategoryPage;
