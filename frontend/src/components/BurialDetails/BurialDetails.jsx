// import { useEffect, useState } from 'react'
// import { contentService } from '../../services/contentService'
// import './BurialDetails.css'

// const BurialDetails = () => {
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

//   return (
//     <section id="burial" className="burial-section">
//       <div className="container">
//         <h2 className="section-title">Service Details</h2>
//         <div className="burial-card">
//           <h3>{detail.title}</h3>
//           <div className="detail-item">
//             <strong>Date:</strong> {detail.service_date}
//           </div>
//           <div className="detail-item">
//             <strong>Time:</strong> {new Date(detail.service_time).toLocaleTimeString('en-US', { 
//               hour: '2-digit', 
//               minute: '2-digit' 
//             })}
//           </div>
//           <div className="detail-item">
//             <strong>Venue:</strong> {detail.venue_name}
//           </div>
//           <div className="detail-item">
//             <strong>Address:</strong> {detail.venue_address}
//           </div>
//           {detail.directions && (
//             <div className="detail-item">
//               <strong>Directions:</strong> {detail.directions}
//             </div>
//           )}
//           {detail.additional_info && (
//             <div className="detail-item additional">
//               {detail.additional_info}
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default BurialDetails

// import { useEffect, useState } from 'react'
// import { contentService } from '../../services/contentService'
// import './BurialDetails.css'

// const BurialDetails = () => {
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

  // Create Google Maps link
  // https://www.google.com/maps/@-1.3302858,36.7773018,17z?hl=en&entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D
  // const mapsLink = `https://www.google.com/maps/dir/?api=1&destination=${detail.latitude},${detail.longitude}`

//   const mapsLink = `https://www.google.com/maps/@-1.3302858,36.7773018,17z?hl=en&entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D`

//   return (
//     <section id="burial" className="burial-section">
//       <div className="container">
//         <h2 className="section-title">Service Details</h2>
//         <div className="burial-card">
//           <h3>{detail.title}</h3>
          
//           <div className="detail-grid">
//             <div className="detail-item">
//               <div className="detail-icon">📅</div>
//               <div className="detail-content">
//                 <strong>Date</strong>
//                 <span>{detail.service_date}</span>
//               </div>
//             </div>
            
//             <div className="detail-item">
//               <div className="detail-icon">🕐</div>
//               <div className="detail-content">
//                 <strong>Time</strong>
//                 <span>{new Date(detail.service_time).toLocaleTimeString('en-US', { 
//                   hour: '2-digit', 
//                   minute: '2-digit' 
//                 })}</span>
//               </div>
//             </div>
            
//             <div className="detail-item full-width">
//               <div className="detail-icon">📍</div>
//               <div className="detail-content">
//                 <strong>Venue</strong>
//                 <span>{detail.venue_name}</span>
//               </div>
//             </div>
            
//             <div className="detail-item full-width">
//               <div className="detail-icon">🏠</div>
//               <div className="detail-content">
//                 <strong>Address</strong>
//                 <span>{detail.venue_address}</span>
//               </div>
//             </div>
            
//             {detail.directions && (
//               <div className="detail-item full-width">
//                 <div className="detail-icon">🗺️</div>
//                 <div className="detail-content">
//                   <strong>Directions</strong>
//                   <span>{detail.directions}</span>
//                 </div>
//               </div>
//             )}
//           </div>
          
//           {detail.additional_info && (
//             <div className="additional-info">
//               {detail.additional_info}
//             </div>
//           )}
          
//           <div className="location-actions">
//             <a 
//               href={mapsLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="location-btn"
//             >
//               📍 Get Directions
//             </a>
//             <button 
//               onClick={() => {
//                 navigator.clipboard.writeText(mapsLink)
//                 alert('Location link copied to clipboard!')
//               }}
//               className="location-btn secondary"
//             >
//               🔗 Copy Location Link
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default BurialDetails



import { useEffect, useState } from 'react'
import './BurialDetails.css'

const BurialDetails = () => {
  // We use state to track which event is currently being viewed
  const [activeTab, setActiveTab] = useState('funeral_home')

  // Data for the two events (You can update the Cemetery details later)
  const eventData = activeTab === 'funeral_home' 
    ? {
        title: 'Viewing of the Body',
        service_date: '2026-06-09',
        service_time: '07:00:00',
        venue_name: 'Montezuma Monalisa Funeral Home',
        venue_address: 'Raila Odinga Way (formerly Mbagathi Way), Nairobi',
        latitude: -1.3119237,
        longitude: 36.807305,
        directions: 'Situated opposite the Forces Memorial Hospital and right next to Umash Funeral Home.',
        additional_info: 'Cortège leaves Montezuma Funeral Home for Lang\'ata Cemetery, where the church service and burial will take place.',
      }
    : {
        title: 'Burial Service at Lang\'ata Cemetery',
        service_date: '2026-06-09', // <-- Update this later
        service_time: '10:00:00',   // <-- Update this later
        venue_name: 'Lang\'ata Cemetery',
        venue_address: 'Off Lang\'ata Road, Nairobi City',
        latitude: -1.33269, // <-- Update this later
        longitude: 36.78097, // <-- Update this later
        directions: 'Situated right next to the Otiende Estate and a short distance past the Wilson Airport traffic lights when coming from the Nairobi Central Business District (CBD).',
        additional_info: 'Upon arrival at Lang\'ata Cemetery, the funeral service will commence immediately, followed by the interment/burial ceremony.',
      }

  // Create Google Maps directions link dynamically based on active tab
  const mapsLink = `https://www.google.com/maps/dir/?api=1&destination=${eventData.latitude},${eventData.longitude}`

  return (
    <section id="burial" className="burial-section">
      <div className="container">
        <h2 className="section-title">Service Details</h2>
        
        <div className="burial-card">
          
          {/* --- TAB BUTTONS --- */}
          <div className="burial-tabs">
            <button 
              className={`tab-btn ${activeTab === 'funeral_home' ? 'active' : ''}`}
              onClick={() => setActiveTab('funeral_home')}
            >
              🕊️ Viewing of the Body
            </button>
            <button 
              className={`tab-btn ${activeTab === 'cemetery' ? 'active' : ''}`}
              onClick={() => setActiveTab('cemetery')}
            >
              ⛪ Lang'ata Cemetery Service
            </button>
          </div>

          <h3>{eventData.title}</h3>
          
          <div className="detail-grid">
            <div className="detail-item">
              <div className="detail-icon">📅</div>
              <div className="detail-content">
                <strong>Date</strong>
                <span>{eventData.service_date}</span>
              </div>
            </div>
            
            <div className="detail-item">
              <div className="detail-icon">🕐</div>
              <div className="detail-content">
                <strong>Time</strong>
                <span>{new Date(`2000-01-01T${eventData.service_time}`).toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}</span>
              </div>
            </div>
            
            <div className="detail-item full-width">
              <div className="detail-icon">📍</div>
              <div className="detail-content">
                <strong>Venue</strong>
                <span>{eventData.venue_name}</span>
              </div>
            </div>
            
            <div className="detail-item full-width">
              <div className="detail-icon">🏠</div>
              <div className="detail-content">
                <strong>Address</strong>
                <span>{eventData.venue_address}</span>
              </div>
            </div>
            
            {eventData.directions && (
              <div className="detail-item full-width">
                <div className="detail-icon">🗺️</div>
                <div className="detail-content">
                  <strong>Directions</strong>
                  <span>{eventData.directions}</span>
                </div>
              </div>
            )}
          </div>
          
          {eventData.additional_info && (
            <div className="additional-info">
              {eventData.additional_info}
            </div>
          )}
          
          <div className="location-actions">
            {/* ✅ OPTION 1: Redirect to Google Maps (RECOMMENDED) */}
            <a 
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="location-btn"
            >
              📍 Get Directions
            </a>

            {/* ❌ OPTION 2: Open in Modal (Commented out. Swap with Option 1 if you prefer this) */}
            {/* 
            <button 
              onClick={() => alert('Map Modal would open here')}
              className="location-btn"
            >
              📍 Get Directions (Modal)
            </button>
            */}

            <button 
              onClick={() => {
                navigator.clipboard.writeText(mapsLink)
                alert('Location link copied to clipboard!')
              }}
              className="location-btn secondary"
            >
              🔗 Copy Location Link
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BurialDetails