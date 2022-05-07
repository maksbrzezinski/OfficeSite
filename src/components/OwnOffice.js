import React from 'react';
import styled from "styled-components"
import {AiOutlineMenu} from "react-icons/ai"
import {StaticImage} from "gatsby-plugin-image"

const Amenities = () => {
  return (
    <OOContainer>
      <OOBg>
        <StaticImage src="../images/Carousel1.jpeg" alt="Own Office Picture" />
      </OOBg>
      <TextWrapper>
        <p>Lorem ipsum <br /> vs własne biuro</p>
        <hr />
      </TextWrapper>
      <LinesHorizontal>
        <hr css={`height: 7px;`}/>
        <hr css={`height: 7px;`}/>
        <hr css={`height: 7px;`}/>
        <hr css={`height: 7px;`}/>
        <hr css={`height: 7px;`}/>
        <hr css={`height: 7px;`}/>
        <hr css={`height: 7px;`}/>
        <hr css={`height: 7px;`}/>
        <hr css={`height: 7px;`}/>
      </LinesHorizontal>
      <LinesVertical>
        <hr css={`height: 7px;`}/>
        <hr css={`height: 7px;`}/>
        <hr css={`height: 7px;`}/>
        <hr css={`height: 7px;`}/>
        <hr css={`height: 7px;`}/>
        <hr css={`height: 7px;`}/>
        <hr css={`height: 7px;`}/>
        <hr css={`height: 7px;`}/>
        <hr css={`height: 7px;`}/>
      </LinesVertical>
    </OOContainer>
  )
};

export default Amenities;

const OOContainer = styled.div`
    height: 63vh;
    width: 91vw;
    position: relative;
    align-items: center;
    justify-content: center;
    margin: 9.5rem auto 2rem 8.2rem;

    hr {
      background-color: #000; 
      opacity: 1;
      width: 31.7vw; 
      height: 15px; 
      border: 0px; 
      display: inline-block;
      margin: 32px 0px -103px 0;
    }
`
const OOBg = styled.div`
    position: absolute;
    display: flex;
    width: auto;
    height: 100%;
    z-index: -1;

    Img {
      padding-left: 3.2rem;
    }
`

const TextWrapper = styled.div`
    display: table-cell;
    vertical-align: bottom;
    background-color: white;
    height: 44vh;
    width: 33.3vw;
    font-size: 1.5rem;
    padding-bottom: 8px;

    p {
      font-family: Poppins-bold;
      font-size: 48.8px;
      line-height: 1.15;
    }
`
const LinesHorizontal = styled.div`
    height: 5rem;
    width: 6.8rem;
    display: grid;
    grid-gap: 12.8px;
    grid-template-rows: repeat(9, 1fr);
    position: relative;
    left: 73.3%;
    bottom: 82%;
    line-height: 1;

    hr {
      width: 100%;
      height: 7px;
      margin-top: 5px;
    }
  `

const LinesVertical = styled.div`
    height: 5rem;
    width: 6.8rem;
    transform: rotate(90deg);
    display: grid;
    grid-gap: 12.8px;
    grid-template-rows: repeat(9, 1fr);
    position: relative;
    left: 83.1%;
    bottom: 94.5%;
    line-height: 1;

    hr {
      width: 100%;
      height: 7px;
      margin-top: 5px;
    }
`

