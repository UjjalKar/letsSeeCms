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

  if (template === "blog-post") {
    return (
      <article
        className="col-md-6"
        style={{ fontFamily: `"PT Sans", sans-serif` }}
      >
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            {Allcategories.map((category, i) => (
              <strong key={i} className="d-inline-block mb-2 text-primary">
                {category}
              </strong>
            ))}
            <h3 className="mb-0">{title}</h3>
            <div className="mb-1 text-muted">{date}</div>
            <p className="card-text mb-auto">{excerpt}</p>
            <Link to={slug} className="stretched-link">
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
