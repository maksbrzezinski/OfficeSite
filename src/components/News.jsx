import React from 'react';
import styled from 'styled-components'
import { Link } from 'gatsby'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'

const Amenities = ({heading}) => {
const data = useStaticQuery(graphql`
query MyQuery {
  allNewsDataJson {
    edges {
      node {
        name
        alt
        date
        link
        img {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
}
`)

function getNews(data) {
  const newsArray = []
  data.allNewsDataJson.edges.forEach((item, index) => {
      newsArray.push(
        <NewsBox key={index}>
          <PhotoImg 
            fluid={item.node.img.childImageSharp.fluid}
            alt={item.node.alt}
          />
          <NewsInfo>
            <Date>{item.node.date}</Date>
            <Title>{item.node.name}</Title>
            <NewsLink>
              <Link to={item.node.link}>Więcej</Link>
            </NewsLink>
          </NewsInfo>
        </NewsBox>
      )
      })
  return newsArray
}

  return (
          <NewsContainer>
              <h1>Aktualności</h1>
              <NewsCard>{getNews(data)}</NewsCard>
          </NewsContainer>
  )
}

export default Amenities;

const NewsBox = styled.div`
  position: relative;
  max-width: 450px;
  margin: 0 55px;

  @media (max-width: 1680px) {
    margin: 0 20px;
  }

  @media (max-width: 1470px) {
    max-width: 350px;
  }

  @media (max-width: 1170px) {
    margin-top: 40px;
  }
`

const PhotoImg = styled(Img)`
    height: 335px;
    width: 450px;

    @media (max-width: 1470px) {
      max-width: 350px;
    }
`

const NewsInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2% 0;
    margin-top: 7px;
`

const Date = styled.div`
    font-size: 18px;
    padding-top: 3.6%;

    @media (max-width: 768px) {
      font-size: 14px;
    }
`

const Title = styled.div`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    padding-top: 15px;

    @media (max-width: 768px) {
      font-size: 22px;
    }
`

const NewsLink = styled.div`
    font-size: 18px;
    padding-top: 29px;

    a {
      color: #000;
    }

    @media (max-width: 768px) {
      font-size: 14px;
    }
`

const NewsContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 62.56vh;
    margin: 99px auto;

    h1 {
      text-align: center;
      padding: 48px 0 0 1px;
      font-size: 65px;
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
    }

    @media (max-width: 1170px) {
      margin-top: 30px;
    }

    @media (max-width: 768px) {
      margin-top: -60px;

      h1 {
        font-size: 36px;
      }
    }
  `

const NewsCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 104px;

  @media (max-width: 1170px) {
    margin-top: 30px;
  }
`