import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const guideData = [
    { text: '10 фото — хороший результат' },
    { text: '15 фото — точное совпадение' },
    { text: '25 фото — идеальный цифровой клон!' }
];

const guideRules = [
    { icon: '/icons/close.svg', text: 'Другие люди в кадре запрещены — только ты' },
    { icon: '/icons/smile.svg', text: 'Четкое лицо, без сильных теней и размытий' }
];

const guidePhotos = [
    {
        images: ['/images/woman-photo.png', '/images/man-photo.png'],
        icon: '/images/green-circle.png',
        label: 'Отличные фото',
        description: 'крупный план, четкость, ровный свет'
    },
    {
        images: ['/images/white-dress.png', '/images/couple.png'],
        icon: '/images/red-circle.png',
        label: 'Плохие фото',
        description: 'размытые, далеко от камеры, с посторонними'
    }
];

const GuidePhotoBlock = ({ images, icon, label, description }) => (
    <div className="guide-photo">
        <div className="guide-photo-block">
            {images.map((src, index) => (
                <img key={index} src={src} alt={`Фото ${index + 1}`} />
            ))}
            <img className="guide-photo-absolute" src={icon} alt="Иконка" />
        </div>
        <p>{label}</p>
        <span>{description}</span>
    </div>
);

const Guide = () => {
    const imageRef = useRef(null);
    const spacerRef = useRef(null);
    const [bottomOffset, setBottomOffset] = useState(0);

    useEffect(() => {
        const windowHeight = window.innerHeight;

        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            setBottomOffset(windowHeight * 0.15 - 70);
        } else {
            setBottomOffset(windowHeight * 0.1 - 80);
        }

        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                if (spacerRef.current) {
                    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                        spacerRef.current.style.height = `${entry.contentRect.height * 0}px`;
                    } else {
                        spacerRef.current.style.height = `${entry.contentRect.height * 0.3}px`;
                    }
                }
            }
        });
    
        if (imageRef.current) {
            resizeObserver.observe(imageRef.current);
        }
    
        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div className="guide-wrapper">
            <div className="guide-top">
                <img
                    ref={imageRef}
                    className="guide-image"
                    src="/images/stars-circle.png" alt="Stars"
                    style={{ bottom: `${bottomOffset}px` }}
                />
            </div>
            <div ref={spacerRef} className="guide-spacer" /> {/* Заглушка */}
            <div className="guide-content">
                <h1 className="guide-title">Создай своего цифрового двойника</h1>
                <p className="guide-subtitle">
                    Чтобы нейросеть точно воссоздала твой образ, загрузи 15 фотографий один раз — изменить их позже невозможно
                </p>

                <div className="guide-items">
                    {guideData.map((item, index) => (
                        <div className="guide-item" key={index}>
                            <img src="/icons/rectangle.svg" alt="Rectangle" />
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>

                <h2 className="guide-title">ЧТО ВАЖНО?</h2>
                <div className="guide-cards">
                    {guideRules.map((rule, index) => (
                        <div className="guide-card" key={index}>
                            <img src={rule.icon} alt="Icon" />
                            <p>{rule.text}</p>
                        </div>
                    ))}
                </div>

                <h2 className="guide-title">Как сделать все правильно?</h2>
                <div className="guide-items guide-column-items">
                    <div className="guide-column-item">
                        <div className="guide-item">
                            <img src="/icons/rectangle.svg" alt="Rectangle" />
                            <p><span>2-3 фото</span> в темное время суток (но не слишком темные)</p>
                        </div>
                        <div className="guide-item">
                            <img src="/icons/rectangle.svg" alt="Rectangle" />
                            <p><span>2-3 фото</span> в очках (если носишь)</p>
                        </div>
                    </div>
                    <div className="guide-column-item">
                        <div className="guide-item">
                            <img src="/icons/rectangle.svg" alt="Rectangle" />
                            <p><span>3-5 снимков</span> анфас — прямо в камеру</p>
                        </div>
                        <div className="guide-item">
                            <img src="/icons/rectangle.svg" alt="Rectangle" />
                            <p><span>3-5 фото</span> в профиль — боковой ракурс</p>
                        </div>
                    </div>
                </div>

                <p className="guide-subtitle">
                    Идеальный результат достигается за счет разнообразия! Чем больше ракурсов и условий освещения, тем точнее модель воссоздаст твой облик
                </p>

                <h2 className="guide-title">КАКИЕ ФОТО ПРИНИМАЮТСЯ?</h2>
                <div className="guide-photos">
                    {guidePhotos.map((photo, index) => (
                        <GuidePhotoBlock key={index} {...photo} />
                    ))}
                </div>

                <div className="guide-button">
                    <div className="guide-button-text">
                        <p>Создай цифровую версию себя</p>
                        <span>которую нейросеть узнает с первого взгляда</span>
                    </div>
                    <div className="guide-button-add">
                        <img src="/images/add-square-white.png" alt="Добавить фото" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guide;
