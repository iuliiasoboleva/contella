import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedImage } from "../../store/selectedImageSlice"; // Импортируем action
import { cardData } from "../../mockData";
import "./styles.css";

const TOTAL_BLOCKS = 15;

const AvatarSelection = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [selectedId, setSelectedId] = useState(null);

    const placeholdersCount = Math.max(0, TOTAL_BLOCKS - cardData.length);
    const placeholders = new Array(placeholdersCount).fill(null);

    const blocks = [...cardData, ...placeholders];

    const handleSelection = (item) => {
        setSelectedId(item.id);
        dispatch(setSelectedImage({ avatarImg: item.img }));
        window.scrollTo(0, 0);
        navigate("/setup-avatar");
    };

    return (
        <div className="avatar-selection-container">
            <div className="avatar-selection-title-block">
                <h1 className="avatar-selection-title">ВЫБОР АВАТАРА</h1>
            </div>

            <div className="avatar-selection-cards-container">
                {blocks.map((item, index) =>
                    item ? (
                        <div
                            key={item.id}
                            className={`avatar-selection-button-wrapper ${selectedId === item.id ? "selected" : ""}`}
                            style={{ backgroundImage: `url(${item.img})` }}
                            onClick={() => handleSelection(item)}
                        >
                            {selectedId === item.id && (
                                <img
                                    className="avatar-selection-image-select"
                                    src="./icons/select-icon.svg"
                                    alt="Select icon"
                                />
                            )}
                        </div>
                    ) : (
                        <div key={`placeholder-${index}`} className="avatar-selection-card-wrapper">
                            <img className="avatar-selection-image" src="./icons/big-picture.svg" alt="Gallery icon" />
                        </div>
                    )
                )}
            </div>
            <div className="gradient-overlay"></div>
        </div>
    );
};

export default AvatarSelection;
