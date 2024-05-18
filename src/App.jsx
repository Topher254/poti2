import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <About/>
     <Experience/>
     <Projects/>
     <Contact/>
    </div>
  )
}

export default App
