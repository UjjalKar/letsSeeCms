import React, { useContext } from "react"
import { Link } from "gatsby"
import { kebabCase } from "lodash"

import { navigationContext } from "../../context/menuContext"

const Footer = () => {
  const navigation = useContext(navigationContext)

  return (
    <footer
      className="container py-4 site-footer"
      style={{ borderTop: "1px solid #fbefef" }}
    >
      <div className="row">
        <div className="col-12 col-md">
          <img src="/image/logo.png" width="40px" alt="infact logo footer" />
          <small className="d-block mb-3 text-muted">
            © {new Date().getFullYear()}
          </small>
        </div>
        <div className="col-6 col-md">
          <h5>Sitemap</h5>
          <ul className="list-unstyled text-small">
            {navigation.map((nav, i) => (
              <li key={i}>
                <Link className="text-muted" to={kebabCase(nav)}>
                  {nav}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li>
              <Link className="text-muted" to="#">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link className="text-muted" to="#">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
