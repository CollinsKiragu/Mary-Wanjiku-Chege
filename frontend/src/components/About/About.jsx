// import { useEffect, useState } from 'react'
// import { contentService } from '../../services/contentService'
// import './About.css'

// const About = () => {
//   const [page, setPage] = useState(null)

//   useEffect(() => {
//     const fetchPage = async () => {
//       try {
//         const data = await contentService.getPageBySlug('biography')
//         setPage(data)
//       } catch (error) {
//         console.error('Error fetching biography:', error)
//       }
//     }
//     fetchPage()
//   }, [])

//   if (!page) return null

//   return (
//     <section id="about" className="about-section">
//       <div className="container">
//         <h2 className="section-title">{page.title}</h2>
//         <h3 className="section-subtitle">{page.subtitle}</h3>
//         <div className="about-content">
//           <p>{page.content}</p>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default About


import maryImage from '../../assets/mary-wanjiku-chege.jpeg' // <-- Ensure this matches your actual file name/extension
import './About.css'

const About = () => {

  // Replace this string with your ACTUAL transformed Cloudinary URL from Step 1
  const maryImageUrl = "https://res.cloudinary.com/djiqwujg4/image/upload/v1780859632/mary-wanjiku-chege_yzkqml.jpg";

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">Biography</h2>
        <h3 className="section-subtitle"><b>In Loving Memory of Mama Njambi</b></h3>
        
        <div className="about-grid">
          {/* Left Side: Image */}
          {/* <div className="about-image-wrapper">
            <img 
              src={maryImage} 
              alt="Mary Wanjiku Chege" 
              className="about-image" 
            />
            <div className="image-frame"></div>
          </div> */}

          {/* LEFT COLUMN: Image */}
          <div className="about-image-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <img 
              src={maryImageUrl} 
              alt="Mary Wanjiku Chege" 
              className="about-image" 
              style={{ display: 'block', margin: '0 auto' }}
            />
            <div className="image-frame"></div>
          </div>

          {/* Right Side: Biography Text */}
          <div className="about-text">
            <p className="about-lead">
              It is with a profound sense of grief, yet with hearts full of gratitude, that we announce the peaceful passing of our beloved <strong>Mary Wanjiku Chege</strong> (affectionately known as <em>Mama Njambi</em>), who went to be with the Lord on Monday, 1st June 2026.
            </p>
            
            <p>
              Mary was a woman of remarkable faith and resilience. During her recent illness and hospitalization, she was surrounded by an overwhelming outpouring of love, prayers, and support from this wonderful community. 
            </p>
            
            <p>
              The family wishes to convey our deepest, heartfelt gratitude to each and every one of you. Your generosity and words of encouragement were truly a financial and spiritual miracle. God comforted us through your kindness. 
            </p>
            
            <p className="about-blessing">
              As we celebrate her beautiful life and legacy, our prayer is that the Lord God Almighty remembers each one of you in your time of need, blessing you exceedingly and abundantly, far above all you could ever ask or imagine.
            </p>
            
            <p className="about-signoff">
              Rest in eternal peace, Mama Njambi. Your memory will forever be a blessing to us all.
            </p>
          </div>
        </div>
        {/* ⚠️ IMPORTANT: THE GRID ENDS HERE. DO NOT PUT THE VERSE ABOVE THIS LINE ⚠️ */}

        {/* 2. THIS IS THE FULL-WIDTH CENTERED BIBLE VERSE */}
        <div className="full-width-verse">
          <div className="verse-content">
            <span className="verse-quote-icon">❝</span>
            <p className="verse-text">
              {/* I have fought the good fight, I have finished the race, I have kept the faith. */}
              Honor her for all that her hands have done, and let her works bring her praise at the gates.
            </p>
            <p className="verse-reference">— Proverbs 31:31</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About