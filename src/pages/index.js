import React from "react"
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa"

import Layout from "../components/layout"
import Image from "../components/image"
import IconButton from "../components/iconbutton"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `gatsby`,
        `portfolio`,
        `react`,
        `front end development`,
        `RPA`,
        `javascript`,
      ]}
    />
    <div className="intro-wrapper">
      <div className="headshot">
        <Image />
      </div>
      <h2 className="intro-heading">Hello there. My name is Ben Myers.</h2>
      <h4 className="intro-subheading">
        Web Developer. Business Process Automator. Gym Rat.
      </h4>
    </div>
    <div className="button-container">
      <IconButton text="Connect" href="https://www.linkedin.com/in/benjamin-j-myers/">
        <FaLinkedinIn />
      </IconButton>
      <IconButton text="Mail" href="mailto:benjammin502@gmail.com">
        <FaEnvelope />
      </IconButton>
      <IconButton text="Projects" href="https://github.com/benjammin502">
        <FaGithub />
      </IconButton>
    </div>
  </Layout>
)

export default IndexPage
