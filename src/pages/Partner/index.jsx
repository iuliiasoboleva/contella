import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Partner = () => {
    const navigate = useNavigate();
    const referralLink = "t.me/yourrefferallink";
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(referralLink)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 3000);
            })
            .catch(err => {
                console.error("Ошибка копирования: ", err);
            });
    };

    return (
        <div className="partner-container">
            <div className="partner-title-block">
                <h1 className="partner-title">Партнерская программа</h1>
            </div>
            <p className="partner-description">Ты инфлюенсер, владелец канала, или у тебя есть другой канал трафика? </p>
            <div className="partner-info">
                <img className="partner-info-image" src="./icons/sale.svg" alt="Sale" />
                <p className="partner-info-text">заработай на нашей партнерской программе</p>
            </div>
            <div className="partner-button">
                <p className="partner-button-discount">25%</p>
                <p className="partner-button-text">от суммы оплат всех приглашенных пользователей — будут твоими</p>
            </div>
            <div className="partner-link-block" onClick={copyToClipboard} style={{ cursor: "pointer" }}>
                <p className="partner-link">{referralLink}</p>
                <img src="./icons/copy.svg" alt="Copy" />
            </div>
            {copied && <span className="copy-confirmation">Скопировано!</span>}
        </div>
    );
};

export default Partner;