// import { useState } from 'react'
// import { v2 as cloudinary } from 'cloudinary'
// import './PhotoUpload.css'

// const PhotoUpload = ({ onClose, onUploadSuccess }) => {
//   const [uploading, setUploading] = useState(false)
//   const [selectedFile, setSelectedFile] = useState(null)
//   const [title, setTitle] = useState('')

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0])
//   }

//   const handleUpload = async () => {
//     if (!selectedFile) return
    
//     setUploading(true)
    
//     const formData = new FormData()
//     formData.append('file', selectedFile)
//     formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET)
//     formData.append('cloud_name', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME)
    
//     try {
//       const response = await fetch(
//         `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
//         {
//           method: 'POST',
//           body: formData
//         }
//       )
      
//       const data = await response.json()
      
//       // Send to backend
//       await fetch(`${import.meta.env.VITE_API_URL}/admin/photos`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           photo: {
//             image_url: data.secure_url,
//             cloudinary_id: data.public_id,
//             title: title,
//             approved: false // Requires admin approval
//           }
//         })
//       })
      
//       onUploadSuccess()
//     } catch (error) {
//       console.error('Upload error:', error)
//       alert('Failed to upload photo. Please try again.')
//     } finally {
//       setUploading(false)
//     }
//   }

//   return (
//     <div className="upload-modal-overlay" onClick={onClose}>
//       <div className="upload-modal" onClick={(e) => e.stopPropagation()}>
//         <button className="upload-close" onClick={onClose}>×</button>
//         <h2>Add Photos</h2>
//         <p>Share your cherished memories</p>
        
//         <div className="upload-form">
//           <div className="form-group">
//             <label>Photo Title (Optional)</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder="e.g., Family gathering 2020"
//             />
//           </div>
          
//           <div className="form-group">
//             <label>Select Photo</label>
//             <div className="file-input-wrapper">
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileChange}
//                 id="file-input"
//               />
//               <label htmlFor="file-input" className="file-input-label">
//                 {selectedFile ? selectedFile.name : 'Choose a file'}
//               </label>
//             </div>
//             <p className="file-hint">Images will be automatically optimized and resized</p>
//           </div>
          
//           {selectedFile && (
//             <div className="preview-section">
//               <img 
//                 src={URL.createObjectURL(selectedFile)} 
//                 alt="Preview" 
//                 className="preview-image"
//               />
//             </div>
//           )}
          
//           <button
//             onClick={handleUpload}
//             disabled={!selectedFile || uploading}
//             className="upload-submit-btn"
//           >
//             {uploading ? 'Uploading...' : 'Upload Photo'}
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PhotoUpload

// import { useState } from 'react'
// import './PhotoUpload.css'

// const PhotoUpload = ({ onClose, onUploadSuccess }) => {
//   const [uploading, setUploading] = useState(false)
//   const [selectedFile, setSelectedFile] = useState(null)
//   const [title, setTitle] = useState('')

//   const handleFileChange = (e) => {
//     const file = e.target.files[0]
//     if (file) {
//       // Validate file size (max 10MB)
//       if (file.size > 10 * 1024 * 1024) {
//         alert('File size must be less than 10MB')
//         return
//       }
//       setSelectedFile(file)
//     }
//   }

//   const handleUpload = async () => {
//     if (!selectedFile) return
    
//     setUploading(true)
    
//     const formData = new FormData()
//     formData.append('file', selectedFile)
//     formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET)
    
//     // Add transformation parameters
//     // These will be applied by Cloudinary automatically
//     formData.append('transformation', 'q_auto,f_auto,w_800,h_800,c_fill,g_auto')
    
//     try {
//       const response = await fetch(
//         `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
//         {
//           method: 'POST',
//           body: formData
//         }
//       )
      
//       const data = await response.json()
      
//       if (!data.secure_url) {
//         throw new Error('Upload failed')
//       }
      
//       // Get the transformed URL with our specifications
//       // Cloudinary applies transformations via URL parameters
//       const transformedUrl = data.secure_url.replace(
//         '/upload/',
//         '/upload/q_auto,f_auto,w_800,h_800,c_fill,g_auto/'
//       )
      
//       // Send to backend
//       const apiResponse = await fetch(`${import.meta.env.VITE_API_URL}/admin/photos`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           photo: {
//             image_url: transformedUrl,  // Save the transformed URL
//             cloudinary_id: data.public_id,
//             title: title,
//             approved: false // Requires admin approval
//           }
//         })
//       })
      
//       if (!apiResponse.ok) {
//         throw new Error('Failed to save photo to database')
//       }
      
//       onUploadSuccess()
//     } catch (error) {
//       console.error('Upload error:', error)
//       alert('Failed to upload photo. Please try again.')
//     } finally {
//       setUploading(false)
//     }
//   }

//   return (
//     <div className="upload-modal-overlay" onClick={onClose}>
//       <div className="upload-modal" onClick={(e) => e.stopPropagation()}>
//         <button className="upload-close" onClick={onClose}>×</button>
//         <h2>Add Photos</h2>
//         <p>Share your cherished memories</p>
        
//         <div className="upload-form">
//           <div className="form-group">
//             <label>Photo Title (Optional)</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder="e.g., Family gathering 2020"
//             />
//           </div>
          
//           <div className="form-group">
//             <label>Select Photo</label>
//             <div className="file-input-wrapper">
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileChange}
//                 id="file-input"
//               />
//               <label htmlFor="file-input" className="file-input-label">
//                 {selectedFile ? selectedFile.name : 'Choose a file'}
//               </label>
//             </div>
//             <p className="file-hint">
//               Images will be automatically optimized:<br/>
//               ✓ Quality auto-adjusted<br/>
//               ✓ Format optimized (WebP/JPEG)<br/>
//               ✓ Resized to 800x800px<br/>
//               ✓ Smart cropping (subject centered)
//             </p>
//           </div>
          
//           {selectedFile && (
//             <div className="preview-section">
//               <img 
//                 src={URL.createObjectURL(selectedFile)} 
//                 alt="Preview" 
//                 className="preview-image"
//               />
//             </div>
//           )}
          
//           <button
//             onClick={handleUpload}
//             disabled={!selectedFile || uploading}
//             className="upload-submit-btn"
//           >
//             {uploading ? 'Uploading & Optimizing...' : 'Upload Photo'}
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PhotoUpload


import { useState } from 'react'
import './PhotoUpload.css'

const PhotoUpload = ({ onClose, onUploadSuccess }) => {
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [selectedFile, setSelectedFile] = useState(null)
  const [title, setTitle] = useState('')

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB')
        return
      }
      
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file')
        return
      }
      
      setSelectedFile(file)
    }
  }

  const handleUpload = async () => {
    if (!selectedFile) return
    
    setUploading(true)
    setUploadProgress(10)
    
    try {
      // STEP 1: Upload to Cloudinary
      const formData = new FormData()
      formData.append('file', selectedFile)
      formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET)
      
      setUploadProgress(30)
      
      const cloudinaryResponse = await fetch(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formData
        }
      )
      
      if (!cloudinaryResponse.ok) {
        throw new Error('Failed to upload to Cloudinary')
      }
      
      const cloudinaryData = await cloudinaryResponse.json()
      setUploadProgress(60)
      
      // STEP 2: Create transformed URL with Cloudinary transformations
      // q_auto = auto quality, f_auto = auto format (WebP/JPEG)
      // w_800,h_800 = 800x800px, c_fill = crop to fill, g_auto = smart gravity (center on subject)
      // const transformedUrl = cloudinaryData.secure_url.replace(
      //   '/upload/',
      //   '/upload/q_auto,f_auto,w_800,h_800,c_fill,g_auto/'
      // )

      // STEP 2: Create transformed URL with Cloudinary transformations
      // More robust replacement that handles different URL formats
      let transformedUrl = cloudinaryData.secure_url

      // Check if transformations are already in the URL
      if (!transformedUrl.includes('q_auto')) {
        // Insert transformations after /upload/
        transformedUrl = transformedUrl.replace(
          /\/upload\/(v\d+\/)?/,
          '/upload/q_auto,f_auto,w_800,h_800,c_fill,g_auto/$1'
        )
      }
      
      // STEP 3: Save to backend database
      const apiResponse = await fetch(`${import.meta.env.VITE_API_URL}/public/photos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          photo: {
            image_url: transformedUrl,
            cloudinary_id: cloudinaryData.public_id,
            title: title,
            category: 'general'
          }
        })
      })
      
      setUploadProgress(90)
      
      if (!apiResponse.ok) {
        const errorData = await apiResponse.json()
        throw new Error(errorData.details?.join(', ') || 'Failed to save photo')
      }
      
      setUploadProgress(100)
      
      // Success!
      setTimeout(() => {
        onUploadSuccess()
      }, 500)
      
    } catch (error) {
      console.error('Upload error:', error)
      alert(`Failed to upload photo: ${error.message}`)
    } finally {
      setUploading(false)
      setUploadProgress(0)
    }
  }

  return (
    <div className="upload-modal-overlay" onClick={onClose}>
      <div className="upload-modal" onClick={(e) => e.stopPropagation()}>
        <button className="upload-close" onClick={onClose}>×</button>
        <h2>Add Photos</h2>
        <p>Share your cherished memories</p>
        
        <div className="upload-form">
          <div className="form-group">
            <label>Photo Title (Optional)</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Family gathering 2020"
              disabled={uploading}
            />
          </div>
          
          <div className="form-group">
            <label>Select Photo</label>
            <div className="file-input-wrapper">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                id="file-input"
                disabled={uploading}
              />
              <label htmlFor="file-input" className="file-input-label">
                {selectedFile ? selectedFile.name : '📷 Choose a file or drag here'}
              </label>
            </div>
            <p className="file-hint">
              Images will be automatically optimized:<br/>
              ✓ Quality auto-adjusted<br/>
              ✓ Format optimized (WebP/JPEG)<br/>
              ✓ Resized to 800x800px<br/>
              ✓ Smart cropping (subject centered)
            </p>
          </div>
          
          {selectedFile && (
            <div className="preview-section">
              <img 
                src={URL.createObjectURL(selectedFile)} 
                alt="Preview" 
                className="preview-image"
              />
            </div>
          )}
          
          {uploading && (
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${uploadProgress}%` }}
              ></div>
              <span className="progress-text">{uploadProgress}%</span>
            </div>
          )}
          
          <button
            onClick={handleUpload}
            disabled={!selectedFile || uploading}
            className="upload-submit-btn"
          >
            {uploading ? 'Uploading & Optimizing...' : 'Upload Photo'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PhotoUpload


// import { useEffect, useState } from 'react'
// import { galleryService } from '../../services/galleryService'
// import ImageModal from './ImageModal'
// import './Gallery.css'

// const Gallery = () => {
//   const [photos, setPhotos] = useState([])
//   const [selectedImage, setSelectedImage] = useState(null)

//   useEffect(() => {
//     const fetchPhotos = async () => {
//       try {
//         const data = await galleryService.getApprovedPhotos()
//         setPhotos(data)
//       } catch (error) {
//         console.error('Error fetching photos:', error)
//       }
//     }
//     fetchPhotos()
//   }, [])

//   return (
//     <section id="gallery" className="gallery-section">
//       <div className="container">
//         <h2 className="section-title">Photo Gallery</h2>
//         <h3 className="section-subtitle">Cherished Memories</h3>
        
//         {photos.length === 0 ? (
//           <p className="no-photos">Photos will be added soon.</p>
//         ) : (
//           <div className="gallery-grid">
//             {photos.map((photo) => (
//               <div 
//                 key={photo.id} 
//                 className="gallery-item"
//                 onClick={() => setSelectedImage(photo)}
//               >
//                 <img src={photo.image_url} alt={photo.title} />
//                 {photo.title && <div className="photo-title">{photo.title}</div>}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {selectedImage && (
//         <ImageModal 
//           photo={selectedImage} 
//           onClose={() => setSelectedImage(null)} 
//         />
//       )}
//     </section>
//   )
// }

// export default Gallery

// import { useEffect, useState } from 'react'
// import { galleryService } from '../../services/galleryService'
// import ImageModal from './ImageModal'
// import PhotoUpload from './PhotoUpload'
// import './Gallery.css'

// const Gallery = () => {
//   const [photos, setPhotos] = useState([])
//   const [selectedImage, setSelectedImage] = useState(null)
//   const [showUpload, setShowUpload] = useState(false)

//   useEffect(() => {
//     fetchPhotos()
//   }, [])

//   const fetchPhotos = async () => {
//     try {
//       const data = await galleryService.getApprovedPhotos()
//       setPhotos(data)
//     } catch (error) {
//       console.error('Error fetching photos:', error)
//     }
//   }

//   const handlePhotoUploaded = () => {
//     fetchPhotos()
//     setShowUpload(false)
//   }

//   return (
//     <section id="gallery" className="gallery-section">
//       <div className="container">
//         <h2 className="section-title">Photo Gallery</h2>
//         <h3 className="section-subtitle">Cherished Memories</h3>
        
//         <div className="gallery-header">
//           <button 
//             onClick={() => setShowUpload(true)}
//             className="upload-btn"
//           >
//             📷 Add Photos
//           </button>
//         </div>
        
//         {photos.length === 0 ? (
//           <p className="no-photos">Photos will be added soon.</p>
//         ) : (
//           <div className="gallery-grid">
//             {photos.map((photo) => (
//               <div 
//                 key={photo.id} 
//                 className="gallery-item"
//                 onClick={() => setSelectedImage(photo)}
//               >
//                 <img 
//                   src={photo.image_url} 
//                   alt={photo.title || 'Gallery photo'}
//                   loading="lazy"  // This enables lazy loading
//                 />
//                 {photo.title && <div className="photo-title">{photo.title}</div>}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {selectedImage && (
//         <ImageModal 
//           photo={selectedImage} 
//           onClose={() => setSelectedImage(null)} 
//         />
//       )}

//       {showUpload && (
//         <PhotoUpload 
//           onClose={() => setShowUpload(false)}
//           onUploadSuccess={handlePhotoUploaded}
//         />
//       )}
//     </section>
//   )
// }

// export default Gallery

import { useEffect, useState } from 'react'
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

  useEffect(() => {
    fetchPhotos()
  }, [])

  const fetchPhotos = async () => {
    try {
      const data = await galleryService.getApprovedPhotos()
      setPhotos(data)
      // Show first 8 photos (2 rows of 4)
      setInitialPhotos(data.slice(0, 8))
    } catch (error) {
      console.error('Error fetching photos:', error)
    }
  }

  const handlePhotoUploaded = () => {
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