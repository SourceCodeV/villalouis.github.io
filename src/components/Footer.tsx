import './Footer.css'; // For styling
import seaIcon from '../assets/pictogram/zee.png';
import roomsIcon from '../assets/pictogram/accomodatie_nummer.png';
import bathIcon from '../assets/pictogram/slaap_badkamers_nummer.png';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-pictograms" aria-label="Villa pictograms">
        <img src={roomsIcon} alt="Accommodation capacity pictogram" />
        <img src={bathIcon} alt="Bedrooms and bathrooms pictogram" />
        <img src={seaIcon} alt="Sea distance pictogram" />
      </div>
      <div className="footer-social" aria-label="Social media links">
        <a href="https://www.facebook.com/people/Villa-Louis-Westende/61587574167665/" 
           target="_blank" 
           rel="noopener noreferrer"
           className="social-button">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="social-button-icon">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          <span>Facebook</span>
        </a>
        <a href="https://www.instagram.com/villalouiswestende/" 
           target="_blank" 
           rel="noopener noreferrer"
           className="social-button">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="social-button-icon">
            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.779.263-1.618.558-2.353 1.294-.735.735-1.03 1.574-1.293 2.353-.266.788-.467 1.659-.527 2.937C.04 8.333.024 8.74 0 12c0 3.26.015 3.667.072 4.947.06 1.277.261 2.148.527 2.936.264.787.56 1.626 1.295 2.361.735.735 1.575 1.03 2.354 1.293.787.266 1.657.467 2.934.527 1.28.058 1.687.072 4.947.072s3.667-.015 4.947-.072c1.277-.06 2.148-.261 2.936-.527.787-.263 1.626-.558 2.361-1.293.735-.735 1.03-1.574 1.294-2.353.266-.788.467-1.659.527-2.937.058-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.261-2.148-.527-2.936-.263-.787-.558-1.626-1.294-2.361-.735-.735-1.575-1.03-2.354-1.293-.787-.266-1.657-.467-2.934-.527-1.28-.058-1.687-.072-4.947-.072zM12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.243 2.227.403.56.217 1.001.48 1.44.94.46.438.723.88.94 1.439.16.422.35 1.057.404 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.243 1.805-.403 2.227-.217.56-.48 1.001-.94 1.44-.438.46-.88.723-1.439.94-.422.16-1.057.35-2.227.404-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.243-2.227-.403-.56-.217-1.001-.48-1.44-.94-.46-.438-.723-.88-.94-1.439-.16-.422-.35-1.057-.404-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.243-1.805.403-2.227.217-.56.48-1.001.94-1.44.438-.46.88-.723 1.439-.94.422-.16 1.057-.35 2.227-.404 1.266-.058 1.646-.07 4.85-.07zm0 3.678A6.162 6.162 0 1 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm4.965-10.322a1.44 1.44 0 1 1 2.036-2.036 1.44 1.44 0 0 1-2.036 2.036z"/>
          </svg>
          <span>Instagram</span>
        </a>
      </div>
    </footer>
  );
}