// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/layout"

// import SEO from "../components/seo"
// import PostCard from "../components/PostCard/PostCard"
// const Category = ({ data }) => {
//   return (
//     <Layout>
//       <SEO title="Home" />
//       <div className="row">
//         {data.allMarkdownRemark.edges.map(({ node }) => (
//           <PostCard
//             key={node.id}
//             title={node.frontmatter.title}
//             excerpt={node.excerpt}
//             categories={node.frontmatter.categories}
//             path={node.frontmatter.path}
//             date={node.frontmatter.date}
//           />
//         ))}
//       </div>
//     </Layout>
//   )
// }
// export const Categories = graphql`
//   query CategoriesPage($cat: String!) {
//     allMarkdownRemark(filter: { frontmatter: { categories: { eq: $cat } } }) {
//       edges {
//         node {
//           frontmatter {
//             categories
//             date(formatString: "MMM Do YY")
//             path
//             excerpt
//             title
//           }
//         }
//       }
//     }
//   }
// `

// export default Category
