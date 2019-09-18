const path = require("path")
const _ = require("lodash")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allMarkdownRemark {
          distinct(field: frontmatter___category)
          nodes {
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  //  Careate Category page
  const cats = result.data.allMarkdownRemark.distinct
  cats.forEach(cat => {
    createPage({
      path: `/category/${_.kebabCase(cat)}/`,
      component: path.resolve("./src/templates/category.jsx"),
      context: {
        cat: cat,
      },
    })
  })
  const posts = result.data.allMarkdownRemark.nodes
  posts.forEach(post => {
    createPage({
      path: `${post.fields.slug}`,
      component: path.resolve("./src/templates/single-post.jsx"),
      context: {
        slug: post.fields.slug,
      },
    })
  })

  // Create blog-list pages
  // const posts = result.data.allMarkdownRemark.edges
  // const postsPerPage = 6
  // const numPages = Math.ceil(posts.length / postsPerPage)
  // Array.from({ length: numPages }).forEach((_, i) => {
  //   createPage({
  //     path: i === 0 ? `/page` : `/page/${i + 1}`,
  //     component: path.resolve("./src/templates/pagination.jsx"),
  //     context: {
  //       limit: postsPerPage,
  //       skip: i * postsPerPage,
  //       numPages,
  //       currentPage: i + 1,
  //     },
  //   })
  // })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode, basePath: `posts` })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
