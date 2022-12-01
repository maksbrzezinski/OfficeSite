import React from 'react';
import styled from 'styled-components'
import {AiOutlineWallet, AiOutlineWifi, AiOutlineArrowRight} from "react-icons/ai"
import {BiCoffee} from "react-icons/bi"
import {GiBookshelf, GiDesk} from "react-icons/gi"
import {GrPersonalComputer} from "react-icons/gr"
import {RiTeamFill} from "react-icons/ri"

const Amenitites = () => {
return (
<AmenitiesContainer>
    <div class="row upper d-flex flex-wrap justify-content-center my-5 my-lg-0">
        <div className="title-amenities">
            <p>Lorem<br /> ipsum<br /> dolor sit<br /> amet,<br /> conse</p>
            <span />
        </div>
        <div className="square">
            <AiOutlineWallet class="icon"/>
            <div className="s1 yellow-square"/>
            <p>Lorem ipsum</p>
        </div>
        <div className="square">
            <BiCoffee class="icon"/>
            <div className="s2 yellow-square"/>
            <p>Lorem ipsum<br /> dolor sit amet conse</p>
        </div>
        <div className="square">
            <GiBookshelf class="icon"/>
            <div className="s3 yellow-square"/>
            <p>Lorem ipsum<br /> dolor sit amet,</p>
        </div>
        
        <div className="square lower">
            <GrPersonalComputer className="icon"/>
            <div className="s4 yellow-square"/>
            <p>Lorem ipsum<br /> dolor sit amet,</p>
        </div>
        <div className="square lower">
            <GiDesk class="icon"/>
            <div className="s5 yellow-square"/>
            <p>Lorem ipsum dolor <br />sit amet, conse <br />lorem ipsum lorem</p>
        </div>
        <div className="square lower">
            <AiOutlineWifi class="icon"/>
            <div className="s6 yellow-square"/>
            <p>Lorem ipsum dolor <br />sit amet, conse <br />lorem ipsum lorem</p>
        </div>
        <div className="square lower">
            <RiTeamFill class="icon"/>
            <div className="s7 yellow-square"/>
            <p>Lorem ipsum dolor <br />sit amet, conse <br />lorem ipsum</p>
        </div>
    </div>

    <div class="d-flex w-100">
        <button type="button" primary="True" to="/Oferta" id="Button" class="btn">
            DOWIEDZ SIĘ WIĘCEJ 
            <AiOutlineArrowRight class="btn-arrow d-flex flex-row-reverse"/>
        </button>
    </div>
</AmenitiesContainer>
)
}

export default Amenitites

const AmenitiesContainer = styled.div`
margin-top: 133px;
padding-left: 5.6%;
padding-right: 5.6%;
min-height: 71vh;
display: flex;
flex-wrap: wrap;

    .title-amenities {
        padding: 0 0 0 79px;
        margin-top: -132px;

        p:first-of-type {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 48px;
        line-height: 58px;
        }

        span {
            height: 10px;
            width: 130px;
            background-color: #000;
            display: block;
            margin-top: 47px;
        }
    }

    .title-amenities, .square {
        flex: 1;
        flex-basis: 25%;
    }

    .icon {
        position: relative;
        font-size: 100px;
        margin-bottom: 40px;
        z-index: 10;
    }

    p {
        font-size: 28px;
        line-height: 38px;
    }

    .square {
        position: relative;
        min-height: 280px;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 25%;

        .yellow-square {
            position: absolute;
            height: 56px;
            width: 56px;
            background-color: #ffcc48;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: -1;
        }

        .s1 {
            top: 4.5%;
            left: 37.5%; 
        }

        .s2 {
            top: 1%;
            left: 40.5%;
        }

        .s3 {
            top: 19%;
            left: 43%;
        }

        .s4 {
            top: 20%;
            left: 25%;
        }

        .s5 {
            top: 7%;
            left: 44%;
        }

        .s6 {
            top: 3%;
            left: 25%;
        }

        .s7 {
            top: 18%;
            left: 25%;
        }
    }

    .upper, .lower {
        width: 100%;
        margin-top: 2px;
    }

    .upper .square {
        padding: 0px 0 0 80px;
        // max-height: 450px;
    }

    .lower {
        padding: 0px 0 0 80px;
        // margin-top: 3px;
    }

    .lower .square:first-of-type {
        // padding-left: 59px;
    }

    .btn {
        display: flex;
        margin-left: 67px;
        margin-top: 23px;
        padding-left: 30px;
        padding-right: 20px;
        background-color: #000;
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 3.6px;
        border-radius: 0;
        height: 78px;
        width: 380px;
        align-items: center;

        .btn-arrow {
            font-size: 36px;
            margin-left: auto;
        }
    }

    .btn:hover {
        background-color: #ffcc48;
        color: #fff;
    }

    @media (max-width: 1300px) {
        .upper, .lower {
            .square {
                flex-basis: 33%;
                // max-width: 33%;
    
                .s1, .s2, .s3, .s4, .s5, .s6, .s7  {
                    top: 10%;
                    left: 40%;
                    transform: translate (-10%, -40%);
                }
            }
        }

    }
`