import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/PostCard/PostCard"
import Sidebar from "../components/sideBar/Sidebar"

function IndexPage() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query HomePagePost {
      allMarkdownRemark(
        limit: 6
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          excerpt(pruneLength: 30)
          frontmatter {
            category
            title
            date(formatString: "MMM Do YY")
            templateKey
          }
          fields {
            slug
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO />
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            {allMarkdownRemark.nodes.map(node => (
              <PostCard
                key={node.fields.slug}
                title={node.frontmatter.title}
                categories={node.frontmatter.category}
                excerpt={node.excerpt}
                date={node.frontmatter.date}
                slug={node.fields.slug}
                template={node.frontmatter.templateKey}
              />
            ))}
          </div>
        </div>
        <Sidebar isHomePage={true} />
      </div>
    </Layout>
  )
}

export default IndexPage
