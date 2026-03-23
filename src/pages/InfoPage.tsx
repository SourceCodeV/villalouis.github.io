import './InfoPage.css';

export function InfoPage() {
  return (
    <div className="page-container info-page">
      <h2>Information and Booking</h2>
      <div className="info-content">
        <div className="info-text">
          <h3>About The Property</h3>
          <p>
            Welcome to The Beach Escape, your home away from home. Located just steps from the sand, our house offers stunning ocean views... 
            {/* Add more background info here */}
          </p>
          <h3>Amenities</h3>
          <ul>
            <li>3 Bedrooms, 2 Bathrooms</li>
            <li>Fully equipped kitchen</li>
            <li>High-speed Wi-Fi</li>
            <li>Private deck with BBQ</li>
          </ul>
          <h3>Pricing</h3>
          <p>Starting from **$300/night**. Please check our reservation page for availability and seasonal rates.</p>
          <a href="YOUR_RESERVATION_LINK_HERE" className="cta-button" target="_blank" rel="noopener noreferrer">
            Check Availability & Book
          </a>
        </div>
        <div className="info-map">
          <h3>Location</h3>
          <div className="map-container">
            {/* Paste your Google Maps embed code below */}
            <iframe
              src="https://www.google.com/maps/place/Badenlaan+34,+8434+Middelkerke/@51.1663211,2.7778779,19z/data=!3m1!4b1!4m6!3m5!1s0x47dca4bd4709669f:0xe5b784b5065711cd!8m2!3d51.1663203!4d2.7785216!16s%2Fg%2F11c5p49t_p?entry=ttu&g_ep=EgoyMDI1MDcyMi4wIKXMDSoASAFQAw%3D%3D"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <a href="YOUR_FULL_Maps_LINK" target="_blank" rel="noopener noreferrer">
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}