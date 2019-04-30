import React from "react"
import { IconContext } from "react-icons"
import { FaLinkedin, FaGithubSquare, FaEnvelopeSquare } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <span className="copyright">
        © {new Date().getFullYear()} - Benjamin Myers
      </span>
    </footer>
  )
}

export default Footer
