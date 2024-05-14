import { useState, useEffect } from 'react';

const useGoogleTranslate = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const checkGoogleTranslate = (retryCount = 0) => {
      const select = document.querySelector('select.goog-te-combo');
      if (select) {
        setIsInitialized(true);
      } else if (retryCount < 5) {
        setTimeout(() => checkGoogleTranslate(retryCount + 1), 1000);
      } else {
        console.error('Google Translate select element not found after multiple attempts');
      }
    };

    if (window.google && window.google.translate) {
      window.googleTranslateElementInit();
      checkGoogleTranslate();
    } else {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.onload = () => {
        if (window.googleTranslateElementInit) {
          window.googleTranslateElementInit();
        }
        checkGoogleTranslate();
      };
      document.body.appendChild(script);
    }
  }, []);

  return isInitialized;
};

export default useGoogleTranslate;
