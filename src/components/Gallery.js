import React from 'react'
import styled from 'styled-components'
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import {StaticImage} from 'gatsby-plugin-image'
import Img from 'gatsby-image'
import Gallery1 from "../images/Office1.jpeg"
import Gallery2 from "../images/Office2.jpeg"
import Gallery3 from "../images/Office3.jpeg"
import Gallery4 from "../images/Office4.jpeg"

const Gallery = () => {
  return (

    <GalleryContainer>
      <Element1>
        <img src={Gallery1} alt="Galeria1" />
      </Element1>
      <Element2>
        <img src={Gallery2} alt="Galeria2" />
      </Element2>
      <Element3>
        <img src={Gallery3} alt="Galeria3" />
      </Element3>
      <Element4>
          <h1>Galeria</h1>
          <hr css={`height: 10px;`}/>
      </Element4>
      <Element5>
        <img src={Gallery4} alt="Galeria4" />
      </Element5>
      <GalleryArrows>
        <Arrow1>
          <AiOutlineArrowLeft />
        </Arrow1>
        <Arrow2>
          <AiOutlineArrowRight />
        </Arrow2> 
      </GalleryArrows>
    </GalleryContainer>
  )
};

export default Gallery;

const GalleryContainer = styled.div`
    height: 87.2vh;
    margin: 67px 0 67px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    overflow: hidden;
    `

const Element1 = styled.div`
  grid-area: 1 / 1 / 4 / 2;
  margin: 0 11px 0 0;

  img {
    height: 87.2vh;
    position: relative;
    width: 32.55vw;
    object-fit: cover;
  }
`

const Element2 = styled.div`
  grid-area: 1 / 2 / 3 / 3;
  margin: 0 20px 10px 12px;
  align-items: center;
  justify-content: center;

  img {
    height: 53.75vh;
    position: relative;
    width: 40vw;
    object-fit: cover;
  }
`
const Element3 = styled.div`
  grid-area: 3 / 2 / 4 / 3;
  margin: 0 20px 0 12px;
  align-items: center;
  justify-content: center;

  img {
    height: 31.5vh;
    position: relative;
    width: 40vw;
    object-fit: cover;
  }
`
const Element4 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  margin: 7px 31.3% 0 0;

  h1 {
      text-align: right;
      margin-right: 9.15%;
      margin-top: 0.5%;
      font-family: Poppins-bold;
      font-size: 48.5px;
    }

  hr {
    position: absolute;
    width: 23.5vw; 
    background-color: black; 
    color: black; 
    height: 1rem; 
    border: 0px; 
    margin-top: 26px;
    right: 9.1%;
    opacity: 1;
  }
`

const Element5 = styled.div`
  grid-area: 2 / 3 / 4 / 4;
  margin: 20px 0 0 4px;

  img {
    height: 60vh;
    position: relative;
    width: 100%;
    object-fit: cover;
  }
`

const GalleryArrows = styled.div`
    position: absolute;
    z-index: 1;
    text-align: center;
    margin: auto;
`

const Arrow1 = styled.div`
    position: absolute;
    padding-top: 9px;
    font-size: 3rem;
    background-color: white;
    display: block;
    align-items: center;
    height: 6.05rem;
    width: 6.05rem;
    top: 37.3vh;
    left: 0.8vw;
`
const Arrow2 = styled.div`
    position: absolute;
    padding-top: 9px;
    left: 92.5vw;
    top: 37.3vh;
    font-size: 3rem;
    background-color: white;
    display: block;
    height: 6.05rem;
    width: 6.05rem;
`