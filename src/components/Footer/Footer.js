import React from 'react'
import SocialLinks from '../SocialLinks/SocialLinks'

const Footer = () => {
  return (
    <footer className='footer'>
      <h4>Find me elsewhere on the web</h4>
      <SocialLinks />
      <small><i className='fa fa-copyright' /> 2018  Mark McConnell</small>
    </footer>
  )
}

export default Footer
