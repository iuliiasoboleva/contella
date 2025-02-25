import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export const cardData = [
    { img: "./images/travel-prompt/4.jpg", text: "Путешествия", category: "travel", id: 1 },
];

const TOTAL_BLOCKS = 15;

const AvatarSelection = () => {
    const navigate = useNavigate();
    const [selectedIds, setSelectedIds] = useState([]);

    const placeholdersCount = Math.max(0, TOTAL_BLOCKS - cardData.length);
    const placeholders = new Array(placeholdersCount).fill(null);

    const blocks = [...cardData, ...placeholders];

    const toggleSelection = (id) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((selectedId) => selectedId !== id) : [...prev, id]
        );
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
                            className="avatar-selection-button-wrapper"
                            style={{ backgroundImage: `url(${item.img})` }}
                            onClick={() => toggleSelection(item.id)}
                        >
                            {selectedIds.includes(item.id) && (
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
