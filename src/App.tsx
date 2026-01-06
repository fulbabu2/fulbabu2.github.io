import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Placeholder Pages
import Home from './pages/Home';

import Research from './pages/Research';
// import People from './pages/People'; // Deprecated
import PiProfile from './pages/PiProfile';
import Team from './pages/Team';
import Publications from './pages/Publications';

import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            {/* Split People Page Routes */}
            <Route path="/people" element={<Navigate to="/people/team" replace />} />
            <Route path="/people/pi" element={<PiProfile />} />
            <Route path="/people/team" element={<Team />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
