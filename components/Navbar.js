import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">TechLadies</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/about/">
                <a className="nav-link active" aria-current="page">
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/our-programs/">
                <a className="nav-link active" aria-current="page">
                  Our Programs
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contribute/">
                <a className="nav-link active" aria-current="page">
                  Contribute
                </a>
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link href="#">
              <a className="btn btn-outline-success">Dynamic CTA</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
