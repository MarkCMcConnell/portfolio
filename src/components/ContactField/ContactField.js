import React from 'react'

const ContactField = ({ className, type, placeholder, onChange }) => {
  return <input
    className={className}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    required
  />
}

export default ContactField
