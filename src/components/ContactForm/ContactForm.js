import React, { Component } from 'react'
import ContactField from '../ContactField/ContactField'
import ContactMessage from '../ContactMessage/ContactMessage'
import Button from '../Button/Button'

class ContactForm extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: 'Enter your message here'
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (e) {
    const name = e.target.name
    const value = e.target.value

    this.setState({ [name]: value })
  }

  render () {
    return (
      <form className='contactForm'
        action='https://formspree.io/mcmcconn@gmail.com'
        method='POST'
      >
        <ContactField
          className='contactField contactField__grid1'
          type='text'
          placeholder='Name'
          onChange={this.handleInputChange}
        />
        <ContactField
          className='contactField contactField__grid2'
          type='email'
          placeholder='Email'
          onChange={this.handleInputChange}
        />
        <ContactField
          className='contactField contactField__grid3'
          type='text'
          placeholder='Subject'
          onChange={this.handleInputChange}
        />
        <ContactMessage onChange={this.handleInputChange} />
        <Button className='btn contactForm__btn' type='submit' text='Send' />
      </form>
    )
  }
}

export default ContactForm
