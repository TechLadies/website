import { Facebook, Instagram } from 'react-feather';
import clsx from 'clsx';

import styles from './index.module.scss';
import NavLink from '../NavLink/index';

export default function Footer() {
  return (
    <footer className={clsx('py-5', styles.footer)}>
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-3">
            <h5 className="mb-3">Join our Community</h5>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                alert('TODO: POST email to API');
              }}
            >
              <input
                className="form-control"
                placeholder="E-mail address"
                required={true}
                type="email"
              />
            </form>
          </div>
          <div className="col-lg-4 offset-lg-1">
            <div className="row">
              <div className="col-lg-12 col-6 mb-4">
                <h5>Programs</h5>
                <ul className={clsx('list-unstyled', styles.footerLinksList)}>
                  <li>
                    <a href="/bootcamp-6">Bootcamp</a>
                  </li>
                  <li>
                    <a href="/mentorship-2">Mentorship</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-12 col-6 mb-4">
                <h5>Contribute</h5>
                <ul className={clsx('list-unstyled', styles.footerLinksList)}>
                  <li>
                    <a href="/contribute">Volunteer</a>
                  </li>
                  <li>
                    <a href="#">Donate</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-12 col-6">
                <h5>About</h5>
                <ul className={clsx('list-unstyled', styles.footerLinksList)}>
                  <li>
                    <NavLink href="/conduct/">
                      <a className="nav-link">Community Code of Conduct</a>
                    </NavLink>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <h5 className="mb-3">Contact Us</h5>
            <p>
              For general enquiries, please email:
              <br />
              <a href="mailto:hello@techladies.co">hello@techladies.co</a>
            </p>
            <div className="d-flex">
              <a
                aria-label="Link to Facebook page"
                className="mr-2"
                href="https://www.facebook.com/TechLadies"
              >
                <Facebook />
              </a>
              <a aria-label="Link to Instagram Profile" href="https://www.instagram.com/techladiescode/">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
