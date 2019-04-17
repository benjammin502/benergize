import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "./main.css"

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
      <div>
        <Image />
      </div>
      <h1 className="intro-heading">I'm here for the web shiny.</h1>
      <p className="intro-desc">
        I'm a Front-End Web Developer residing in the San Francisco Bay Area,
        California, with an interest in UI/UX and all things web related. I
        enjoy building small business and personal websites, while working my
        way up to rich interactive web apps. If you are a business looking to
        bolster your online web presence, or an employer looking to hire, let's
        get in touch.
      </p>
    </div>
  </Layout>
)

export default IndexPage
