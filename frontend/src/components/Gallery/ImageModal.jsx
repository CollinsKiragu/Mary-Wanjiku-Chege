// const ImageModal = ({ photo, onClose }) => {
//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         <button className="modal-close" onClick={onClose}>×</button>
//         <img src={photo.image_url} alt={photo.title} />
//         {photo.title && <div className="modal-title">{photo.title}</div>}
//       </div>
//     </div>
//   )
// }

// export default ImageModal

import { useEffect, useState } from 'react'
import './ImageModal.css'

const ImageModal = ({ photo, photoList, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Find current index in the full list
    const index = photoList.findIndex(p => p.id === photo.id)
    setCurrentIndex(index)
  }, [photo, photoList])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        navigatePrev()
      } else if (e.key === 'ArrowRight') {
        navigateNext()
      } else if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, photoList, onClose])

  const navigatePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const navigateNext = () => {
    if (currentIndex < photoList.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const currentPhoto = photoList[currentIndex]

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>×</button>
        
        {/* Navigation Buttons */}
        {currentIndex > 0 && (
          <button className="nav-btn nav-prev" onClick={navigatePrev}>
            ‹
          </button>
        )}
        
        {currentIndex < photoList.length - 1 && (
          <button className="nav-btn nav-next" onClick={navigateNext}>
            ›
          </button>
        )}
        
        {/* Image */}
        <div className="image-wrapper">
          <img 
            src={currentPhoto.image_url} 
            alt={currentPhoto.title || 'Gallery photo'}
            className="modal-image"
          />
        </div>
        
        {/* Photo Info */}
        {currentPhoto.title && (
          <div className="modal-info">
            <h3>{currentPhoto.title}</h3>
            <p>{currentIndex + 1} of {photoList.length}</p>
          </div>
        )}
        
        {/* Thumbnail Strip */}
        <div className="thumbnail-strip">
          {photoList.map((p, index) => (
            <button
              key={p.id}
              className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={p.image_url} alt="" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageModal