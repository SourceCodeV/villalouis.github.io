import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { GalleryPage } from './pages/GalleryPage';
// import { InfoPage } from './pages/InfoPage';
// import { ContactPage } from './pages/ContactPage';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="app-shell">
      <Navbar />
      <main className={`app-main ${isHomePage ? 'home-main' : ''}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          {/* <Route path="/information" element={<InfoPage />} />
          <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App