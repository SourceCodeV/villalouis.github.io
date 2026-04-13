import './GalleryPage.css';
import { useEffect, useState } from 'react';

export function GalleryPage() {
  const [images, setImages] = useState<{ id: string; src: string; alt: string }[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const imageModules = import.meta.glob('../assets/images/gallery/*.{jpg,jpeg,png,gif,webp}', { eager: true });
      const loadedImages = Object.entries(imageModules)
        .map(([_path, module], index) => ({
          id: `gallery-${index}`,
          src: (module as { default: string }).default,
          alt: `Gallery image ${index + 1}`
        }))
        .sort((a, b) => a.id.localeCompare(b.id));
      
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  return (
    <div className="gallery-page">
      <div className="page-container">
        <div className="gallery-grid">
          {images.map(image => (
            <div key={image.id} className="gallery-item">
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}