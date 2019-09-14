import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, title, img, slug }) {
  const { ogimage } = useStaticQuery(
    graphql`
      query {
        ogimage: allFile(
          filter: { relativePath: { eq: "space-wallpaper.jpg" } }
        ) {
          nodes {
            publicURL
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
    >
      <title>
        {title ||
          `Learn about space, science facts, physics, planets, star - Infact`}
      </title>
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={`https://infact.netlify.com${slug || ""}`}
      />
      <meta
        property="twitter:title"
        content={`${title ||
          "Learn about space, science facts, physics, planets, star - Infact"}`}
      />
      <meta
        property="twitter:description"
        content={`${description ||
          `learn with us about galaxy stars system, planets, black hole, ask any queries about 
    infinite world - Infact`}`}
      />
      <meta
        property="twitter:image"
        content={img || ogimage.nodes.map(node => node.publicURL)}
      />

      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://infact.netlify.com${slug || ""}`}
      />
      <meta
        property="og:title"
        content={`${title ||
          "Learn about space, science facts, physics, planets, star - Infact"}`}
      />
      <meta
        property="og:description"
        content={`${description ||
          `learn with us about galaxy stars system, planets, black hole, ask any queries about 
    infinite world - Infact`}`}
      />
      <meta
        property="og:image"
        content={img || ogimage.nodes.map(node => node.publicURL)}
      />
    </Helmet>
  )
}

export default SEO
