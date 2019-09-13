import React from "react"
// import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
// import SEO from "../components/seo"
// import PostCard from "../components/PostCard/PostCard"

const IndexPage = () => {
  // const { allMarkdownRemark } = useStaticQuery(graphql`
  //   query HomePagePost {
  //     allMarkdownRemark(
  //       limit: 6
  //       sort: { fields: frontmatter___date, order: DESC }
  //     ) {
  //       node {
  //         excerpt(pruneLength: 30)
  //         frontmatter {
  //           categories
  //           title
  //           tags
  //           date(formatString: "MMM Do YY")
  //           templateKey
  //         }
  //         fields {
  //           slug
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <Layout>
      <div className="col-md-9"></div>
      <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            <form className="form">
              <div className="form-group mb-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email adress"
                />
              </div>
              <button
                className="btn btn-primary d-block w-100 mb-2"
                type="submit"
              >
                I want daily update!
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
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
