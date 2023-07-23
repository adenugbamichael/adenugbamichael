import Link from "next/link"
import React from "react"
import "../css/components/button.scss"

const Button = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link href={link} className='btn'>
      {text}
    </Link>
  )
}

export default Button
