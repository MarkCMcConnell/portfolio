import React, { Component } from 'react'

import NavBar from './NavBar/NavBar'
import Hero from './Hero/Hero'
import Intro from './Intro/Intro'
import Bio from './Bio/Bio'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

class App extends Component {
  constructor () {
    super()

    this.state = {
      navHeight: 0,
      introScrollPos: 0,
      bioScrollPos: 0,
      projectsScrollPos: 0,
      contactScrollPos: 0
    }
  }

  componentDidMount () {
    const navHeight = this.nav.offsetHeight

    this.setState({
      navHeight: navHeight,
      introScrollPos: this.introSection.offsetTop + navHeight,
      bioScrollPos: this.bioSection.offsetTop + navHeight,
      projectsScrollPos: this.projectsSection.offsetTop + navHeight,
      contactScrollPos: this.contactSection.offsetTop + navHeight
    })
  }

  render () {
    return (
      <div>
        <NavBar
          navRef={el => this.nav = el}
          intro={this.state.introScrollPos}
          bio={this.state.bioScrollPos}
          projects={this.state.projectsScrollPos}
          contact={this.state.contactScrollPos}
        />
        <Hero />
        <Intro 
          introRef={section => this.introSection = section}
        />
        <Bio 
          bioRef={section => this.bioSection = section}
        />
        <Projects 
          projectsRef={section => this.projectsSection = section}
        />
        <Contact 
          contactRef={section => this.contactSection = section}  
        />
        <Footer />
      </div>
    )
  }
}

export default App
