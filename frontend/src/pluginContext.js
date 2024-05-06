// PluginContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const PluginContext = createContext();

export const usePlugins = () => useContext(PluginContext);

export const PluginProvider = ({ children }) => {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    const checkReady = () => {
      if (window.MBB && window.MBB.googleMaps) {
        setReady(true);
        console.log('Plugins are ready');
      } else {
        setTimeout(checkReady, 100); // Check every 100ms
      }
    };

    checkReady();
  }, []);

  return (
    <PluginContext.Provider value={{ isReady }}>
      {children}
    </PluginContext.Provider>
  );
};
