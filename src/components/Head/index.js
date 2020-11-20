import React from 'react'
import Head from 'next/head';

function HeadComponent (props) {
  return (
    <Head>
      <title>TechLadies</title>
      <meta content="TechLadies is a community in Asia that supports women with the network, education, and mentorship for their careers in technical roles." name="description" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content="/ogimages/og-main.png" property="og:image" />
      <meta content="website" property="og:type" />
      <meta content="http://www.techladies.co/" property="og:url" />
      <meta content="TechLadies" property="og:site_name" />
      <meta content="TechLadies - Start your career in tech" property="og:title" />
      <meta content="TechLadies is a community in Asia that supports women with the network, education, and mentorship for their careers in technical roles." property="og:description" /><meta content="summary_large_image" name="twitter:card" />
      <meta content="@techladiescode" name="twitter:site" />
      <meta content="TechLadies - Start your career in tech" name="twitter:title" />
      <meta content="TechLadies is a community in Asia that supports women with the network, education, and mentorship for their careers in technical roles." name="twitter:description" />
      <meta content="/ogimages/og-main.png" name="twitter:image" />
    </Head>
  )
}
export default HeadComponent
