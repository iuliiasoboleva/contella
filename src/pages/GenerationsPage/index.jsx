import React from "react";
import "./styles.css";

const images = import.meta.glob("/public/images/**/*.jpg", { eager: true });

const generateImageList = (category) => {
    return Object.keys(images)
        .filter((path) => path.includes(`${category}-prompt`))
        .map((path) => ({
            img: path.replace("/public", ""),
            id: path.match(/(\d+)\.jpg$/)?.[1],
        }));
};

const GenerationsPage = () => {
    const images = generateImageList('monochrome');

    const handleImageClick = (id) => {
        console.log(`Выбранное изображение ID: ${id}`);
    };

    return (
        <div className="category-container">
            <div className="category-title-block">
                <h1 className="category-title">Мои генерации</h1>
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

export default GenerationsPage;
