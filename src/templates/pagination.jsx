// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/layout"

// import SEO from "../components/seo"
// import PostCard from "../components/PostCard/PostCard"
// const Pagination = ({ data }) => {
//   return (
//     <Layout>
//       <SEO title="Home" />
//       <div class="row">
//         {data.allMarkdownRemark.nodes.map(({ id, excerpt, frontmatter }) => (
//           <PostCard
//             key={id}
//             title={frontmatter.title}
//             excerpt={excerpt}
//             categories={frontmatter.categories}
//             path={frontmatter.path}
//             date={frontmatter.date}
//           />
//         ))}
//       </div>
//     </Layout>
//   )
// }
// export const PaginationPage = graphql`
//   query PaginationPage($skip: Int!, $limit: Int!) {
//     allMarkdownRemark(
//       sort: { fields: frontmatter___date, order: DESC }
//       limit: $limit
//       skip: $skip
//     ) {
//       nodes {
//         excerpt(pruneLength: 35)
//         frontmatter {
//           categories
//           title
//           path
//           date(formatString: "MMM Do YY")
//         }
//       }
//     }
//   }
// `

// export default Pagination
