import Head from "next/head"
import NavLink from "../components/NavLink"

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>Page Not Found | TechLadies</title>
      </Head>
      <main>
        <div className="container py-6 text-center">
          <h1 className="mb-4">Page Not Found</h1>
          <p className="mb-4 text-body large-line-height">
            Sorry, the page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <NavLink href="/">
            <a className="btn btn-primary">Back to Home</a>
          </NavLink>
        </div>
      </main>
    </div>
  )
}
