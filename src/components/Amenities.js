import React from 'react';
import styled from 'styled-components'
import {AiOutlineWallet, AiOutlineWifi, AiOutlineArrowRight} from "react-icons/ai"
import {BiCoffee} from "react-icons/bi"
import {GiBookshelf, GiDesk} from "react-icons/gi"
import {GrPersonalComputer} from "react-icons/gr"
import {RiTeamFill} from "react-icons/ri"
import { Button } from "./Button"

const Amenitites = () => {
  return (
    <AmenitiesContainer>
        <AmenitiesItems>
            <Item1>
                <h4>Lorem ipsum dolor sit amet, conse</h4>
                <hr css={`height: 10px;`} />
            </Item1>
            <Square>
                <AiOutlineWallet css={`font-size: 6rem;`}
                />
                <SmallSquare css={`
                top: 0.6%;
                left: 29.1%;
                `}/>
                <p>Lorem ipsum</p>
            </Square>
            <Square>
                <BiCoffee css={`font-size: 6rem;`}/>
                <SmallSquare css={`
                top: -0.5%;
                left: 55.7%;
                `}/>
                <p>Lorem ipsum<br /> dolor sit amet conse</p>
            </Square>
            <Square>
                <GiBookshelf css={`font-size: 6rem;`}/>
                <SmallSquare css={`
                top: 5.5%;
                left: 82%;
                `}/>
                <p>Lorem ipsum<br /> dolor sit amet,</p>
            </Square>
            <Square2>
                <GrPersonalComputer css={`font-size: 6rem;`}/>
                <SmallSquare css={`
                top: 20%;
                `}/>
                <p>Lorem ipsum<br /> dolor sit amet,</p>
            </Square2>
            <Square2>
                <GiDesk css={`font-size: 6rem;`}/>
                <SmallSquare css={`
                top: 4.9%;
                left: 28.1%;
                `}/>
                <p>Lorem ipsum dolor sit amet, conse lorem ipsum lorem</p>
            </Square2>
            <Square2>
                <AiOutlineWifi css={`font-size: 6rem;`}/>
                <SmallSquare css={`
                top: 0.5%;
                height: 41px;
                `}/>
                <p>Lorem ipsum dolor sit amet, conse lorem ipsum lorem</p>
            </Square2>
            <Square2>
                <RiTeamFill css={`font-size: 6rem;`}/>
                <SmallSquare css={`
                top: 17.5%;
                `}/>
                <p>Lorem ipsum dolor sit amet, conse lorem ipsum</p>
            </Square2>
        <AmenititesButton>
            <Button primary="True" to="/Oferta" css={`
                padding: 20.5px 22px; 
                font-size: 13px; 
                font-family: Poppins-bold;
                padding-right: 12px`}>
                    DOWIEDZ SIĘ WIĘCEJ
            <AiOutlineArrowRight css={`
                background-color: black;
                font-size: 1.6rem;
                color: white;
                text-align: right;
                margin-left: 36px;
                z-index: 2;`}/>
            </Button>
        </AmenititesButton>
        </AmenitiesItems>
    </AmenitiesContainer>
  )
}

export default Amenitites

const AmenitiesContainer = styled.div`
    padding: 5rem calc((100vw - 1300px) /2);
    margin-top: 6.8rem;
    height: 100vh;
    position: relative;
    color: #000;
    text-align: left;
    justify-content: center;
`

const AmenitiesItems = styled.div`
    display: grid;
    gap: 0px 41px;
    grid-template-columns: repeat(4, 1fr); 
    grid-template-rows: repeat(3, 1fr); 
    position: relative;
    margin-left: 4.7%;
    margin-top: 5.1%;
    font-size: 21px;
    justify-content: center;
    align-items: stretch;
    
    @media screen and (max-width: 1300px) {
        height: auto;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        height: auto;
        justify-items: center;
    }
`
const Item1 = styled.div` 
    width: 12vw;
    position: relative;
    top: -86px;

    h4 {
        font-family: Poppins-bold;
        font-size: 36px;
        line-height: 43.5px;
    }

    hr {
        height: 8px;
        border: 0px;
        background-color: #000;
        opacity: 1;
        width: 6.75vw;
        margin-top: 2.2rem;
     }
`
const Square = styled.div`
    width: 15vw;

    p {
        margin-top: 1.4rem;
        line-height: 29px;
    }
`

const Square2 = styled.div`
    width: 15vw;
    position: relative;
    top: -16px;

    p {
        margin-top: 1.4rem;
        line-height: 29px;
    }
`

const SmallSquare = styled.div`
    height: 42px;
    width: 41px;
    background-color: #ffc439;
    position: absolute;
    z-index: -1;
`

const AmenititesButton = styled.div`
     position: absolute;
     top: 67.9%;
`