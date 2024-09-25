import React from 'react';
import '../components-css/ErrorPage.css'; // Create a separate CSS file for styling

function ErrorPage() {
  const handleGoHome = () => {
    window.location.href = '/'; // Redirect and refresh
  };

  return (
    <div className="error-container">
      <h1 className="error-title">404</h1>
      <p className="error-message">Oops! The page you're looking for doesn't exist.</p>
      <button onClick={handleGoHome} className="error-link">Go back to Homepage</button>
    </div>
  );
}

export default ErrorPage;
