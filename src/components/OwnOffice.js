import React from 'react';
import styled from "styled-components"
import {StaticImage} from "gatsby-plugin-image"

const Amenities = () => {
  return (
    <OOContainer>
      <OOBg>
        <StaticImage src="../images/Carousel1.jpeg" alt="Own Office Picture" />
      </OOBg>
      <TextWrapper>
        <p>Lorem ipsum<br />vs własne biuro
          <div /> 
        </p>
      </TextWrapper>

      <LinesWrapper> 
        <LinesHorizontal className="linesStyles">
          <div className="decorationLines" />
          <div className="decorationLines" />
          <div className="decorationLines" />
          <div className="decorationLines" />
          <div className="decorationLines" />
          <div className="decorationLines" />
          <div className="decorationLines" />
          <div className="decorationLines" />
          <div className="decorationLines" />
        </LinesHorizontal>
        <LinesVertical className="linesStyles">
          <div className="decorationLines vertical" />
          <div className="decorationLines vertical" />
          <div className="decorationLines vertical" />
          <div className="decorationLines vertical" />
          <div className="decorationLines vertical" />
          <div className="decorationLines vertical" />
          <div className="decorationLines vertical" />
          <div className="decorationLines vertical" />
          <div className="decorationLines vertical" />
        </LinesVertical>
      </LinesWrapper>
    </OOContainer>
  )
};

export default Amenities;

const OOContainer = styled.div`
    position: relative;
    /* display: flex; */
    align-items: center;
    justify-content: center;
    /* margin: 9.5rem auto 2rem 8.2rem; */
    margin-top: 98px;
    /* left: 8.3%; */
    height: 62.7vh;
    width: 100vw;
    /* width: 91.7%; */

    Img {
      height: 62.7vh;
      width: 100vw;
      margin-left: 17.45%;
      z-index: -2;
    }

    .linesStyles {
      position: relative;
      height: 110px;
      width: 110px;
      /* line-height: 12.8px; */
    }

    .decorationLines {
      background-color: #000;
      height: 7px;
    }

    .decorationLines ~ .decorationLines {
      margin-top: 5.85px;
    }

    /* .vertical ~ .vertical {
      margin-top: 5.7px;
    } */

    @media (max-width: 1300px) {
      height: auto;
      margin-top: 25%;
      padding-bottom: 15%;
    }
`
const OOBg = styled.div`
    position: absolute;
    display: flex;
    width: auto;
    height: 100%;
    z-index: -1;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    height: 43.7vh;
    width: 33.3vw;
    margin-left: 9.1%;
    /* margin: 1% 9.1% 0 0; */
    /* font-size: 1.5rem; */
    padding: 0 10px 8px 0;

    p {
      position: relative;
      font-family: 'Poppins-bold', sans-serif;
      font-size: clamp(15px, 6vw, 48.8px);
      line-height: 1.15;
      margin: 35% 5% 5% 0;

      div {
        position: relative;
        background-color: #000; 
        width: 31.8vw; 
        height: clamp(7px, 2vh, 15px); 
        margin-top: 8.9vw;
        z-index: 5;
      }
    }

`

const LinesWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: -11.4%;
  right: 9%;
`

const LinesHorizontal = styled.div`
  `

const LinesVertical = styled.div`
    transform: rotate(270deg);
`

