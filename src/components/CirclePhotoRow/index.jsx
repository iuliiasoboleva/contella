import React from "react";
import "./styles.css";

const images = [
    "./images/travel-prompt/1.jpg",
    "./images/travel-prompt/2.jpg",
    "./images/travel-prompt/3.jpg",
    "./images/travel-prompt/4.jpg",
];

const CirclePhotoRow = () => {
    return (
        <div className="circle-photo-row">
            <div className="circle-photo placeholder" style={{ zIndex: images.length + 1 }}>15+</div>
            {images.map((src, index) => (
                <div key={index} className="circle-photo" style={{ zIndex: images.length - index }}>
                    <img src={src} alt={`Avatar ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default CirclePhotoRow;
