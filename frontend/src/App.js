import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PropertyDetails from './components/PropertyDetails';
import Search_Results from './components/Search_Results';
import West_Palm_Beach from './components/locations/West_Palm_Beach';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing-details" element={<PropertyDetails />} />
        <Route path="/listing-results" element={<Search_Results />} />
        {/* Define the route with a parameter */}
        <Route path="/west-palm-beach" element={<West_Palm_Beach/>} />
        {/* You can keep or remove the separate Listings and Contact routes based on your needs */}
      </Routes>
    </Router>
  );
}

export default App;
