"use client"

import Email from "./components/Email"
import SocialIcons from "./components/SocialIcons"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import "./css/sections/main.scss"

const page = () => {
  return (
    <div className='app'>
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default page
