// import { useEffect, useState } from 'react'
// import { contentService } from '../../services/contentService'
// import './Eulogy.css'

// const Eulogy = () => {
//   const [page, setPage] = useState(null)

//   useEffect(() => {
//     const fetchPage = async () => {
//       try {
//         const data = await contentService.getPageBySlug('our-mother')
//         setPage(data)
//       } catch (error) {
//         console.error('Error fetching eulogy:', error)
//       }
//     }
//     fetchPage()
//   }, [])

//   if (!page) return null

//   return (
//     <section id="eulogy" className="eulogy-section">
//       <div className="container">
//         <h2 className="section-title">{page.title}</h2>
//         <h3 className="section-subtitle">{page.subtitle}</h3>
//         <div className="eulogy-content">
//           <p>{page.content}</p>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Eulogy


// import { useEffect, useState } from 'react'
// import { contentService } from '../../services/contentService'
// import eulogyPDF from '../../assets/eulogy.pdf'
// import './Eulogy.css'

// const Eulogy = () => {
//   const [page, setPage] = useState(null)

//   useEffect(() => {
//     const fetchPage = async () => {
//       try {
//         const data = await contentService.getPageBySlug('our-mother')
//         setPage(data)
//       } catch (error) {
//         console.error('Error fetching eulogy:', error)
//       }
//     }
//     fetchPage()
//   }, [])

//   return (
//     <section id="eulogy" className="eulogy-section">
//       <div className="container">
//         <h2 className="section-title">Eulogy</h2>
//         <h3 className="section-subtitle">In Loving Memory</h3>
        
//         <div className="eulogy-content">
//           {page && (
//             <div className="eulogy-text">
//               <p>{page.content}</p>
//             </div>
//           )}
          
//           <div className="eulogy-pdf">
//             <h4>Download Full Eulogy</h4>
//             <a href={eulogyPDF} download="eulogy.pdf" className="pdf-download-btn">
//               📄 Download PDF
//             </a>
//             <iframe
//               src={eulogyPDF}
//               title="Eulogy PDF"
//               className="pdf-viewer"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Eulogy


import { useEffect, useState } from 'react'
import { contentService } from '../../services/contentService'
import eulogyPDF from '../../assets/eulogy.pdf'
import './Eulogy.css'

const Eulogy = () => {
  const [page, setPage] = useState(null)

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const data = await contentService.getPageBySlug('our-mother')
        setPage(data)
      } catch (error) {
        console.error('Error fetching eulogy:', error)
      }
    }
    fetchPage()
  }, [])

  return (
    <section id="eulogy" className="eulogy-section">
      <div className="container">
        <h2 className="section-title">Eulogy</h2>
        <h3 className="section-subtitle">In Loving Memory</h3>
        
        <div className="eulogy-content">
          {page && (
            <div className="eulogy-text">
              <p>{page.content}</p>
            </div>
          )}
          
          <div className="eulogy-pdf">
            {/* <h4>Download Full Eulogy</h4>
            <a href={eulogyPDF} download="eulogy.pdf" className="pdf-download-btn">
              📄 Download PDF
            </a> */}
            <iframe
              src={eulogyPDF}
              title="Eulogy PDF"
              className="pdf-viewer"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Eulogy