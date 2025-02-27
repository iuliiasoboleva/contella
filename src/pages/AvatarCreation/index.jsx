import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import CirclePhotoRow from "../../components/CirclePhotoRow";

const AvatarCreation = () => {
    const navigate = useNavigate();
    const [avatarName, setAvatarName] = useState("");

    return (
        <div className="avatar-creation-container">
            <CirclePhotoRow />

            <div className="avatar-creation-block">
                <img src="./icons/colorfilter.svg" alt="Star" />
                <h1 className="avatar-creation-title">СОЗДАТЬ АВАТАР</h1>
                <p className="avatar-creation-text">Для начала тебе нужно обучить нейросеть
                    <span> , загрузив в нее 10-15 своих фотографий</span>
                </p>
                <p className="avatar-creation-text">Мы рекомендуем использовать
                    <span> фото в хорошем качестве </span> , где четко видно твое лицо
                </p>
            </div>

            <div className="avatar-creation-input">
                <input
                    type="text"
                    className="avatar-input"
                    value={avatarName}
                    onChange={(e) => setAvatarName(e.target.value)}
                    placeholder="Выберите имя аватара"
                />
            </div>

            <div className="avatar-creation-add">
                <img src="./images/add-square.png" alt="Add photo" />
            </div>
        </div>
    );
};

export default AvatarCreation;
