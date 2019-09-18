import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"
import PostCard from "../components/PostCard/PostCard"
const Category = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="row">
        {/* {JSON.stringify(data)} */}
        {data.allMarkdownRemark.edges.map(edge => (
          <PostCard
            key={edge.node.id}
            title={edge.node.frontmatter.title}
            excerpt={edge.node.excerpt}
            categories={edge.node.frontmatter.category}
            date={edge.node.frontmatter.date}
            template={edge.node.frontmatter.templateKey}
            slug={edge.node.fields.slug}
          />
        ))}
      </div>
    </Layout>
  )
}
export const Categories = graphql`
  query CategoriesPage($cat: String!) {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: $cat } } }) {
      edges {
        node {
          frontmatter {
            description
            category
            date(formatString: "MM Do YY")
            title
            templateKey
          }
          excerpt(pruneLength: 50, truncate: true)
          id
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Category
