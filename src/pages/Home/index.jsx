import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const services = [
    {
        id: 1,
        title: "Нейрофото",
        icon: "/icons/gallery-minimalistic.svg",
        link: "/greeting",
        isActive: true,
    },
    {
        id: 2,
        title: "ВИРАЛЬНЫЕ REELS",
        icon: "/icons/video.svg",
        isSoon: true,
    },
    {
        id: 3,
        title: "ЧАТ GPT",
        icon: "/icons/chat-gpt.svg",
        isSoon: true,
    },
];

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <div className="home-title-block">
                <p className="home-description">mini apps for content creation</p>
                <h1 className="home-title">CONTELLA</h1>
            </div>
            <div className="services">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className={service.isActive ? "service-box-active" : "service-box"}
                        onClick={service.isActive ? () => navigate(service.link) : undefined}
                    >
                        {service.isActive ? (
                            <div className="service-button-block">
                                <div className="service-button">
                                    <img src={service.icon} alt={service.title} />
                                    <p className="service-button-text">{service.title}</p>
                                </div>
                                <div className="service-button-next">
                                    <img src="/icons/right-arrow.svg" alt="Arrow right" />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="service-button-soon-next">
                                    <img src="/icons/lock.svg" alt="Lock" />
                                </div>
                                <p className="waiting-text">Скоро...</p>
                                <div className="service-button-soon">
                                    <img src={service.icon} alt={service.title} />
                                    <p className="service-button-text">{service.title}</p>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
