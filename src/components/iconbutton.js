import React from "react"
import { IconContext } from "react-icons"

const IconButton = ({ children, text, href }) => {
  return (
    <a href={href}>
      <IconContext.Provider
        value={{ color: "#DDDBF1", size: 24, className: "global-class-name" }}
      >
        {children}
      </IconContext.Provider>
      <span>{text}</span>
    </a>
  )
}

export default IconButton
