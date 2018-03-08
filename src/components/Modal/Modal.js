import React from 'react'

import Button from '../Button/Button'

const Modal = ({ show, onClick, title, description, liveLink, githubLink, address }) => {
  if (!show) {
    return null
  } else {
    return (
      <div className='modal__backdrop'>
        <div className='modal'>
          <h1 className='modal__title'>{title}</h1>
          <p className='modal__description'>{description}</p>
          <div>
            <a className='modal__link' href={githubLink}>
              <h3 className='modal__subtitle'>
                <i className='modal__icon fa fa-github' />
                GitHub
              </h3>
            </a>
          </div>
          <div>
            <a className='modal__link' href={liveLink}>
              <h3 className='modal__subtitle'>
                <i className='modal__icon fa fa-globe' />
                {address}
              </h3>
            </a>
          </div>
          <Button
            className='btn'
            type='button'
            onClick={onClick}
            text='Close'
          />
        </div>
      </div>
    )
  }
}

export default Modal
