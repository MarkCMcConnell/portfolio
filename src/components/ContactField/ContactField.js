import React from 'react'

const ContactField = ({ className, name, type, placeholder, onChange, onBlur }) => {
  return <input
    className={className}
    name={name}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    onBlur={onBlur}
    required
  />
}

export default ContactField
