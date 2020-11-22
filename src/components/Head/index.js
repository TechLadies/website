import React from 'react'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import SEO from '../../../next-seo.config'

function HeadComponent (props) {
  return (
    <Head>
      <title>TechLadies</title>
      <meta content="TechLadies is a community in Asia that supports women with the network, education, and mentorship for their careers in technical roles." name="description" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <DefaultSeo {...SEO} />
    </Head>
  )
}
export default HeadComponent
