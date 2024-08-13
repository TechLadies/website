import { useEffect } from "react"
import HeadComponent from "../components/Head"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useAnalytics } from "../hooks/useAnalytics"
import Router, { useRouter } from "next/router"
// import withFBQ from "next-fbq"
import Script from "next/script"
import { DefaultSeo } from "next-seo"
import SEO from "../../next-seo.config"

import "../styles/globals.scss"

function MyApp({ Component, pageProps }) {
  const { init, trackPageViewed } = useAnalytics()
  const router = useRouter()

  useEffect(() => {
    init("UA-71348167-1")
    trackPageViewed()

    const handleRouteChange = () => {
      trackPageViewed()
    }

    router.events.on("routeChangeComplete", handleRouteChange)

    // Cleanup the event listener on unmount
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <HeadComponent />
      <DefaultSeo {...SEO} />
      <Navbar />

      {/* Facebook Pixel Script */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive" // Load after the page is interactive
        onLoad={() => {
          // Initialize the Facebook Pixel after the script is loaded
          window.fbq = function () {
            window.fbq.callMethod
              ? window.fbq.callMethod.apply(window.fbq, arguments)
              : window.fbq.queue.push(arguments)
          }
          if (!window._fbq) window._fbq = window.fbq
          window.fbq.push = window.fbq
          window.fbq.loaded = true
          window.fbq.version = "2.0"
          window.fbq.queue = []
          window.fbq("init", "2039215636185492") // Your Pixel ID
          window.fbq("track", "PageView") // Track page view
        }}
        src="https://connect.facebook.net/en_US/fbevents.js" // Load the Facebook Pixel script
      />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
