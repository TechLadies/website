import React from 'react'
import Head from 'next/head'

function HeadComponent (props) {
  return (
    <Head>
      <title>TechLadies</title>
      <meta content="TechLadies is a community in Asia that supports women with the network, education, and mentorship for their careers in technical roles." name="description" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/ogimages/favicon.png" sizes="16x16" type="image/png" />
    </Head>
  )
}
export default HeadComponent
