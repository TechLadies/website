import clsx from 'clsx';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={clsx('pt-5 pb-5 mt-4', styles.footer)}>
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-3">
            <h5>Join our Community</h5>
            <input
              className="form-control"
              placeholder="E-mail address"
              type="email"
            />
          </div>
          <div className="col-lg-4 offset-lg-1">
            <div className="row">
              <div className="col-lg-12 col-6 mb-4">
                <h5>Programs</h5>
                <ul className={clsx('list-unstyled', styles.footerLinksList)}>
                  <li>
                    <a href="#">Bootcamp</a>
                  </li>
                  <li>
                    <a href="#">Mentorship</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-12 col-6 mb-4">
                <h5>Contribute</h5>
                <ul className={clsx('list-unstyled', styles.footerLinksList)}>
                  <li>
                    <a href="#">Volunteer</a>
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
                    <a href="#">Community Code of Conduct</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <h5>Contact Us</h5>
            <p>
              For general enquiries, please email:
              <br />
              <a href="mailto:hello@techladies.co">hello@techladies.co</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
