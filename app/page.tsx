"use client"

import Email from "./components/Email"
import SocialIcons from "./components/SocialIcons"
import Navbar from "./sections/Navbar"

const page = () => {
  return (
    <div className='app'>
      <Navbar />
      <SocialIcons />
      <Email />
    </div>
  )
}

export default page
