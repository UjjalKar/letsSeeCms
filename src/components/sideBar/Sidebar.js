import React from "react"
import PropsTypes from "prop-types"

export default function Sidebar({ isHomePage, isSinglePage }) {
  if (isHomePage) {
    return (
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
                className="btn d-block w-100 mb-2"
                type="submit"
                style={{
                  backgroundColor: "#563d7c",
                  color: "#fff",
                  textTransform: "uppercase",
                }}
              >
                I want daily update!
              </button>
            </form>
          </div>
        </div>
        {/* <div className="tags">
            {allMarkdownRemark.distinct.map(tag => (
              <a href={tag}>
                <span class="badge badge-primary">{tag}</span>
              </a>
            ))}
          </div> */}
      </div>
    )
  }
  if (isSinglePage) {
  }
}

Sidebar.prototype = {
  isHomePage: PropsTypes.bool,
  isSinglePage: PropsTypes.bool,
}
