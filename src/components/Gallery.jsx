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
    <div className="gallery-desktop">
      <Element1>
        <img src={Gallery1} alt="Galeria1" />
      </Element1>
      <Element2>
        <img src={Gallery2} alt="Galeria2" />
      </Element2>
      <Element3>
        <img src={Gallery3} alt="Galeria3" />
      </Element3>
      <Element4 className="show-me">
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
    </div>

    <div className="gallery-mobile">
      <Element4 className="show-me">
          <h1>Galeria</h1>
          <div />
      </Element4>
      <div id="galleryBottom" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
              <img src={Gallery1} className="d-block w-100 bg-secondary"  alt="Office 1" />
          </div>
          <div className="carousel-item">
              <img src={Gallery2} className="d-block w-100 bg-secondary" alt="Office 2" />
          </div>
          <div className="carousel-item">
              <img src={Gallery3} className="d-block w-100 bg-secondary" alt="Office 3" />
          </div>
          <div className="carousel-item">
              <img src={Gallery4} className="d-block w-100 bg-secondary" alt="Office 4" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#galleryBottom" role="button" data-bs-slide="prev">
            <span className="fa-solid fa-arrow-left" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next" href="#galleryBottom" role="button" data-bs-slide="next">
            <span className="fa-solid fa-arrow-right" aria-hidden="true"></span>
        </a>
      </div>
    </div>
    </GalleryContainer>
  )
}

export default Gallery;

const GalleryContainer = styled.div`
    position: relative;

    .gallery-desktop {
      height: 889px;
      margin: 64px 0;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      overflow: hidden;
  
      img {
        object-fit: cover;
      }
    }

    .gallery-mobile {
      display: none;
      height: 100%;
      width: 100%;
      overflow: hidden;
  
      img {
          min-height: 953px;
          min-width: 100%;
      }

      .carousel-control-prev, .carousel-control-next {
        position: absolute;
        height: 120px;
        width: 120px;
        top: 50%;
        transform: translate(0, -50%);
        background-color: #fff;
        color: #000;
        font-size: 38px;
        opacity: 1;
        text-decoration: none;
        transition: 0.3s;
      }

      .carousel-control-prev:hover, .carousel-control-next:hover {
        background-color: #ffcc38;
      }
  
      .carousel .slide {
        position: relative;
      }
    }

    @media (max-width: 768px) {
      .gallery-desktop {
        display: none;
      }

      .gallery-mobile {
        display: flex;
        flex-direction: column;

        .show-me {
          margin-top: 0;
          margin-bottom: 40px;
          margin-left: 5%;

          div {
            margin-top: 20px;
            height: 10px;
            width: 80px;
          }
        }

        #galleryBottom {
          min-height: 380px;
        }

        .carousel-control-prev, .carousel-control-next {
          height: 75px;
          width: 75px;
        }

        img {
          object-fit: cover;
          min-height: 380px;
        }
      }
    }
    `

const Element1 = styled.div`
  grid-area: 1 / 1 / 4 / 2;
  margin: 0 14px 0 0;

  img {
    min-height: 100%;
    width: 32.3vw;
  }
`

const Element2 = styled.div`
  grid-area: 1 / 2 / 3 / 3;
  margin: 0 20px 10px 15px;
  align-items: center;
  justify-content: center;

  img {
    height: 549px;
    width: 39.8vw;
  }
`
const Element3 = styled.div`
  grid-area: 3 / 2 / 4 / 3;
  margin: 0 20px 0 15px;
  align-items: center;
  justify-content: center;

  img {
    height: 320px;
    width: 39.8vw;
  }
`
const Element4 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  margin: 11px 0 0 -154px;
  position: relative;
  width: 23.5vw; 

  h1 {
    text-align: right;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 65px;
  }

  div {
      background-color: #000; 
      // height: clamp(8px, 1.6vw, 16px); 
      height: 20px; 
      width: 450px;
      margin-top: 45px;
      margin-left: 5px;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 42px;
      }
    }
`

const Element5 = styled.div`
  grid-area: 2 / 3 / 4 / 4;
  margin: 20px 0 0 11px;
  width: 25vw;

  img {
    height: 100%;
    width: 100%;
  }
`

const GalleryArrows = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 100vw;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 1;

    .arrow-btn {
      padding: 32px;
      background-color: #fff;
      height: 130px;
      width: 130px;
    }

    .left {
      margin-left: 15px;
    }

    .right {
      margin-right: 30px;
    }

    @media (max-width: 992px) {
      .arrow-btn {
        padding: 18px;
        height: 90px;
        width: 90px;
      }
    }
`

const Arrow1 = styled.div`
`

const Arrow2 = styled.div`
  margin-left: auto;
`