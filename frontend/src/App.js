import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import PropertyDetails from './components/PropertyDetails';
import SearchResults from './components/SearchResults';
// import West_Palm_Beach from './components/locations/West_Palm_Beach';
//LOCATIONS
import PalmBeach from './components/locations/PalmBeach';
import ListingResultsWidget from './components/ListingResultsWidget';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing-details" element={<PropertyDetails />} />
        <Route path="/listing-results" element={<SearchResults />} />
        <Route path="/listing-results/:city" element={<ListingResultsWidget />} />
        <Route path="/PalmBeach" element={<PalmBeach/>} />
        <Route path="/contact/" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
