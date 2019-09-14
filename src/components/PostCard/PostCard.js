import React from "react"
import { Link } from "gatsby"
import "../../styles/postcard.style.scss"
function PostCard({
  thumbnail,
  template,
  title,
  excerpt,
  date,
  tags,
  categories,
  slug,
}) {
  const Allcategories = categories || []
  const Alltags = tags || []

  if (template === "blog-post") {
    return (
      <article class="col-md-6" style={{ fontFamily: `"PT Sans", sans-serif` }}>
        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            {Allcategories.map(category => (
              <strong class="d-inline-block mb-2 text-primary">
                {category}
              </strong>
            ))}
            <h3 class="mb-0">{title}</h3>
            <div class="mb-1 text-muted">{date}</div>
            <p class="card-text mb-auto">{excerpt}</p>
            <Link to={slug} class="stretched-link">
              Continue reading
            </Link>
          </div>
        </div>
      </article>
    )
  } else {
    return null
  }
}
export default PostCard
