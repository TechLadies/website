import { useEffect } from "react"
import HeadComponent from "../components/Head"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useAnalytics } from "../hooks/useAnalytics"
import Router, { useRouter } from "next/router"
import withFBQ from "next-fbq"

import "../styles/globals.scss"

function MyApp ({ Component, pageProps }) {
  const { init, trackPageViewed } = useAnalytics()
  const router = useRouter()

  useEffect(() => {
    init("UA-71348167-1")
    trackPageViewed()
    router.events.on("routeChangeComplete", () => {
      trackPageViewed()
    })
  }, [router.events])

  return (
    <>
      <HeadComponent />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

// Wrap with fb pixel
export default withFBQ("2039215636185492", Router)(MyApp)
