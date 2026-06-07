import { useEffect, useState, useCallback } from 'react'
import { galleryService } from '../../services/galleryService'
import ImageModal from './ImageModal'
import PhotoUpload from './PhotoUpload'
import GalleryAllModal from './GalleryAllModal'
import './Gallery.css'

const Gallery = () => {
  const [photos, setPhotos] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)
  const [showUpload, setShowUpload] = useState(false)
  const [showAllModal, setShowAllModal] = useState(false)
  const [initialPhotos, setInitialPhotos] = useState([])

  const fetchPhotos = useCallback(async () => {
    try {
      const data = await galleryService.getApprovedPhotos()
      setPhotos(data)
      // Show first 8 photos (2 rows of 4)
      setInitialPhotos(data.slice(0, 8))
    } catch (error) {
      console.error('Error fetching photos:', error)
    }
  }, [])

  useEffect(() => {
    fetchPhotos()
    
    // Auto-refresh every 30 seconds to catch new uploads
    const interval = setInterval(fetchPhotos, 30000)
    
    return () => clearInterval(interval)
  }, [fetchPhotos])

  const handlePhotoUploaded = () => {
    // Immediately fetch new photos after upload
    fetchPhotos()
    setShowUpload(false)
  }

  const handleImageClick = (photo, photoList) => {
    setSelectedImage({
      photo,
      photoList,
      onClose: () => setSelectedImage(null)
    })
  }

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-title">Photo Gallery</h2>
        <h3 className="section-subtitle">Cherished Memories</h3>
        
        <div className="gallery-header">
          <button 
            onClick={() => setShowUpload(true)}
            className="upload-btn"
          >
            📷 Add Photos
          </button>
        </div>
        
        {photos.length === 0 ? (
          <p className="no-photos">Photos will be added soon.</p>
        ) : (
          <>
            {/* Initial View - First 8 photos (2 rows of 4) */}
            <div className="gallery-grid initial-grid">
              {initialPhotos.map((photo) => (
                <div 
                  key={photo.id} 
                  className="gallery-item"
                  onClick={() => handleImageClick(photo, initialPhotos)}
                >
                  <img 
                    src={photo.image_url} 
                    alt={photo.title || 'Gallery photo'}
                    loading="lazy"
                  />
                  {photo.title && <div className="photo-title">{photo.title}</div>}
                </div>
              ))}
            </div>
            
            {/* View All Button */}
            {photos.length > 8 && (
              <div className="view-all-container">
                <button 
                  onClick={() => setShowAllModal(true)}
                  className="view-all-btn"
                >
                  View All Images ({photos.length})
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Single Image Modal */}
      {selectedImage && (
        <ImageModal 
          photo={selectedImage.photo}
          photoList={selectedImage.photoList}
          onClose={selectedImage.onClose}
        />
      )}

      {/* Upload Modal */}
      {showUpload && (
        <PhotoUpload 
          onClose={() => setShowUpload(false)}
          onUploadSuccess={handlePhotoUploaded}
        />
      )}

      {/* View All Modal */}
      {showAllModal && (
        <GalleryAllModal 
          photos={photos}
          onClose={() => setShowAllModal(false)}
          onImageClick={(photo) => handleImageClick(photo, photos)}
        />
      )}
    </section>
  )
}

export default Gallery