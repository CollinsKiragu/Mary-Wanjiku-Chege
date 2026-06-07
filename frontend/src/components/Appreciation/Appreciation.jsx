import { useEffect, useState } from 'react'
import { galleryService } from '../../services/galleryService'
import './Appreciation.css'

const Appreciation = () => {
  const [tributes, setTributes] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  // Fetch tributes on load
  useEffect(() => {
    const fetchTributes = async () => {
      try {
        const data = await galleryService.getApprovedTributes()
        setTributes(data)
      } catch (error) {
        console.error('Error fetching tributes:', error)
      }
    }
    fetchTributes()
  }, [])

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (tributes.length <= 1) return // No need to rotate if 0 or 1 tribute

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === tributes.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // 5000ms = 5 seconds

    // Cleanup interval to prevent memory leaks
    return () => clearInterval(interval)
  }, [tributes.length])

  // Show placeholder if no tributes exist yet
  if (tributes.length === 0) {
    return (
      <section id="appreciation" className="appreciation-section">
        <div className="container">
          <h2 className="section-title">Tributes & Appreciation</h2>
          <h3 className="section-subtitle">Words from Loved Ones</h3>
          <p className="no-tributes">Tributes will be displayed here once submitted and approved.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="appreciation" className="appreciation-section">
      <div className="container">
        <h2 className="section-title">Tributes & Appreciation</h2>
        <h3 className="section-subtitle">Words from Loved Ones</h3>
        
        {/* Auto-Sliding Container */}
        <div className="auto-slider-container">
          <div 
            className="auto-slider-track" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {tributes.map((tribute) => (
              <div key={tribute.id} className="tribute-slide">
                <div className="tribute-card-inner">
                  <div className="tribute-header">
                    <h4>{tribute.name}</h4>
                    {tribute.relationship && (
                      <span className="relationship">{tribute.relationship}</span>
                    )}
                  </div>
                  
                  <p className="tribute-content">"{tribute.content}"</p>
                  
                  <div className="tribute-date">
                    {new Date(tribute.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators (Users can still click these to jump to a specific tribute) */}
        <div className="slider-dots">
          {tributes.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`View tribute ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Appreciation