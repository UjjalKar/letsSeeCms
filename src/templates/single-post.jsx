import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const SinglePost = ({ data }) => {
  return (
    <Layout>
      <div>{data.markdownRemark.frontmatter.title}</div>
    </Layout>
  )
}

export const SinglePostQuery = graphql`
  query SinglePostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
    }
  }
`

export default SinglePost
