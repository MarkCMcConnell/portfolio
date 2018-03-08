import React from 'react'

import { intro } from '../../data/intro'

const Intro = () => {
  return (
    <section className='intro'>
      <div className='intro__left' />
      <div className='intro__center'>
        <h1>Welcome!</h1>
        <div className='intro__text'>
          {intro.map((section, i) => <p key={i}>{section}</p>
          )}
        </div>
      </div>
      <div className='intro__right' />
    </section>
  )
}

export default Intro
