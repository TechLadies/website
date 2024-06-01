// Taken from: https://flaviocopes.com/nextjs-active-link/

import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function NavLink({ href, children, ...others }) {
  const router = useRouter()

  let className = children.props.className || ""
  // Next.js route pathnames do not have trailing slashes, so normalize by
  // removing from the href prop.
  const normalizedHref = href.replace(/\/$/, "")
  if (router.pathname === normalizedHref) {
    className = `${className} active`
  }

  return (
    <Link legacyBehavior href={href} {...others}>
      {React.cloneElement(children, { className })}
    </Link>
  )
}
