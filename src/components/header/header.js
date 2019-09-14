import React, { useContext } from "react"
import { Link } from "gatsby"
import { kebabCase } from "lodash"

import { navigationContext } from "../../context/menuContext"

import "../../styles/header.style.scss"

const Header = () => {
  const menus = useContext(navigationContext)
  return (
    <header className="mb-4">
      <nav
        className="navbar navbar-expand-md navbar-dark fixed-top"
        style={{ backgroundColor: "#3F51B5" }}
      >
        <div className="container">
          <a className="py-2" href="/">
            <img src="/image/logo.png" alt="astroid logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
              {menus.map(menu => (
                <li className="nav-item">
                  <Link className="nav-link" to={kebabCase(menu)}>
                    {menu.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Header
