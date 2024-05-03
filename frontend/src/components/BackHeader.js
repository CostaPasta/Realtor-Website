import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackButtonIcon from './locations/icons/back-button.png'
import '../components-css/BackHeader.css'

function BackHeader() {

    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(-1);
    };

    return (
        <div className="back-header-container">
            <div id="MBBv3_LoginPanel" className="back-login-panel"></div>
            <button className="back-button" onClick={handleBackButtonClick}>
                <img src={BackButtonIcon} alt="Back" />
            </button>
        </div>
    )
}

export default BackHeader;