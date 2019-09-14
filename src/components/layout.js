import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import Footer from "./footer/footer"
import { navigationContext } from "../context/menuContext"
import Header from "./header/header"
import "../styles/layout.scss"

const Layout = ({ children }) => {
  const { site, allMarkdownRemark } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          menuLinks {
            link
            name
          }
        }
      }
      allMarkdownRemark {
        distinct(field: frontmatter___category)
      }
    }
  `)

  return (
    <navigationContext.Provider value={allMarkdownRemark.distinct}>
      <Header links={site.siteMetadata.menuLinks} />
      <Helmet>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
      </Helmet>
      <main className="container py-5">{children}</main>
      <Footer />
    </navigationContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
