// import { useEffect, useState } from 'react'
// import { contentService } from '../../services/contentService'
// import './Contribute.css'

// const Contribute = () => {
//   const [contributions, setContributions] = useState([])

//   useEffect(() => {
//     const fetchContributions = async () => {
//       try {
//         const response = await fetch(`${import.meta.env.VITE_API_URL}/public/contributions`)
//         const data = await response.json()
//         setContributions(data)
//       } catch (error) {
//         console.error('Error fetching contributions:', error)
//       }
//     }
//     fetchContributions()
//   }, [])

//   return (
//     <section id="contribute" className="contribute-section">
//       <div className="container">
//         <h2 className="section-title">Contribute</h2>
//         <h3 className="section-subtitle">Support the Family</h3>
        
//         <p className="contribute-intro">
//           Your generous contributions will help support the family during this difficult time. 
//           You can contribute through any of the following methods:
//         </p>
        
//         {contributions.length === 0 ? (
//           <div className="contribution-card">
//             <h4>M-Pesa</h4>
//             <div className="contribution-detail">
//               <strong>Paybill Number:</strong> 123456
//             </div>
//             <div className="contribution-detail">
//               <strong>Account Number:</strong> MaryWanjiku
//             </div>
//             <p className="contribution-note">
//               Please use the Paybill number above. Your contribution will help cover funeral costs.
//             </p>
//           </div>
//         ) : (
//           contributions.map((contribution) => (
//             <div key={contribution.id} className="contribution-card">
//               <h4>{contribution.title}</h4>
              
//               {contribution.payment_type === 'mpesa' && (
//                 <>
//                   {contribution.mpesa_paybill && (
//                     <div className="contribution-detail">
//                       <strong>Paybill Number:</strong> {contribution.mpesa_paybill}
//                     </div>
//                   )}
//                   {contribution.mpesa_account && (
//                     <div className="contribution-detail">
//                       <strong>Account Number:</strong> {contribution.mpesa_account}
//                     </div>
//                   )}
//                 </>
//               )}
              
//               {contribution.payment_type === 'bank' && (
//                 <>
//                   {contribution.account_name && (
//                     <div className="contribution-detail">
//                       <strong>Account Name:</strong> {contribution.account_name}
//                     </div>
//                   )}
//                   {contribution.account_number && (
//                     <div className="contribution-detail">
//                       <strong>Account Number:</strong> {contribution.account_number}
//                     </div>
//                   )}
//                   {contribution.bank_name && (
//                     <div className="contribution-detail">
//                       <strong>Bank Name:</strong> {contribution.bank_name}
//                     </div>
//                   )}
//                   {contribution.branch && (
//                     <div className="contribution-detail">
//                       <strong>Branch:</strong> {contribution.branch}
//                     </div>
//                   )}
//                 </>
//               )}
              
//               {contribution.instructions && (
//                 <p className="contribution-note">{contribution.instructions}</p>
//               )}
//             </div>
//           ))
//         )}
//       </div>
//     </section>
//   )
// }

// export default Contribute


// import { useEffect, useState } from 'react'
// import './Contribute.css'

// const Contribute = () => {
//   const [contributions, setContributions] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     const fetchContributions = async () => {
//       try {
//         setLoading(true)
//         const response = await fetch(`${import.meta.env.VITE_API_URL}/public/contributions`)
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch contributions')
//         }
        
//         const data = await response.json()
        
//         // Ensure data is an array
//         if (Array.isArray(data)) {
//           setContributions(data)
//         } else {
//           setContributions([])
//         }
//       } catch (error) {
//         console.error('Error fetching contributions:', error)
//         setError(error.message)
//         setContributions([])
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchContributions()
//   }, [])

//   return (
//     <section id="contribute" className="contribute-section">
//       <div className="container">
//         <h2 className="section-title">Contribute</h2>
//         <h3 className="section-subtitle">Support the Family</h3>
        
//         <p className="contribute-intro">
//           Your generous contributions will help support the family during this difficult time. 
//           You can contribute through any of the following methods:
//         </p>
        
//         {loading ? (
//           <div className="loading-state">Loading contribution details...</div>
//         ) : error ? (
//           <div className="error-state">
//             <p>Unable to load contribution details at this time.</p>
//             <p>Please contact the family directly for contribution information.</p>
//           </div>
//         ) : contributions.length === 0 ? (
//           <div className="contribution-card">
//             <h4>M-Pesa</h4>
//             <div className="contribution-detail">
//               <strong>Paybill Number:</strong> 123456
//             </div>
//             <div className="contribution-detail">
//               <strong>Account Number:</strong> MaryWanjiku
//             </div>
//             <p className="contribution-note">
//               Please use the Paybill number above. Your contribution will help cover funeral costs.
//             </p>
//           </div>
//         ) : (
//           contributions.map((contribution) => (
//             <div key={contribution.id} className="contribution-card">
//               <h4>{contribution.title}</h4>
              
//               {contribution.payment_type === 'mpesa' && (
//                 <>
//                   {contribution.mpesa_paybill && (
//                     <div className="contribution-detail">
//                       <strong>Paybill Number:</strong> {contribution.mpesa_paybill}
//                     </div>
//                   )}
//                   {contribution.mpesa_account && (
//                     <div className="contribution-detail">
//                       <strong>Account Number:</strong> {contribution.mpesa_account}
//                     </div>
//                   )}
//                 </>
//               )}
              
//               {contribution.payment_type === 'bank' && (
//                 <>
//                   {contribution.account_name && (
//                     <div className="contribution-detail">
//                       <strong>Account Name:</strong> {contribution.account_name}
//                     </div>
//                   )}
//                   {contribution.account_number && (
//                     <div className="contribution-detail">
//                       <strong>Account Number:</strong> {contribution.account_number}
//                     </div>
//                   )}
//                   {contribution.bank_name && (
//                     <div className="contribution-detail">
//                       <strong>Bank Name:</strong> {contribution.bank_name}
//                     </div>
//                   )}
//                   {contribution.branch && (
//                     <div className="contribution-detail">
//                       <strong>Branch:</strong> {contribution.branch}
//                     </div>
//                   )}
//                 </>
//               )}
              
//               {contribution.payment_type === 'paypal' && (
//                 <>
//                   {contribution.account_name && (
//                     <div className="contribution-detail">
//                       <strong>PayPal Email:</strong> {contribution.account_name}
//                     </div>
//                   )}
//                 </>
//               )}
              
//               {contribution.instructions && (
//                 <p className="contribution-note">{contribution.instructions}</p>
//               )}
//             </div>
//           ))
//         )}
//       </div>
//     </section>
//   )
// }

// export default Contribute

import './Contribute.css'

const Contribute = () => {
  return (
    <section id="contribute" className="contribute-section">
      <div className="container">
        <h2 className="section-title">How You Can Contribute</h2>
        
        <div className="contribute-intro">
          <p>
            We invite you to join us in honoring and remembering the life of Mary Wanjiku Chege. You can share your support and tributes in the following ways:
          </p>
        </div>

        <div className="contribute-grid">
          <div className="contribute-card">
            <div className="contribute-icon">💝</div>
            <h3>Leave a Tribute</h3>
            <p>
              Please share your fondest memories, thoughts, or condolences by leaving a tribute on the memorial page. Your words will provide comfort to the family and create a lasting legacy of love and remembrance for Mary.
            </p>
          </div>

          <div className="contribute-card">
            <div className="contribute-icon">📷</div>
            <h3>Share Photos</h3>
            <p>
              We invite you to share any photos you have of Mary Wanjiku Chege. These photos will be cherished by the family and can be added to the memorial gallery to celebrate her life and the moments shared with loved ones.
            </p>
          </div>
        </div>

        <div className="contact-section">
          <h3>Contact Information</h3>
          <p className="contact-intro">
            For contributions to the family, please contact:
          </p>
          
          <div className="contact-card">
            <div className="contact-name">Family Representative</div>
            <div className="contact-phone">
              {/* <a href="tel:+254720442178">Miriam: +254 720 442178</a> */}
              <a href="tel:+254720442178">📱 Miriam: +254 720 442178</a>

            </div>
            <br />
            <div className="contact-phone">
              {/* <a href="mailto:miriamkiragu00@gmail.com">miriamkiragu00@gmail.com</a> */}
              <a href="mailto:miriamkiragu00@gmail.com">✉️ miriamkiragu00@gmail.com</a>

            </div>
          </div>

          <p className="contact-note">
            For questions, to submit photos, or for any other contributions, 
            please reach out through the contact information above.
          </p>
        </div>

        <div className="moderation-notice">
          <p>
            Thank you for sharing your precious memories, words of comfort, and photos. Your heartfelt contributions bring immense strength and comfort to our family during this time. &#128591;
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contribute

