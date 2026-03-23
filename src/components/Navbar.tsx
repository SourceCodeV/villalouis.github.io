import { NavLink } from 'react-router-dom';
import './Navbar.css'; // We'll create this file for styling

export function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">The Beach Escape</NavLink>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active' : '')}>Gallery</NavLink>
        <NavLink to="/information" className={({ isActive }) => (isActive ? 'active' : '')}>Info & Booking</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
      </div>
    </nav>
  );
}