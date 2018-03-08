import React from 'react'

const NavLink = ({ link, className }) => {
  const to = `#${link.toLowerCase()}`

  return (
    <div>
      <a href={to} className='nav__navLink'>{link}</a>
    </div>
  )
}

export default NavLink
