import React from 'react';
import styled from "styled-components"
import {StaticImage} from "gatsby-plugin-image"

const Amenities = () => {
  return (
    <OOContainer>
      <OOBg>
        <StaticImage src="../images/Carousel3.jpeg" alt="Own Office Picture" />
      </OOBg>
      <TextWrapper>
        <p>Lorem ipsum<br />vs własne biuro</p>
        <div /> 
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
    min-height: 643px;
    width: 100vw;

    Img {
      height: 100%;
      min-width: 100%;
      margin-left: 17.3%;
      z-index: -2;
    }

    .linesStyles {
      position: relative;
      max-height: 145px;
      max-width: 145px;
    }

    .decorationLines {
      background-color: #000;
      height: 9px;
      width: 145px;
    }

    .decorationLines ~ .decorationLines {
      margin-top: 8px;
    }

    @media (max-width: 1300px) {
      height: auto;
      margin-top: 25%;
      padding-bottom: 15%;
    }

    @media (max-width: 1200px) {
      Img {
        margin-left: 4%;
      }

      .linesStyles {
        max-height: 105px;
        max-width: 105px;  
      }
  
      .decorationLines {
        height: 7px;
        width: 105px;     
      }
  
      .decorationLines ~ .decorationLines {
        margin-top: 5.3px;
      }
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column-reverse;
      margin-top: 50px; 
      min-height: 550px;
    }
`
const OOBg = styled.div`
    position: absolute;
    display: grid;
    min-width: 100%;
    height: 100%;
    z-index: -1;

    img {
      height: 100%;
      width: 100%;
    }

    @media (max-width: 768px) {
      display: flex;
      position: relative;
      margin-left: 4%;
      margin-right: 4%;
    }

    @media (max-width: 576px) {
      margin-left: 0%;
    }
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #fff;
    min-height: 448px;
    max-width: 815px;
    padding-left: 175px;

    p {
      position: relative;
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 65px;
      line-height: 1.16;
      margin-top: 220px;

    }
    div {
      position: absolute;
      background-color: #000; 
      width: 610px; 
      height: 20px; 
      margin-top: 540px;
      z-index: 5;
    }

    @media (max-width: 1200px) {
      max-width: 520px;
      min-height: 350px;
      padding-left: 7%;
      padding-right: 7%;

      p {
        font-size: 48px;
      }

      div {
        width: 380px;
        height: 15px;
        margin-top: 370px;
      }
    }

    @media (max-width: 768px) {
      margin-top: 30px;
      min-height: 150px;
      display: flex;
      margin-right: auto;

      p {
        margin-top: 0;
        font-size: 36px;
      }

      div {
        display: flex;
        position: relative;
        margin-top: 0;
        width: 150px;
        height: 8px;
      }
    }
`

const LinesWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: -11.2%;
  right: 9.8%;

  @media (max-width: 768px) {
    display: none;
  }
`

const LinesHorizontal = styled.div`
  `

const LinesVertical = styled.div`
    transform: rotate(270deg);
`

