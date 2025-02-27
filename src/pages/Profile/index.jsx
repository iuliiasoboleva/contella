import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const ProfileOption = ({ icon, text }) => (
    <div className="profile-double-wrapper">
        <div className="profile-double-text">
            <img src={icon} alt={text} />
            <p>{text}</p>
        </div>
        <img src="./icons/right-arrow.svg" alt="Right arrow" />
    </div>
);

const Profile = () => {
    const navigate = useNavigate();

    return (
        <div className="profile-container">
            <div className="profile-title-block">
                <h1 className="profile-title">Профиль</h1>
            </div>
            <img className="profile-photo" src="./images/travel-prompt/2.jpg" alt="Profile photo" />
            <h2 className="nickname">Никнейм</h2>
            <h4 className="direct-nickname">@nickname</h4>
            <div className="profile-sections">
                <div className="profile-block">
                    <div className="profile-wrapper">
                        <img src="./icons/crown.svg" alt="Premium" />
                        <p>CONTELLA PRO</p>
                    </div>
                    <div className="profile-premium">
                        <p>Премиум подписка</p>
                        <img src="./icons/right-arrow-color.svg" alt="Right arrow" />
                    </div>
                </div>
                <div className="profile-double-block">
                    {/* <ProfileOption icon="./icons/earth.svg" text="Выбрать язык" /> */}
                    <ProfileOption icon="./icons/question.svg" text="Служба поддержки" />
                </div>
            </div>
        </div>
    );
};

export default Profile;
