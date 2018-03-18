import React from 'react'

/* Import the bio text from a data file */
import { bio } from '../../data/bio'

const Bio = () => {
  const large = 'images/profilepiclarge.jpg'
  const small = 'images/profilepic.jpg'
  const alt = 'Mark McConnell'
  const className = 'bio__image'

  return (
    <section className='bio' id='about'>
      {window.innerWidth > 768
        ? <img className={className} src={large} alt={alt} />
        : <img className={className} src={small} alt={alt} />
      }
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
