// import { useEffect, useState } from 'react'
// import { contentService } from '../../services/contentService'
// import './MapSection.css'

// const MapSection = () => {
//   const [details, setDetails] = useState([])

//   useEffect(() => {
//     const fetchDetails = async () => {
//       try {
//         const data = await contentService.getBurialDetails()
//         setDetails(data)
//       } catch (error) {
//         console.error('Error fetching burial details:', error)
//       }
//     }
//     fetchDetails()
//   }, [])

//   if (details.length === 0) return null

//   const detail = details[0]
  
//   if (!detail.latitude || !detail.longitude) return null

//   const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${detail.latitude},${detail.longitude}&zoom=15`

//   return (
//     <section className="map-section">
//       <div className="container">
//         <h2 className="section-title">Location Map</h2>
//         <div className="map-container">
//           <iframe
//             title="Service Location"
//             width="100%"
//             height="450"
//             style={{ border: 0, borderRadius: '10px' }}
//             loading="lazy"
//             allowFullScreen
//             src={`https://maps.google.com/maps?q=${detail.latitude},${detail.longitude}&hl=en&z=15&output=embed`}
//           ></iframe>
//         </div>
//         <div className="map-link">
//           <a 
//             href={`https://www.google.com/maps/dir/?api=1&destination=${detail.latitude},${detail.longitude}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="directions-button"
//           >
//             Get Directions
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default MapSection

import { useEffect, useState } from 'react'
import { contentService } from '../../services/contentService'
import './MapSection.css'

const MapSection = () => {
  const [details, setDetails] = useState([])

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await contentService.getBurialDetails()
        setDetails(data)
      } catch (error) {
        console.error('Error fetching burial details:', error)
      }
    }
    fetchDetails()
  }, [])

  if (details.length === 0) return null

  const detail = details[0]
  
  if (!detail.latitude || !detail.longitude) return null

  // Direct link for buttons
  const mapsLink = `https://www.google.com/maps/@${detail.latitude},${detail.longitude},17z?hl=en`

  return (
    <section className="map-section">
      <div className="container">
        <h2 className="section-title">Location Map</h2>
        <div className="map-container">
          <iframe
            title="Service Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3988.742974254686!2d36.777301774965814!3d-1.3302857986571015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1780812267881!5m2!1sen!2ske"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '10px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="map-actions">
          <a 
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="map-btn"
          >
            📍 Get Directions
          </a>
          <button 
            onClick={() => {
              navigator.clipboard.writeText(mapsLink)
              alert('Location link copied to clipboard!')
            }}
            className="map-btn secondary"
          >
            🔗 Copy Location Link
          </button>
        </div>
      </div>
    </section>
  )
}

export default MapSection