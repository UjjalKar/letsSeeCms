import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Sidebar from "../components/sideBar/Sidebar"
import { kebabCase } from "lodash"
import "../styles/single-post.scss"

const SinglePost = ({ data }) => {
  if (data.markdownRemark.frontmatter.templateKey === "blog-post") {
    return (
      <Layout>
        <Helmet></Helmet>
        <SEO
          title={data.markdownRemark.frontmatter.title}
          description={data.markdownRemark.frontmatter.description}
          img={data.markdownRemark.frontmatter.featuredimage}
          slug={data.slug.fields.slug}
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
                {data.markdownRemark.frontmatter.category.map((cat, i) => (
                  <Link key={i} to={kebabCase(cat)}>
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
  } else {
    return <h1>no post</h1>
  }
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
        templateKey
      }
      html
      timeToRead
    }
    slug: markdownRemark {
      fields {
        slug
      }
    }
  }
`

export default SinglePost
