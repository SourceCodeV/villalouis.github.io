import './HomePage.css'; // For styling
import logo from '../assets/logos/Logo.webp';
import homeFront from '../assets/images/home_front.jpg';

export function HomePage() {
  return (
    <section className="home-page" aria-label="Villa Louis Westende homepage">
      <div className="home-content">
        <img className="home-logo" src={logo} alt="Villa Louis Westende logo" loading="eager" decoding="async" fetchPriority="high" />
        <div className="home-image-frame">
          <img className="home-front-image" src={homeFront} alt="Front view of Villa Louis in Westende" loading="eager" decoding="async" />
        </div>
        <div className="home-copy">
          <h1>Eindelijk ruimte voor iedereen.</h1>
          <p>Binnenkort: Vakantiewoning voor families en vriendengroepen tot 12 personen in Westende-Bad.</p>
        </div>
      </div>
    </section>
  );
}

