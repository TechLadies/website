import HeadComponent from "../components/Head"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

import "../styles/globals.scss";

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <HeadComponent />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
