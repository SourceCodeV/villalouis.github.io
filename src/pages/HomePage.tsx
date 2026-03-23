import './HomePage.css'; // For styling
import heroImage from '../assets/hero-background.jpeg'; 

export function HomePage() {
  return (
    <div className="home-page" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        <h1>Your Seaside Sanctuary Awaits</h1>
        <p>Unwind, relax, and create memories by the shore.</p>
        <a href="YOUR_RESERVATION_LINK_HERE" className="cta-button" target="_blank" rel="noopener noreferrer">
          Book Your Stay
        </a>
      </div>
    </div>
  );
}