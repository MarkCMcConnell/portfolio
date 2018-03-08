import React from 'react'
import { socialLinks } from '../../data/socialLinks'

const SocialLinks = () => {
  return (
    <div>
      {socialLinks.map(link => {
        const clssName = `${link.className} footer__icon`
        return (
          <a key={link.title} href={link.link} alt={link.alt}>
            <i className={clssName} />
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks
