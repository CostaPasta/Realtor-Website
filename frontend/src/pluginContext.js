import React, { createContext, useContext, useEffect, useState } from 'react';

const PluginContext = createContext({ isLoaded: false });

export const usePlugin = () => useContext(PluginContext);

export const PluginProvider = ({ children }) => {
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        // Check if the plugin is correctly loaded
        const checkPluginLoaded = () => {
            if (window.MBB && window.MBB.ready) {
                setLoaded(true);
                console.log('Buying Buddy plugin is ready.');
            } else {
                console.error('Buying Buddy plugin is not ready.');
            }
        };

        // You might want to set up a more robust checking mechanism or event listeners
        // related to the plugin's readiness if the API allows
        window.setTimeout(checkPluginLoaded, 1000); // Check after 1 second

        return () => {
            // Clean up if necessary, but avoid unloading the plugin script
        };
    }, []);

    return (
        <PluginContext.Provider value={{ isLoaded }}>
            {children}
        </PluginContext.Provider>
    );
};
