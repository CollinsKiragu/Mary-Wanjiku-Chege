// import { useEffect, useState } from 'react'
// import { contentService } from '../../services/contentService'
// import './Hero.css'

// const Hero = () => {
//   const [settings, setSettings] = useState({})

//   useEffect(() => {
//     const fetchSettings = async () => {
//       try {
//         const data = await contentService.getSiteSettings()
//         setSettings(data)
//       } catch (error) {
//         console.error('Error fetching settings:', error)
//       }
//     }
//     fetchSettings()
//   }, [])

//   return (
//     <section id="hero" className="hero-section">
//       <div className="hero-overlay"></div>
//       <div className="hero-content">
//         <h1 className="hero-name">{settings.deceased_name || 'Loading...'}</h1>
//         <p className="hero-dates">
//           {settings.birth_date} - {settings.death_date}
//         </p>
//         <p className="hero-subtitle">{settings.hero_subtitle}</p>
//       </div>
//     </section>
//   )
// }

// export default Hero


// import { useEffect, useState } from 'react'
// import { contentService } from '../../services/contentService'
// import './Hero.css'

// const Hero = () => {
//   const [settings, setSettings] = useState({})

//   useEffect(() => {
//     const fetchSettings = async () => {
//       try {
//         const data = await contentService.getSiteSettings()
//         setSettings(data)
//       } catch (error) {
//         console.error('Error fetching settings:', error)
//       }
//     }
//     fetchSettings()
//   }, [])

//   return (
//     <section id="hero" className="hero-section">
//       <div className="hero-overlay"></div>
//       <div className="hero-content">
//         <h1 className="hero-name">{settings.deceased_name || 'Loading...'}</h1>
//         <p className="hero-dates">
//           {settings.birth_date} - {settings.death_date}
//         </p>
//         <p className="hero-subtitle">{settings.hero_subtitle}</p>
        
//         <div className="hero-buttons">
//           <a href="#eulogy" className="btn btn-primary">
//             Read Eulogy
//           </a>
//           <a href="#appreciation" className="btn btn-secondary">
//             View Tributes
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero

import { useEffect, useState } from 'react'
import { contentService } from '../../services/contentService'
import heroLogo from '../../assets/logo2.png' // Import the logo
import './Hero.css'

const Hero = () => {
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
    <section id="hero" className="hero-section">
      <div className="hero-overlay"></div>
      
      {/* ========== HERO LOGO - Comment out this entire div if you don't want it ========== */}
      {/* <div className="hero-logo-container">
        <img src={heroLogo} alt="Memorial Logo" className="hero-logo" />
      </div> */}
      {/* ========== END HERO LOGO ========== */}
      
      <div className="hero-content">
        <h1 className="hero-name">{settings.deceased_name || 'Loading...'}</h1>
        <p className="hero-dates">
          {settings.birth_date} - {settings.death_date}
        </p>
        <p className="hero-subtitle">{settings.hero_subtitle}</p>
        
        <div className="hero-buttons">
          <a href="#eulogy" className="btn btn-primary">
            Read Eulogy
          </a>
          <a href="#appreciation" className="btn btn-secondary">
            View Tributes
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero