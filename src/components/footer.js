import React from "react"
import { IconContext } from "react-icons"
import { FaLinkedin, FaGithubSquare, FaEnvelopeSquare } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <div style={{ margin: "0.4rem 0" }}>
        <IconContext.Provider
          value={{ color: "#DDDBF1", size: 24, className: "global-class-name" }}
        >
          <a href="https://www.linkedin.com/in/benjamin-j-myers/">
            <FaLinkedin />
          </a>
          {" "}
          <a href="mailto:benjammin502@gmail.com">
            <FaEnvelopeSquare />
          </a>
          {" "}
          <a href="https://github.com/benjammin502">
            <FaGithubSquare />
          </a>
        </IconContext.Provider>
      </div>
      <span className="copyright">
        © {new Date().getFullYear()} - Benjamin Myers
      </span>
    </footer>
  )
}

export default Footer
