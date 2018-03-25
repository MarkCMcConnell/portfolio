import React, { Component } from 'react'

class NavLink extends Component {
  constructor () {
    super()

    this.scrollTo = this.scrollTo.bind(this)
  }

  scrollTo () {
    console.log('hi')
    window.scrollBy(0, this.props.link.position)
  }

  render () {
    return (
      <div key={this.props.link.position}>
        <a
          href='#'
          className='nav__navLink'
          onClick={this.scrollTo}
        >
          {this.props.link.section}
        </a>
      </div>
    )
  }
}

export default NavLink
