import NavLink from '../NavLink';

export default function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="navbar navbar-expand-lg navbar-dark"
    >
      <div className="container">
        <NavLink href="/">
          <a aria-label="TechLadies Logo" className="navbar-brand">
            <img alt="TechLadies Logo" src="/img/logo.png" />
          </a>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink href="/about/">
                <a className="nav-link">About</a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/our-programs/">
                <a className="nav-link">Our Programs</a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/contribute/">
                <a className="nav-link">Contribute</a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="#">
                <a className="nav-link">Blog</a>
              </NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <NavLink href="#">
              <a className="btn btn-light">Dynamic CTA</a>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
