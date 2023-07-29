"use client"

import Email from "./components/Email"
import SocialIcons from "./components/SocialIcons"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import "./css/main.scss"

import About from "./sections/About"

const page = () => {
  return (
    <div className='app'>
      <Navbar />
      <Email />
      <main>
        <Hero />
        <About />
        {/* <SocialIcons /> */}
      </main>
    </div>
  )
}

export default page
