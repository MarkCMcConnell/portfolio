import React, { Component } from 'react'

import NavBar from './NavBar/NavBar'
import Hero from './Hero/Hero'
import Intro from './Intro/Intro'
import Bio from './Bio/Bio'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

class App extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <Hero />
        <Intro />
        <Bio />
        <Projects />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App
