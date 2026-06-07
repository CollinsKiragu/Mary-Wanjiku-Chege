import { useEffect, useState } from 'react'
import { contentService } from '../../services/contentService'
import './Footer.css'

const Footer = () => {
  const [settings, setSettings] = useState({})

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await contentService.getSiteSettings()
        setSettings(data)
      } catch (error) {
        console.error('Error fetching settings:', error)
      }
    }
    fetchSettings()
  }, [])

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          
          {/* Column 1: Memorial Info */}
          <div className="footer-section">
            <h3>In Loving Memory</h3>
            <p className="footer-name">{settings.deceased_name}</p>
            <p className="footer-dates">
              {settings.birth_date} - {settings.death_date}
            </p>
          </div>
          
          {/* Column 2: Quick Links (Split into 2 sub-columns) */}
          <div className="footer-section footer-section-wide">
            <h3>Quick Links</h3>
            <div className="quick-links-grid">
              <ul className="footer-links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#eulogy">Eulogy</a></li>
                <li><a href="#gallery">Gallery</a></li>
              </ul>
              <ul className="footer-links">
                <li><a href="#burial">Service Details</a></li>
                <li><a href="#contribute">Contribute</a></li>
                <li><a href="#appreciation">Tributes</a></li>
              </ul>
            </div>
          </div>
          
          {/* Column 3: Contact */}
          <div className="footer-section">
            <h3>Contact</h3>
            <div className="footer-contact">
              {settings.contact_email && (
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <a href={`mailto:${settings.contact_email}`}>
                    {settings.contact_email}
                  </a>
                </div>
              )}
              {settings.contact_phone && (
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <a href={`tel:${settings.contact_phone}`}>
                    {settings.contact_phone}
                  </a>
                </div>
              )}
            </div>
          </div>
          
        </div>
        
        <div className="footer-message">
          <p>Forever in our hearts • Always in our memories</p>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} - Created with love and remembrance</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer