import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

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
                    <div className="profile-double-wrapper">
                        <div className="profile-double-text">
                            <img src="./icons/earth.svg" alt="Language" />
                            <p>Выбрать язык</p>
                        </div>
                        <img src="./icons/right-arrow.svg" alt="Right arrow" />
                    </div>
                    <div className="profile-double-wrapper">
                        <div className="profile-double-text">
                            <img src="./icons/question.svg" alt="Language" />
                            <p>Служба поддержки</p>
                        </div>
                        <img src="./icons/right-arrow.svg" alt="Right arrow" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
