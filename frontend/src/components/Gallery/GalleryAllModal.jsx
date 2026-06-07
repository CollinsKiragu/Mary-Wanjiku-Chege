import './GalleryAllModal.css'

const GalleryAllModal = ({ photos, onClose, onImageClick }) => {
  return (
    <div className="gallery-all-modal-overlay" onClick={onClose}>
      <div className="gallery-all-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <h2>All Photos</h2>
        <p className="modal-subtitle">{photos.length} cherished memories</p>
        
        <div className="all-photos-grid">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className="all-photo-item"
              onClick={() => {
                onImageClick(photo)
              }}
            >
              <img 
                src={photo.image_url} 
                alt={photo.title || 'Gallery photo'}
                loading="lazy"
              />
              {photo.title && (
                <div className="all-photo-title">{photo.title}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GalleryAllModal