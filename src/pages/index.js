import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import Offer from "../components/Offer"
import Amenities from "../components/Amenities"
import OwnOffice from "../components/OwnOffice"
import News from "../components/News"
import Gallery from "../components/Gallery"
import Seo from "../components/Seo"
import {Helmet} from 'react-helmet'

const IndexPage = () => (
  <Layout>
    <Helmet>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&display=swap" rel="stylesheet" />
      <script src="https://kit.fontawesome.com/660c0b11ef.js" crossorigin="anonymous"></script>
    </Helmet>
    <Seo />
    <Hero />
    <Offer />
    <Amenities />  {/* adds a bit of margin-right */}
    <OwnOffice />
    <News />
    <Gallery />
  </Layout>
)

export default IndexPage
