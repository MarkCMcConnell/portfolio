import React from 'react'

import ContactForm from '../ContactForm/ContactForm'

const Contact = (props) => {
  return (
    <section
      className='contact'
      id='contact'
      ref={props.contactRef}
    >
      <h1 className='contact__title'>Get In Touch</h1>
      <ContactForm />
    </section>
  )
}

export default Contact
