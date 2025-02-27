import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MainButton from "../../components/MainButton";
import "./styles.css";

const AvatarSetup = () => {
    const navigate = useNavigate();
    const [selectedRatio, setSelectedRatio] = useState("1:1");
    const [photoCount, setPhotoCount] = useState(4);

    const selectedImage = useSelector((state) => state.selectedImage.selectedImage);
    const avatarImg = selectedImage?.avatarImg || null;

    const handleRatioChange = (ratio) => {
        setSelectedRatio(ratio);
    };

    const handleIncrease = () => {
        setPhotoCount((prev) => (prev < 4 ? prev + 1 : 4));
    };

    const handleDecrease = () => {
        setPhotoCount((prev) => (prev > 1 ? prev - 1 : 1));
    };

    const imageStyle = {
        aspectRatio: selectedRatio === "1:1" ? "1 / 1" :
            selectedRatio === "9:16" ? "9 / 16" :
                "16 / 9"
    };

    return (
        <div className="avatar-setup-container">
            <div className="avatar-setup-title-block">
                <h1 className="avatar-setup-title">Создать</h1>
            </div>
            <div className="avatar-setup-image-wrapper">
                <img className="avatar-setup-image" src="./images/travel-prompt/4.jpg" alt="Avatar" style={imageStyle} />
            </div>
            <div className="setup-buttons">
                <div className="photo-size">
                    <p className="photo-size-text">Соотношение сторон</p>
                    <div className="sides">
                        <div className={`side-one ${selectedRatio === "1:1" ? "active-side" : ""}`} onClick={() => handleRatioChange("1:1")}>1:1</div>
                        <div className={`side-two ${selectedRatio === "9:16" ? "active-side" : ""}`} onClick={() => handleRatioChange("9:16")}>9:16</div>
                        <div className={`side-three ${selectedRatio === "16:9" ? "active-side" : ""}`} onClick={() => handleRatioChange("16:9")}>16:9</div>
                    </div>
                </div>
                <div className="setup-buttons-right">
                    <div
                        className="choose-avatar"
                        onClick={() => navigate("/select-avatar")}
                        style={{
                            background: avatarImg
                                ? `url(${avatarImg}) center/cover no-repeat`
                                : "linear-gradient(180deg, #855FF3 0%, #B48DFD 100%)"
                        }}
                    >
                        <img className="choose-avatar-image" src="./icons/add.svg" alt="Add photo" />
                        <p className="choose-avatar-text">Выбери аватар</p>
                    </div>
                    <div className="setup-counter">
                        <p className="setup-counter-text">Кол-во фото</p>
                        <div className="setup-counter-block">
                            <div className="counter-button" onClick={handleDecrease}>-</div>
                            <div className="counter-value">{photoCount}</div>
                            <div className="counter-button" onClick={handleIncrease}>+</div>
                        </div>
                    </div>
                </div>
            </div>
            <MainButton icon="./icons/wand.svg" text="Создать" onClick={() => navigate("/result")} />
        </div>
    );
};

export default AvatarSetup;
