import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import Offer from "../components/Offer"
import Amenities from "../components/Amenities"
import OwnOffice from "../components/OwnOffice"
import News from "../components/News"
import Gallery from "../components/Gallery"
import Seo from "../components/SEO"
import {Helmet} from 'react-helmet'

const IndexPage = () => (
  <Layout>
  <Helmet>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
  </Helmet>
    <Seo />
    <Hero />
    <Offer />
    <Amenities />
    <OwnOffice />
    <News />
    <Gallery />
  </Layout>
)

export default IndexPage
