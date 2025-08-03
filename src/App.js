import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GuitarBrandsPage from './pages/GuitarBrandsPage';
import GuitarModelsPage from './pages/GuitarModelsPage';
import GuitarDetailsPage from './pages/GuitarDetailsPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/brands" />} />
        <Route path="/brands" element={<GuitarBrandsPage />} />
        <Route path="/brands/:brandId/models" element={<GuitarModelsPage />} />
        <Route path="/brands/:brandId/models/:modelId" element={<GuitarDetailsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
