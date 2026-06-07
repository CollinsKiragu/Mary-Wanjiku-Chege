import { useState } from 'react'
import { galleryService } from '../../services/galleryService'
import './TributeModal.css'

const TributeModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    content: '',
    relationship: '',
    is_anonymous: false
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   setSubmitting(true)
    
  //   try {
  //     await galleryService.submitTribute(formData)
  //     setSubmitted(true)
  //     setTimeout(() => {
  //       onClose()
  //     }, 2000)
  //   } catch (error) {
  //     console.error('Error submitting tribute:', error)
  //     // Show the specific error message from the backend
  //     alert(`Failed to submit tribute: ${error.message}`)
  //   } finally {
  //     setSubmitting(false)
  //   }
  // }

    const handleSubmit = async (e) => {
      e.preventDefault()
      setSubmitting(true)
      
      // Create a copy of the form data
      const submitData = { ...formData }
      
      // If anonymous is checked, force the name to "Anonymous"
      if (submitData.is_anonymous) {
        submitData.name = 'Anonymous'
      }
      
      try {
        await galleryService.submitTribute(submitData)
        setSubmitted(true)
        setTimeout(() => {
          onClose()
        }, 2000)
      } catch (error) {
        console.error('Error submitting tribute:', error)
        // This will now show the EXACT database error if it fails again
        alert(`Failed to submit tribute: ${error.message}`)
      } finally {
        setSubmitting(false)
      }
    }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>×</button>
        
        {submitted ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>Tribute Submitted!</h3>
            <p>Thank you for sharing your memories. Your tribute will appear after approval.</p>
          </div>
        ) : (
          <>
            <h2>Add a Tribute</h2>
            <p className="modal-subtitle">Share your memories and condolences</p>
            
            <form onSubmit={handleSubmit} className="tribute-form">
              <div className="form-group">
                <label>Your Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required={!formData.is_anonymous}
                  disabled={formData.is_anonymous}
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label>Relationship</label>
                <input
                  type="text"
                  value={formData.relationship}
                  onChange={(e) => setFormData({...formData, relationship: e.target.value})}
                  placeholder="e.g., Friend, Colleague, Family"
                />
              </div>

              <div className="form-group">
                <label>Your Tribute *</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  required
                  maxLength={5000}
                  rows={6}
                  placeholder="Share your memories, prayers, or condolences..."
                />
                <div className="char-count">{formData.content.length}/5000</div>
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.is_anonymous}
                    onChange={(e) => setFormData({...formData, is_anonymous: e.target.checked})}
                  />
                  <span>Submit anonymously</span>
                </label>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={submitting}
              >
                {submitting ? 'Submitting...' : 'Submit Tribute'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default TributeModal