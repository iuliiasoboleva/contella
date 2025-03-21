import React from "react";
import { useNavigate } from "react-router-dom";
import MainButton from "../../components/MainButton";
import "./styles.css";

const getGenerationText = (count) => {
    if (count % 10 === 1 && count % 100 !== 11) return `${count} генерация`;
    if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) return `${count} генерации`;
    return `${count} генераций`;
};

const priceMock = {
    price: 990,
    count: 100,
};

const howItems = [
    {
        icon: '/icons/camera.svg',
        text: 'Создавать виртуальные фотосессии в любом месте мира',
        alt: 'Gallery',
    },
    {
        icon: '/icons/hanger.svg',
        text: 'Примерять разные стили одежды и образы',
        alt: 'Gallery',
    },
    {
        icon: '/icons/cup-star.svg',
        text: 'Создавать яркий контент для соцсетей за 15 минут в день',
        alt: 'Gallery',
    },
    {
        icon: '/icons/picture-color.svg',
        text: 'Использовать изображения для работы, творчества или личных проектов',
        alt: 'Gallery',
    },
];

const howCards = [
    {
        image: '/images/auto.png',
        alt: 'Девушка в машине',
        text: 'Искусственный интеллект <span>создает цифровую копию по твоим 15 фото</span>, сохраняя твою мимику, черты лица и стиль',
    },
    {
        image: '/images/paris.png',
        alt: 'Девушка в Париже',
        text: '<span>Ты получаешь 100 генераций в 100+ стилях — пробуй готовые образы или придумывай свои</span>',
    },
];

const HowItWorks = () => {
    const navigate = useNavigate();

    return (
        <div className="how-it-works-container">
            <div className="how-it-works-wrapper">
                <img className="how-it-works-image" src="/icons/wand-color.svg" alt="Wand" />
                <h1 className="how-title">Создавай<br /> реалистичные фото<br /> с нейросетью</h1>
                <div className="how-container">
                    <img src="/icons/colorfilter.svg" alt="Stars" />
                    <p>{priceMock.price}₽ в месяц — {getGenerationText(priceMock.count)}</p>
                </div>

                <h2 className="how-title">КАК ЭТО<br /> РАБОТАЕТ</h2>
                <div className="how-cards-container">
                    {howCards.map((card, index) => (
                        <div className="how-card" key={index}>
                            <img className="how-card-image" src={card.image} alt={card.alt} />
                            <p
                                className="how-card-text"
                                dangerouslySetInnerHTML={{ __html: card.text }}
                            />
                        </div>
                    ))}
                </div>
                <h2 className="how-title">ЧТО ТЫ МОЖЕШЬ<br /> ДЕЛАТЬ?</h2>
                <div className="how-items-container">
                    {howItems.map((item, index) => (
                        <div className="how-item" key={index}>
                            <div className="how-item-img">
                                <img src={item.icon} alt={item.alt} />
                            </div>
                            <p className="how-item-text">{item.text}</p>
                        </div>
                    ))}
                </div>
                <MainButton text="Получить доступ" onClick={() => navigate("/profile")} />
                <span className="how-additional-info">
                    * Нажимая “Получить доступ”, ты соглашаешься с офертой и принятием оплаты 990₽ за 1 месяц. Отмена в любое время.
                </span>
            </div>
        </div>
    );
};

export default HowItWorks;
