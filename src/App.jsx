import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../css/App.css/'

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import Home from './views/Home'
import AppFeatures from './views/AppFeatures'
import Contact from './views/Contact'



function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/features' element={<AppFeatures />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        </main>
     <Footer />
    </BrowserRouter>
  )
}

export default App
