import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import PropertyDetails from './components/PropertyDetails';
import SearchResults from './components/SearchResults';
import ListingResultsWidget from './components/ListingResultsWidget';

//LOCATIONS
import PalmBeach from './components/locations/PalmBeach';
import WestPalmBeach from './components/locations/WestPalmBeach';
import PalmBeachGardens from './components/locations/PalmBeachGardens';
import Wellington from './components/locations/Wellington';
import Jupiter from './components/locations/Jupiter';
import BocaRaton from './components/locations/BocaRaton';
import DelrayBeach from './components/locations/DelrayBeach';
import BoyntonBeach from './components/locations/BoyntonBeach';
import Broward from './components/locations/Broward';
import TermsOfService from './components/TermsOfService';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing-details" element={<PropertyDetails />} />
        <Route path="/listing-results" element={<SearchResults />} />
        <Route path="/listing-results/:city" element={<ListingResultsWidget />} />
        <Route path="/PalmBeach" element={<PalmBeach/>} />
        <Route path="/PalmBeachGardens" element={<PalmBeachGardens/>}/>
        <Route path="/WestPalmBeach" element={<WestPalmBeach/>} />
        <Route path="/Wellington" element={<Wellington/>} />
        <Route path="/Jupiter" element={<Jupiter/>} />
        <Route path="/BocaRaton" element={<BocaRaton/>} />
        <Route path="/DelrayBeach" element={<DelrayBeach/>} />
        <Route path="/BoyntonBeach" element={<BoyntonBeach/>} />
        <Route path="/Broward" element={<Broward/>} />
        {/* <Route path="/contact/" element={<Contact/>} /> */}
        <Route path="/TermsOfService" element={<TermsOfService/>} />
      </Routes>
    </Router>
  );
}

export default App;
