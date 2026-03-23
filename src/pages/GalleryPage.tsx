import './GalleryPage.css';

// Import all your images here
import img1 from '../assets/image-1.jpeg';
import img2 from '../assets/image-2.jpeg';
import img3 from '../assets/image-3.jpeg';
import img4 from '../assets/image-4.jpeg';
import img5 from '../assets/image-5.jpeg'; // Example image, replace with your own
 // Example image
// ... add as many as you like

const images = [
    { id: 1, src: img1, alt: 'View from the deck' },
    { id: 2, src: img2, alt: 'Living room with ocean view' },
    { id: 3, src: img3, alt: 'Master bedroom' },
    { id: 4, src: img4, alt: 'Image1' }, 
    { id: 5, src: img5, alt: 'Image2' },

    // Example image
  // ...
];

export function GalleryPage() {
  return (
    <div className="page-container">
      <h2>Gallery</h2>
      <p>Take a look around our beautiful property.</p>
      <div className="gallery-grid">
        {images.map(image => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}