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
      <div>
          <NewsContainer>
              <h1>Aktualności</h1>
              <div>{heading}</div>
              <NewsCard>{getNews(data)}</NewsCard>
          </NewsContainer>
      </div>
  )
}

export default Amenities;

const NewsBox = styled.div`
`

const PhotoImg = styled(Img)`
    height: 73%;
    width: 23.4vw;
    position: relative;
`

const NewsInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 45vh;
    width: 100%;
    padding: 2.9% 2rem 0 0;
`

const Date = styled.div`
    font-size: 13.5px;
    padding-top: 1rem;
`

const Title = styled.div`
    font-size: 21px;
    line-height: 28px;
    font-family: Poppins-bold;
    padding-top: 3.5%;
`

const NewsLink = styled.div`
    display: flex;
    position: relative;
    font-size: 13.5px;
    padding-top: 1.45rem;

    a {
      color: black;
    }
`

const NewsContainer = styled.div`
    height: 83vh;
    background-color: white;
    margin: 62px auto;
    padding: 0 9.1%;
    justify-content: center;

    h1 {
      text-align: center;
      padding: 48px 0 0 1px;
      font-size: 49px;
      font-family: Poppins-bold;
    }
`

const NewsCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 7%;
  margin-top: 7.1%;
`