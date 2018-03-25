import React, { Component } from 'react'
import ContactField from '../ContactField/ContactField'
import ContactMessage from '../ContactMessage/ContactMessage'
import Button from '../Button/Button'
import FormError from '../FormError/FormError'

class ContactForm extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: 'Enter your message here',
      emailValid: false,
      formValid: false
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (e) {
    const name = e.target.name
    const value = e.target.value

    this.setState({ [name]: value })
  }

  valdiateEmail (e) {
    let email = e.target.value
    console.log(email)
    let isEmailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    console.log(isEmailValid)
    this.setState({
      emailValid: isEmailValid,
      formValid: true
    })
  }

  render () {
    return (
      <form className='contactForm'
        action='https://formspree.io/mcmcconn@gmail.com'
        method='POST'
      >
        <ContactField
          className='contactField contactField__grid1'
          name='name'
          type='text'
          placeholder='Name'
          onChange={this.handleInputChange}
        />
        <ContactField
          className='contactField contactField__grid2'
          name='email'
          type='email'
          placeholder='Email'
          onChange={this.handleInputChange}
          onBlur={this.validateEmail}
        />
        {this.state.emailValid && <FormError />}
        <ContactField
          className='contactField contactField__grid3'
          name='subject'
          type='text'
          placeholder='Subject'
          onChange={this.handleInputChange}
        />
        <ContactMessage onChange={this.handleInputChange} />
        <Button
          className='btn contactForm__btn'
          type='submit'
          disabled={!this.state.formValid}
          text='Send'
        />
      </form>
    )
  }
}

export default ContactForm
