import clsx from 'clsx';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={clsx('p-3 p-md-5 mt-5', styles.footer)}>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h5>Join our community</h5>
            <input
              className="form-control"
              placeholder="E-mail address"
              type="email"
            />
          </div>
          <div className="col-sm">
            <div className="mb-5">
              <h5>Programs</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Bootcamp</a>
                </li>
                <li>
                  <a href="#">Mentorship</a>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h5>Contribute</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Volunteer</a>
                </li>
                <li>
                  <a href="#">Donate</a>
                </li>
              </ul>
            </div>
            <div>
              <h5>About</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Community Code of Conduct</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm">
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
