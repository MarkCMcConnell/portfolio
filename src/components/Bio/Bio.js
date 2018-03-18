import React from 'react'

/* Import the bio text from a data file */
import { bio } from '../../data/bio'

const Bio = () => {
  return (
    <section className='bio' id='about'>
      <picture className='bio__image'>
        <img
          srcset='images/profilepic.jpg 256px,
                  images/profilepiclarge.jpg 400px'
          sizes='256px,
                 768px'
          src='images/profilepiclarge.jpg'
          alt='Mark McConnell'
        />
      </picture>
      <h1 className='bio__title'>
        Mark McConnell
      </h1>
      <h2 className='bio__subtitle'>Front End Developer</h2>
      <div className='bio__text'>
        {bio.map((section, i) => <p key={i}>{section}</p>)}
      </div>
    </section>
  )
}

export default Bio
