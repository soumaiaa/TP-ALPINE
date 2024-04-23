import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home'; 
import Configurator from './Configurator';
import Summary from './Summary';
import Footer from './Footer';
import '../styles/App.css';
import FindDealer from './FindDealer';
import VersionSelection from './VersionSelection';
import Reserver from './Reserver';
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/configurator" element={<Configurator />} />
          <Route path="/summary" element={<Summary />} />          
          <Route path="/version-selection" element={ <VersionSelection />} />
          <Route path="/find-dealer" element={ <FindDealer /> } />
          <Route path="/Reserver" element={<Reserver />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



