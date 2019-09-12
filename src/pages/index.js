import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

// need to fix category page template

import SEO from "../components/seo"
import PostCard from "../components/PostCard/PostCard"
const IndexPage = () => <h1>Hell</h1>
/*
const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query HomePagePost {
      allMarkdownRemark(
        limit: 6
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          excerpt(pruneLength: 35)
          frontmatter {
            categories
            title
            path
            date(formatString: "MMM Do YY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div class="row">
        {allMarkdownRemark.nodes.map(({ id, excerpt, frontmatter }) => (
          <PostCard
            key={id}
            title={frontmatter.title}
            excerpt={excerpt}
            categories={frontmatter.categories}
            path={frontmatter.path}
            date={frontmatter.date}
          />
        ))}
      </div>
    </Layout>
  )
}
*/
export default IndexPage
