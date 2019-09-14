import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Sidebar from "../components/sideBar/Sidebar"
import { kebabCase } from "lodash"
import "../styles/single-post.scss"

const SinglePost = ({ data }) => {
  let tags = []

  return (
    <Layout>
      <Helmet>
        <meta
          name="keywords"
          content={data.markdownRemark.frontmatter.tags.map(tag => `${tag},`)}
        />
      </Helmet>
      <SEO
        title={data.markdownRemark.frontmatter.title}
        description={data.markdownRemark.frontmatter.description}
      />
      <div className="row">
        <div className="col-md-9">
          <div className="content">
            <h1
              className="content-title heading"
              style={{ fontFamily: `'Playfair Display', serif` }}
            >
              {data.markdownRemark.frontmatter.title}
            </h1>
            <div className="meta">
              {data.markdownRemark.frontmatter.category.map(cat => (
                <Link to={kebabCase(cat)}>
                  <span className="badge badge-primary mr-2">{cat}</span>
                </Link>
              ))}
              /
              <span className="ml-2">
                <Link to={kebabCase(data.markdownRemark.frontmatter.author)}>
                  {data.markdownRemark.frontmatter.author}
                </Link>
              </span>
              /
              <span className="badge badge-dark ml-2">
                {data.markdownRemark.frontmatter.date}
              </span>
              /
              <span className="badge badge-secondary ml-2">
                {data.markdownRemark.timeToRead} min read
              </span>
            </div>
          </div>
          <figure className="figure mt-4">
            <img
              src={data.markdownRemark.frontmatter.featuredimage}
              className="figure-img img-fluid rounded"
              alt={data.markdownRemark.frontmatter.title}
            />
            {/* <figcaption class="figure-caption text-right">A caption for the above image.</figcaption> */}
          </figure>
          <div
            className="raw-content"
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
        </div>

        <Sidebar isHomePage={true} />
      </div>
    </Layout>
  )
}

export const SinglePostQuery = graphql`
  query SinglePostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        category
        date(formatString: "MM Do YY")
        featuredimage
        tags
        description
      }
      html
      timeToRead
    }
  }
`

export default SinglePost
