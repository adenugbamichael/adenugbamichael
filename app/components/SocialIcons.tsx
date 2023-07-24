import React from "react"
import { SiGithub, SiTwitter } from "react-icons/si"
import { RxLinkedinLogo } from "react-icons/rx"
import { HiOutlineMail } from "react-icons/hi"
import Link from "next/link"
import "../css/components/socialIcons.scss"

const SocialIcons = () => {
  const socialLinks = [
    {
      name: "Github",
      icon: <SiGithub />,
      link: "https://github.com/adenugbamichael",
    },

    {
      name: "LinkedIn",
      icon: <RxLinkedinLogo />,
      link: "https://www.linkedin.com/in/adenugbamichael/",
    },

    {
      name: "Twitter",
      icon: <SiTwitter />,
      link: "https://twitter.com/MichaelAdenugba",
    },

    {
      name: "Email",
      icon: <HiOutlineMail />,
      link: "mailto:adenugbamicke@gmail.com",
    },
  ]
  return (
    <div className='social-icons'>
      <ul className='social-icons-list'>
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className='social-icons-list-item'>
            <Link
              href={link}
              className='social-icons-list-item-link'
              target='_blank'
            >
              <span className='social-icons-list-item-link-heroIcons'>
                {icon}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialIcons
