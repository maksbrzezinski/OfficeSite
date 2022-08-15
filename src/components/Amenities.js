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
        <Row className="row">
            <TitleSection className="square">
                <h1>Lorem ipsum dolor sit amet, conse</h1>
                <div className="underline"/>
            </TitleSection>
            <div className="square">
                <AiOutlineWallet class="icon"/>
                <SmallSquare className="s1"/>
                <p>Lorem ipsum</p>
            </div>
            <div className="square">
                <BiCoffee class="icon"/>
                <SmallSquare className="s2"/>
                <p>Lorem ipsum<br /> dolor sit amet conse</p>
            </div>
            <div className="square">
                <GiBookshelf class="icon"/>
                <SmallSquare className="s3"/>
                <p>Lorem ipsum<br /> dolor sit amet,</p>
            </div>
            <div className="square">
                <GrPersonalComputer className="icon"/>
                <SmallSquare className="s4"/>
                <p>Lorem ipsum<br /> dolor sit amet,</p>
            </div>
            <div className="square">
                <GiDesk class="icon"/>
                <SmallSquare className="s5"/>
                <p>Lorem ipsum dolor <br />sit amet, conse <br />lorem ipsum lorem</p>
            </div>
            <div className="square">
                <AiOutlineWifi class="icon"/>
                <SmallSquare className="s6"/>
                <p>Lorem ipsum dolor <br />sit amet, conse <br />lorem ipsum lorem</p>
            </div>
            <div className="square">
                <RiTeamFill class="icon"/>
                <SmallSquare className="s7"/>
                <p>Lorem ipsum dolor <br />sit amet, conse <br />lorem ipsum</p>
            </div>
        </Row>

        <AmenititesButton>
            <Button primary="True" to="/Oferta" id="Button">
                DOWIEDZ SIĘ WIĘCEJ <AiOutlineArrowRight class="icon"/>
            </Button>
        </AmenititesButton>
    </AmenitiesContainer>
    )
}

export default Amenitites

const AmenitiesContainer = styled.div`
    position: relative;
    /* padding: 6rem calc((100vw - 1300px) /2); */
    padding: 6.7% 3.2%;
    margin: 160px 0 0 14px;
    height: 100vh;
    width: 100vw;
    color: #000;

    .s1 {
        top: 1.4%;
        left: 21%; 
    }

    .s2 {
        top: -2.2%;
        left: 25%;
    }

    .s3 {
        top: 16.6%;
        left: 28%;
    }

    .s4 {
        top: 24.5%;
    }

    .s5 {
        top: 5.5%;
        left: 29.5%;
    }

    .s6 {
        top: 0.4%;
        height: 41px;
    }

    .s7 {
        top: 22%;
    }

    .s1, .s2, .s3, .s4, .s5, .s6, .s7 {
        @media (max-width: 768px) {
            display: absolute;
            top: 1%;
            left: 42%;
            transform: translate(-42%, -1%);
        }
    } 

    @media (min-width: 891px) and (max-width: 1225px) {
        height: auto;
        padding: 3rem 0 0;
    }
    @media (max-width: 890px) {
        height: auto;
    }

    @media (max-width: 768px) {
        text-align: center;
    }
`

const SmallSquare = styled.div`
    position: absolute;
    background-color: #ffc439;
    height: 42px;
    width: 41px;
    z-index: -1;
`

const Row = styled.div`
        display: flex;
        flex-direction: row;
        position: relative;
        width: 100%;
        font-size: 21px;  
        justify-content: center;
    
        h1 {
            font-family: "Poppins-bold", sans-serif;
            font-size: 36px;
            line-height: 43.5px;
        }

        .underline {
            height: 8px;
            width: 6.75vw;
            margin-top: 2.2rem;
            background-color: #000;
        }

        p {
            margin-top: 1.4rem;
            line-height: 28.5px;
        }

        .icon {
            font-size: 96px;
        } 

        .square {
            position: relative;
            width: 17vw;
            margin: 0 4.9vh;

        @media (max-width: 768px) {
            width: 70%;
            margin-top: 30px;
            align-items: center;
            justify-content: center;

            .underline {
                margin: 2.2rem auto 0;
                width: 15vw;
            }
            }
        }
`

const TitleSection = styled.div` 
    top: -86px;
    width: 12vw;
`

const AmenititesButton = styled.div`
    position: relative;
    margin: 11.4vh 0 0 9.2vh;

        #Button:hover > .icon {
            background-color: #077BF1;
        }

        #Button {
            font-family: "Poppins-bold", sans-serif;
            font-size: 13px; 
            padding: 20.5px 16px 20.5px 23px; 
            color: #fff;
            transition: color 0.3s;
        }

        .icon {
            margin-left: 25px;
            font-size: 26px;
            text-align: right;
            color: #fff;
            background-color: #000;
            z-index: 2;
            transition: background-color 0.3s;
        }

    @media (max-width: 768px) {
        margin-left: auto;
        margin-right: auto;
    }
`