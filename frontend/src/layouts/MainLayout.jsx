// import { Outlet } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import { contentService } from '../services/contentService'

// const MainLayout = () => {
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
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation */}
//       <nav className="bg-white shadow-md fixed w-full top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex-shrink-0">
//               <h1 className="text-2xl font-bold text-gray-800">
//                 {settings.deceased_name || 'In Loving Memory'}
//               </h1>
//             </div>
//             <div className="hidden md:flex space-x-8">
//               <a href="#hero" className="text-gray-700 hover:text-blue-600 transition">Home</a>
//               <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
//               <a href="#eulogy" className="text-gray-700 hover:text-blue-600 transition">Eulogy</a>
//               <a href="#gallery" className="text-gray-700 hover:text-blue-600 transition">Gallery</a>
//               <a href="#burial" className="text-gray-700 hover:text-blue-600 transition">Service Details</a>
//               <a href="#appreciation" className="text-gray-700 hover:text-blue-600 transition">Tributes</a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="pt-16">
//         <Outlet />
//       </main>
//     </div>
//   )
// }

// export default MainLayout


// import { Outlet } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import { contentService } from '../services/contentService'
// import TributeModal from '../components/Tributes/TributeModal'

// const MainLayout = () => {
//   const [settings, setSettings] = useState({})
//   const [showTributeModal, setShowTributeModal] = useState(false)

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
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation */}
//       <nav className="bg-white shadow-md fixed w-full top-0 z-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex-shrink-0">
//               <h1 className="text-xl md:text-2xl font-bold text-gray-800">
//                 {settings.deceased_name || 'In Loving Memory'}
//               </h1>
//             </div>
//             <div className="hidden md:flex space-x-6 lg:space-x-8">
//               <a href="#hero" className="text-gray-700 hover:text-blue-600 transition text-sm lg:text-base">Home</a>
//               <a href="#about" className="text-gray-700 hover:text-blue-600 transition text-sm lg:text-base">About</a>
//               <a href="#eulogy" className="text-gray-700 hover:text-blue-600 transition text-sm lg:text-base">Eulogy</a>
//               <a href="#gallery" className="text-gray-700 hover:text-blue-600 transition text-sm lg:text-base">Gallery</a>
//               <a href="#burial" className="text-gray-700 hover:text-blue-600 transition text-sm lg:text-base">Service Details</a>
//               <a href="#contribute" className="text-gray-700 hover:text-blue-600 transition text-sm lg:text-base">Contribute</a>
//               <a href="#appreciation" className="text-gray-700 hover:text-blue-600 transition text-sm lg:text-base">Tributes</a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="pt-16">
//         <Outlet />
//       </main>

//       {/* Fixed Add Tribute Button */}
//       <button
//         onClick={() => setShowTributeModal(true)}
//         className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg z-50 transition-all transform hover:scale-105"
//       >
//         Add Tribute
//       </button>

//       {/* Tribute Modal */}
//       {showTributeModal && (
//         <TributeModal onClose={() => setShowTributeModal(false)} />
//       )}
//     </div>
//   )
// }

// export default MainLayout


// import { Outlet } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import { contentService } from '../services/contentService'
// import TributeModal from '../components/Tributes/TributeModal'
// import logo from '../assets/logo2.png'
// import './MainLayout.css'

// const MainLayout = () => {
//   const [settings, setSettings] = useState({})
//   const [showTributeModal, setShowTributeModal] = useState(false)

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
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation */}
//       <nav className="navbar">
//         <div className="navbar-container">
//           <div className="navbar-brand">
//             <img src={logo} alt="Logo" className="navbar-logo" />
//             <h1 className="navbar-title">{settings.deceased_name || 'In Loving Memory'}</h1>
//           </div>
//           <div className="navbar-menu">
//             <a href="#hero" className="navbar-link">Home</a>
//             <a href="#about" className="navbar-link">About</a>
//             <a href="#eulogy" className="navbar-link">Eulogy</a>
//             <a href="#gallery" className="navbar-link">Gallery</a>
//             <a href="#burial" className="navbar-link">Service Details</a>
//             <a href="#contribute" className="navbar-link">Contribute</a>
//             <a href="#appreciation" className="navbar-link">Tributes</a>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="main-content">
//         <Outlet />
//       </main>

//       {/* Fixed Add Tribute Button */}
//       <button
//         onClick={() => setShowTributeModal(true)}
//         className="fixed-tribute-btn"
//       >
//         Add Tribute
//       </button>

//       {/* Tribute Modal */}
//       {showTributeModal && (
//         <TributeModal onClose={() => setShowTributeModal(false)} />
//       )}
//     </div>
//   )
// }

// export default MainLayout


import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { contentService } from '../services/contentService'
import TributeModal from '../components/Tributes/TributeModal'
import logo from '../assets/logo2.png'
import './MainLayout.css'

const MainLayout = () => {
  const [settings, setSettings] = useState({})
  const [showTributeModal, setShowTributeModal] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // ✅ NEW: Force scroll to top on initial load and disable browser scroll restoration
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

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

  // Intersection Observer to detect which section is in view
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px', // Trigger when section is 20% from top
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <img src={logo} alt="Logo" className="navbar-logo" />
            <h1 className="navbar-title">{settings.deceased_name || 'In Loving Memory'}</h1>
          </div>
          <div className="navbar-menu">
            <a 
              href="#hero" 
              className={`navbar-link ${activeSection === 'hero' ? 'active' : ''}`}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`navbar-link ${activeSection === 'about' ? 'active' : ''}`}
            >
              About
            </a>
            <a 
              href="#eulogy" 
              className={`navbar-link ${activeSection === 'eulogy' ? 'active' : ''}`}
            >
              Eulogy
            </a>
            <a 
              href="#gallery" 
              className={`navbar-link ${activeSection === 'gallery' ? 'active' : ''}`}
            >
              Gallery
            </a>
            <a 
              href="#burial" 
              className={`navbar-link ${activeSection === 'burial' ? 'active' : ''}`}
            >
              Service Details
            </a>
            <a 
              href="#contribute" 
              className={`navbar-link ${activeSection === 'contribute' ? 'active' : ''}`}
            >
              Contribute
            </a>
            <a 
              href="#appreciation" 
              className={`navbar-link ${activeSection === 'appreciation' ? 'active' : ''}`}
            >
              Tributes
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Fixed Add Tribute Button */}
      <button
        onClick={() => setShowTributeModal(true)}
        className="fixed-tribute-btn"
      >
        Add Tribute
      </button>

      {/* Tribute Modal */}
      {showTributeModal && (
        <TributeModal onClose={() => setShowTributeModal(false)} />
      )}
    </div>
  )
}

export default MainLayout