import React from "react"

const IconButton = ({children, text}) => {
  return (
      <button className="icon-button">{children}{text}</button>
  )
}

export default IconButton
