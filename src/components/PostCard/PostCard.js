import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const PostCard = ({
  thumbnail,
  title,
  excerpt,
  date,
  tags,
  categories,
  path,
}) => {
  return (
    <div class="col-md-6">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          {categories.map(category => (
            <strong class="d-inline-block mb-2 text-primary">{category}</strong>
          ))}
          <h3 class="mb-0">{title}</h3>
          <div class="mb-1 text-muted">{date}</div>
          <p class="card-text mb-auto">{excerpt}</p>
          <Link to={path} class="stretched-link">
            Continue reading
          </Link>
        </div>
        <div class="col-auto d-none">
          {/* <div class="col-auto d-none d-lg-block"> */}
          <svg
            class="bd-placeholder-img"
            width="200"
            height="250"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Thumbnail"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c"></rect>
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">
              Thumbnail
            </text>
          </svg>
        </div>
      </div>
    </div>
  )
}
PostCard.propsType = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  date: PropTypes.string,
  tags: PropTypes.string,
}

PostCard.defaultProps = {
  thumbnail: "",
  title: "",
  excerpt: "",
  date: "",
  tags: "",
}

export default PostCard
