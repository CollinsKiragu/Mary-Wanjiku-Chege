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
      // This ensures all images are optimized
      let transformedUrl = cloudinaryData.secure_url
      
      // Check if transformations are already in the URL
      if (!transformedUrl.includes('q_auto')) {
        // Insert transformations after /upload/
        transformedUrl = transformedUrl.replace(
          /\/upload\/(v\d+\/)?/,
          '/upload/q_auto,f_auto,w_800,h_800,c_fill,g_auto/$1'
        )
      }
      
      console.log('Transformed URL:', transformedUrl)
      
      // STEP 3: Save to backend database (auto-approved)
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
      
      const result = await apiResponse.json()
      console.log('Photo saved:', result)
      
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