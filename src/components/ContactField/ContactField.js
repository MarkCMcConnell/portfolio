import React from 'react'

const ContactField = ({ className, name, type, placeholder, onChange }) => {
  return <input
    className={className}
    name={name}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    required
  />
}

export default ContactField
