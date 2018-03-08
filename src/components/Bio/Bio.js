import React from 'react'

/* Import the bio text from a data file */
import { bio } from '../../data/bio'

const Bio = () => {
  return (
    <section className='bio' id='about'>
      <img
        className='bio__image'
        src='http://via.placeholder.com/400x600'
        alt='A shot of Mark McConnell'
      />
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
