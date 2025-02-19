import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/Header'
import Hero from './assets/Hero'
import AboutUs from './assets/AboutUs'
import Slider from './assets/Slider'
import Footer from './assets/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <AboutUs/>
      <Slider/>
      <Footer/>
    </>
  )
}

export default App
