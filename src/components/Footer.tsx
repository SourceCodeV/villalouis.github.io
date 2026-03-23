import './Footer.css'; // For styling

export function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} The Beach Escape. All rights reserved.</p>
      <p>Your Address, Beach Town</p>
    </footer>
  );
}