// import Hero from '../components/Hero/Hero'
// import About from '../components/About/About'
// import Eulogy from '../components/Eulogy/Eulogy'
// import Gallery from '../components/Gallery/Gallery'
// import BurialDetails from '../components/BurialDetails/BurialDetails'
// import MapSection from '../components/MapSection/MapSection'
// import Appreciation from '../components/Appreciation/Appreciation'
// import Footer from '../components/Footer/Footer'

// const Home = () => {
//   return (
//     <div>
//       <Hero />
//       <About />
//       <Eulogy />
//       <Gallery />
//       <BurialDetails />
//       <MapSection />
//       <Appreciation />
//       <Footer />
//     </div>
//   )
// }

// export default Home


import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Eulogy from '../components/Eulogy/Eulogy'
import Gallery from '../components/Gallery/Gallery'
import BurialDetails from '../components/BurialDetails/BurialDetails'
// import MapSection from '../components/MapSection/MapSection'
import Contribute from '../components/Contribute/Contribute'
import Appreciation from '../components/Appreciation/Appreciation'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Eulogy />
      <Gallery />
      <BurialDetails />
      {/* <MapSection /> */}
      <Contribute />
      <Appreciation />
      <Footer />
    </div>
  )
}

export default Home