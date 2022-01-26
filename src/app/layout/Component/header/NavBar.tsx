import React from "react";

const Header = () => {
  return (
    <header className="site-header sticky-top ">
      <nav className="navbar navbar-expand-md navbar-dark bg-nav">
        <a className="navbar-brand" href="#">
          Carousel
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Create
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
