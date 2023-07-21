import React from "react"
import Link from "next/link"
import Logo from "../components/Logo"
import "../css/sections/navbar.scss"

const Navbar = () => {
  const sectionLinks = [
    { name: "About", link: "/#about" },
    { name: "Blog", link: "/#blog" },
    { name: "Experience", link: "/#experience" },
    { name: "Projects", link: "/#projects" },
    {
      name: "Contact",
      link: "/#contact",
    },
  ]
  return (
    <nav>
      <div className='wrapper'>
        <div className='brand'>
          <Link href='/'>
            <Logo />
          </Link>
        </div>
        <div className='nav-items'>
          <ul className='nav-items-list'>
            {sectionLinks.map(({ name, link }) => (
              <li key={name} className='nav-items-list-item'>
                <Link href={link} className='nav-items-list-item-link'>
                  {name}
                </Link>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
