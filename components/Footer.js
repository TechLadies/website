export default function Footer() {
  return (
    <footer className="bd-footer p-3 p-md-5 mt-5 bg-light text-center text-sm-left">
      <div className="container">
        <ul className="bd-footer-links pl-0 mb-3">
          <li className="d-inline-block">
            <a href="https://github.com/twbs">GitHub</a>
          </li>
          <li className="d-inline-block ml-3">
            <a href="https://twitter.com/getbootstrap">Twitter</a>
          </li>
          <li className="d-inline-block ml-3">
            <a href="/docs/5.0/examples/">Examples</a>
          </li>
          <li className="d-inline-block ml-3">
            <a href="/docs/5.0/about/overview/">About</a>
          </li>
        </ul>
        <p className="mb-0">
          Designed and built with all the love in the world by the{' '}
          <a href="/docs/5.0/about/team/">Bootstrap team</a> with the help of{' '}
          <a href="https://github.com/twbs/bootstrap/graphs/contributors">
            our contributors
          </a>
          .
        </p>
        <p className="mb-0">
          Currently v5.0.0-alpha1. Code licensed{' '}
          <a
            href="https://github.com/twbs/bootstrap/blob/main/LICENSE"
            target="_blank"
            rel="license noopener"
          >
            MIT
          </a>
          , docs{' '}
          <a
            href="https://creativecommons.org/licenses/by/3.0/"
            target="_blank"
            rel="license noopener"
          >
            CC BY 3.0
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
