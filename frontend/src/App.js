import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PropertyDetails from './components/PropertyDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" component={PropertyDetails} />
        {/* You can keep or remove the separate Listings and Contact routes based on your needs */}
      </Routes>
    </Router>
  );
}

export default App;
