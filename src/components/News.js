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
              alt={item.node.alt}
              fluid={item.node.img.childImageSharp.fluid}
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
`

const PhotoImg = styled(Img)`
    height: 73%;
    width: 23.4vw;
`

const NewsInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 45vh;
    width: 100%;
    padding: 2% 0;
`

const Date = styled.div`
    font-size: 13.5px;
    padding-top: 3.6%;
`

const Title = styled.div`
    font-family: 'Poppins-bold', sans-serif;
    font-size: 21px;
    line-height: 29px;
    padding-top: 2.4%;
`

const NewsLink = styled.div`
    font-size: 13.5px;
    padding-top: 5.1%;

    a {
      color: #000;
    }
`

const NewsContainer = styled.div`
    position: relative;
    height: 83vh;
    margin: 4.3vw auto;

    h1 {
      text-align: center;
      padding: 48px 0 0 1px;
      font-size: 49px;
      font-family: 'Poppins-bold', sans-serif;
    }
  `

const NewsCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 5.8vw 3.4vw;
  padding-left: 5.7vw;
`