import React, { useState, useEffect } from "react";
import BackButtonIcon from './locations/icons/back-button.png'
import '../components-css/BackHeader.css'

function BackHeader() {
    const [pluginLoaded, setPluginLoaded] = useState(true);

    useEffect(() => {
        // Wait for a reasonable time to let the plugin load (e.g., 5 seconds)
        const timeout = setTimeout(() => {
            const loginPanel = document.getElementById('MBBv3_LoginPanel');
            if (!loginPanel || loginPanel.innerHTML.trim() === "") {
                setPluginLoaded(false); // Mark as not loaded if content is empty
            }
        }, 5000); // 5 seconds

        return () => clearTimeout(timeout); // Cleanup timeout on component unmount
    }, []);

    const handleBackButtonClick = () => {
        window.location.href = "/"; // Navigate to the home page and refresh it
    };

    return (
        <div className="back-header-container">
            {pluginLoaded ? (
                <div id="MBBv3_LoginPanel" className="login-panel"></div>
            ) : (
                <div className="plugin-error-message">
                    Plugin not loaded, reload page!
                </div>
            )}
            {/* <button className="back-button" onClick={handleBackButtonClick}>
                <img src={BackButtonIcon} alt="Back" />
            </button> */}
        </div>
    );
}

export default BackHeader;
