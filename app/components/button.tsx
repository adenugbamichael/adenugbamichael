/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import React from "react"
import "../css/components/button.scss"

const Button = ({ text, link }: { text: string; link: string }) => {
  return (
    <div className='btn'>
      {text} -&nbsp;
      <Link href={link} className='btn-text'>
        {" "}
        see what's next
      </Link>
    </div>
  )
}

export default Button
