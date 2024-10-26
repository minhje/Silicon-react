import '../scss/css/App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Features from './Components/Features'
import Slider from './Components/Slider'
import Features2 from './Components/Features2'
import Testimonials from './Components/Testimonials'
import Faq from './Components/Faq'
import Subscribe from './Components/Subscribe'
import Footer from './Components/Footer'


function App() {
  
  return (
    <>
      <Navbar />
     <main>
        <Hero />
        <Features />
        <Slider />
        <Features2 />
        <Testimonials />
        <Faq />
        <Subscribe />
     </main>
      <Footer />
    </>
  )
}

export default App
