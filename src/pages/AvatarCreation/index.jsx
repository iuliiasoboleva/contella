import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CirclePhotoRow from "../../components/CirclePhotoRow";
import MainButton from "../../components/MainButton";
import "./styles.css";

const MAX_PHOTOS = 15;

const AvatarCreation = () => {
    const navigate = useNavigate();
    const [avatarName, setAvatarName] = useState("");
    const [photos, setPhotos] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleAddPhoto = (event) => {
        const files = Array.from(event.target.files);
        const availableSlots = MAX_PHOTOS - photos.length;

        if (files.length > availableSlots) {
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 3000);
            return;
        }

        const newPhotos = files.slice(0, availableSlots).map((file) => ({
            id: URL.createObjectURL(file),
            file,
        }));

        setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
    };

    const handleRemovePhoto = (id) => {
        setPhotos((prevPhotos) => prevPhotos.filter((photo) => photo.id !== id));
    };

    const handleCreateAvatar = () => {
        setLoading(true);
        setTimeout(() => {
            window.scrollTo(0, 0);
            navigate("/select-avatar");
        }, 2000);
    };

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
                    <span> фото в хорошем качестве </span>, где четко видно твое лицо
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

            {photos.length > 0 && <div className="avatar-photos-container">
                {photos.map((photo) => (
                    <div key={photo.id} className="avatar-photo-wrapper">
                        <img src={photo.id} alt="Uploaded" className="avatar-photo" />
                        <button className="remove-photo-btn" onClick={() => handleRemovePhoto(photo.id)}>✖</button>
                    </div>
                ))}
            </div>}

            {photos.length < MAX_PHOTOS && (
                <label className="avatar-creation-add">
                    <input type="file" accept="image/*" multiple hidden onChange={handleAddPhoto} />
                    <img src="./images/add-square.png" alt="Add photo" />
                </label>
            )}

            {loading ? (
                <div className="loader"></div>
            ) : (
                <MainButton icon="./icons/wand.svg" text="Создать аватар" onClick={handleCreateAvatar} />
            )}
            {showPopup && (
                <div className="photo-limit-popup">Достигнут лимит 15 фото</div>
            )}
        </div>
    );
};

export default AvatarCreation;
