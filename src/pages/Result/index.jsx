import React from "react";
import { useNavigate } from "react-router-dom";
import MainButton from "../../components/MainButton";
import "./styles.css";

const items = [
    { id: 1, icon: "/icons/share.svg", alt: "Share", label: "Поделиться", action: "share" },
    { id: 2, icon: "/icons/download.svg", alt: "Download", action: "download" },
    { id: 3, icon: "/icons/edit.svg", alt: "Edit", path: "/greeting" },
];

const AvatarSelection = () => {
    const navigate = useNavigate();
    const resultPhotoUrl = "./images/studio-prompt/58.jpg";

    const handleShare = () => {
        const encodedUrl = encodeURIComponent(resultPhotoUrl);
        const telegramShareUrl = `tg://msg_url?url=${encodedUrl}`;

        window.location.href = telegramShareUrl;
    };

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = resultPhotoUrl;
        link.download = "result-photo.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
            <img className="result-photo" src={resultPhotoUrl} alt="Result photo" />
            <div className="result-buttons-block">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={`result-button ${item.label ? 'active' : ''}`}
                        onClick={() => handleClick(item.action, item.path)}
                    >
                        <img src={item.icon} alt={item.alt} />
                        {item.label && <p>{item.label}</p>}
                    </div>
                ))}
            </div>
            <MainButton icon="./icons/wand.svg" text="Создать новые фото" onClick={() => navigate("/profile")} />
        </div>
    );
};

export default AvatarSelection;
