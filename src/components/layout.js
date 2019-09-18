import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import Header from "../components/header/header"

import Footer from "./footer/footer"
import { navigationContext } from "../context/menuContext"
import "../styles/layout.scss"

const Layout = ({ children }) => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query SiteTitleQuery {
      allMarkdownRemark {
        distinct(field: frontmatter___category)
      }
    }
  `)

  return (
    <navigationContext.Provider value={allMarkdownRemark.distinct}>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
        />
      </Helmet>
      <Header />
      <main className="container py-5">{children}</main>
      <Footer />
    </navigationContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
