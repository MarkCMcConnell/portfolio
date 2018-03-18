import React, { Component } from 'react'

import NavBar from './NavBar/NavBar'
import Hero from './Hero/Hero'
import Intro from './Intro/Intro'
import Bio from './Bio/Bio'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

class App extends Component {
  /* TODO: Set active class in Nav onScroll */
  // constructor () {
  //   super()

  //   this.state = {
  //     windowYPosition: null,
  //     active: true
  //   }

  //   this.handleScroll = this.handleScroll.bind(this)
  // }

  // componentDidMount () {
  //   window.addEventListener('scroll', this.handleScroll)
  // }

  // componentWillUnmount () {
  //   window.removeEventListener('scroll', this.handleScroll)
  // }

  // handleScroll () {

  // }

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
