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
    </footer>
  );
}