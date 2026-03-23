import './HomePage.css'; // For styling
import heroImage from '../assets/hero-background.jpeg'; 

export function HomePage() {
  return (
    <div className="home-page" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        <h1>Eindelijk ruimte voor iedereen.</h1>
        <p>Binnenkort: Vakantiewoning voor families en vriendgroepen tot 12 personen in Westende-Bad.</p>
        <a href="https://www.facebook.com/people/Villa-Louis-Westende/61587574167665/" className="cta-button" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://www.instagram.com/villalouiswestende/" className="cta-button" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </div>
  );
}

