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
    align-items: center;
    justify-content: center;
    margin-top: 78px;
    // min-height: 62.7vh;
    min-height: 643px;
    width: 100vw;

    Img {
      height: 100%;
      width: 100vw;
      margin-left: 17.45%;
      z-index: -2;
    }

    .linesStyles {
      position: relative;
      height: 110px;
      width: 110px;
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
    max-height: 448px;
    max-width: 815px;
    padding-left: 175px;
    // padding: 0 10px 8px 0;

    p {
      position: relative;
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 65px;
      line-height: 1.16;
      margin-top: 220px;
      // margin: 35% 5% 5% 0;

      div {
        position: relative;
        background-color: #000; 
        width: 610px; 
        height: 20px; 
        margin-top: 170px;
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

