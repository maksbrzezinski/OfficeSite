import React from 'react'
import styled from 'styled-components'
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
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
          <div />
      </Element4>
      <Element5>
        <img src={Gallery4} alt="Galeria4" />
      </Element5>
      
      <GalleryArrows>
        <Arrow1>
          <AiOutlineArrowLeft class="arrow-btn left" />
        </Arrow1>
        <Arrow2>
          <AiOutlineArrowRight class="arrow-btn right" />
        </Arrow2> 
      </GalleryArrows>
    </GalleryContainer>
  )
};

export default Gallery;

const GalleryContainer = styled.div`
    height: 86.5vh;
    margin: 64px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    overflow: hidden;

    img {
      object-fit: cover;
    }
    `

const Element1 = styled.div`
  grid-area: 1 / 1 / 4 / 2;
  margin: 0 11px 0 0;

  img {
    height: 87.2vh;
    width: 32.55vw;
  }
`

const Element2 = styled.div`
  grid-area: 1 / 2 / 3 / 3;
  margin: 0 20px 10px 12px;
  align-items: center;
  justify-content: center;

  img {
    height: 53.3vh;
    width: 40vw;
  }
`
const Element3 = styled.div`
  grid-area: 3 / 2 / 4 / 3;
  margin: 0 20px 0 12px;
  align-items: center;
  justify-content: center;

  img {
    height: 31.3vh;
    width: 40vw;
  }
`
const Element4 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  margin: 7px 0 0 -33.5%;
  position: relative;
  width: 23.5vw; 

  h1 {
    text-align: right;
    font-family: "Poppins-bold", sans-serif;
    font-size: clamp(15px, 8vw, 48.5px);
  }

  div {
      background-color: #000; 
      height: clamp(8px, 1.6vw, 16px); 
      margin-top: 10%;
    }

    @media (max-width: 768px) {
      margin: 26px 0 0 -15vw;
      width: 30vw; 
    }
`

const Element5 = styled.div`
  grid-area: 2 / 3 / 4 / 4;
  margin: 20px 0 0 4px;

  img {
    height: 60vh;
    width: 100%;
  }
`

const GalleryArrows = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    margin-top: 40vh;
    width: 100vw;
    z-index: 1;

    .arrow-btn {
      padding: 25%;
      background-color: #fff;
      height: 6.1rem;
      width: 6.1rem;
      margin-top: -24%;
    }

    .left {
      margin-left: 11%;
    }

    .right {
    }
`

const Arrow1 = styled.div`
`

const Arrow2 = styled.div`
  margin-left: auto;
  margin-right: 0.8%;
`