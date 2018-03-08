import React, { Component } from 'react'

import Modal from '../Modal/Modal'
import Button from '../Button/Button'

/* Render a project with details for each project in the data file
   passed by the Projects component as props */
class Project extends Component {
  constructor (props) {
    super(props)

    this.state = { visible: false }

    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal () {
    const isVisible = this.state.visible

    this.setState({ visible: !isVisible })
  }

  render () {
    const { title, image, alt, technologies } = this.props

    return (
      <section className='project'>
        <figure className='project__card'>
          <img className='project__image' src={image} alt={alt} />
          <figcaption className='project__details'>
            <h3 className='project__title'>{title}</h3>
            <p className='project__description'>
              {technologies}
            </p>
            <Button
              className='btn project__toggle'
              type='button'
              text='More Details'
              onClick={this.toggleModal}
            />
          </figcaption>
        </figure>
        <Modal
          show={this.state.visible}
          onClick={this.toggleModal}
          {...this.props}
        />
      </section>
    )
  }
}

export default Project
