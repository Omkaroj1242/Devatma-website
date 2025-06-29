import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './assets/Header'
import Hero from './assets/Hero'
import AboutUs from './assets/AboutUs'
import Slider from './assets/Slider'
import Footer from './assets/Footer'
import Gallery from './assets/Gallery'
import AboutPage from './assets/AboutPage'
import Home from './assets/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <Home />
            </>
          } />
          <Route path='/home' element={
            <>
              <Home />
            </>
          } />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
