import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import NavLink from '../NavLink';

export default function Navbar() {
  const [isExpanded, setExpanded] = useState(false);

  const router = useRouter();

  useEffect(() => {
    function hideExpandedNav() {
      setExpanded(false);
    }

    // Close the navbar when a navigation occurs.
    router.events.on('routeChangeStart', hideExpandedNav);

    return () => {
      router.events.off('routeChangeStart', hideExpandedNav);
    };
  }, [router]);

  return (
    <header
      aria-label="Main navigation"
      className="navbar navbar-expand-lg navbar-dark"
    >
      <nav className="container">
        <NavLink href="/">
          <a aria-label="TechLadies Logo" className="navbar-brand">
            <img alt="TechLadies Logo" src="/img/logo.png" />
          </a>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
          onClick={() => {
            setExpanded(!isExpanded);
          }}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={clsx('navbar-collapse', {
            collapse: !isExpanded,
          })}
        >
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink href="/about/">
                <a className="nav-link">About</a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/mentorship-2/">
                <a className="nav-link">Mentorship #2</a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/bootcamp-6/">
                <a className="nav-link">Bootcamp #6</a>
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
      </nav>
    </header>
  );
}
