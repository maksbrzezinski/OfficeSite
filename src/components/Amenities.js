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
    // <AmenitiesContainer>
    //     <Row className="row">
    //         <TitleSection className="square">
    //             <h1>Lorem ipsum dolor sit amet, conse</h1>
    //             <div className="underline"/>
    //         </TitleSection>
    //         <div className="square">
    //             <AiOutlineWallet class="icon"/>
    //             <SmallSquare className="s1"/>
    //             <p>Lorem ipsum</p>
    //         </div>
    //         <div className="square">
    //             <BiCoffee class="icon"/>
    //             <SmallSquare className="s2"/>
    //             <p>Lorem ipsum<br /> dolor sit amet conse</p>
    //         </div>
    //         <div className="square">
    //             <GiBookshelf class="icon"/>
    //             <SmallSquare className="s3"/>
    //             <p>Lorem ipsum<br /> dolor sit amet,</p>
    //         </div>
    //         <div className="square">
    //             <GrPersonalComputer className="icon"/>
    //             <SmallSquare className="s4"/>
    //             <p>Lorem ipsum<br /> dolor sit amet,</p>
    //         </div>
    //         <div className="square">
    //             <GiDesk class="icon"/>
    //             <SmallSquare className="s5"/>
    //             <p>Lorem ipsum dolor <br />sit amet, conse <br />lorem ipsum lorem</p>
    //         </div>
    //         <div className="square">
    //             <AiOutlineWifi class="icon"/>
    //             <SmallSquare className="s6"/>
    //             <p>Lorem ipsum dolor <br />sit amet, conse <br />lorem ipsum lorem</p>
    //         </div>
    //         <div className="square">
    //             <RiTeamFill class="icon"/>
    //             <SmallSquare className="s7"/>
    //             <p>Lorem ipsum dolor <br />sit amet, conse <br />lorem ipsum</p>
    //         </div>
    //     </Row>

    //     <AmenititesButton>
    //         <Button primary="True" to="/Oferta" id="Button">
    //             DOWIEDZ SIĘ WIĘCEJ <AiOutlineArrowRight class="icon"/>
    //         </Button>
    //     </AmenititesButton>
    // </AmenitiesContainer>


    <AmenitiesContainer>
        <div class="row upper d-flex flex-wrap justify-content-center">
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
        {/* </div> */}
            
        {/* <div class="lower d-flex flex-wrap justify-content-center"> */}
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
margin-top: 130px;
padding-left: 5.6%;
padding-right: 5.6%;
min-height: 71vh;
display: flex;
flex-wrap: wrap;
// justify-content: center;
// align-items: center;
// align-content: center;

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
        margin-top: 3px;
    }

    .lower .square:first-of-type {
        // padding-left: 59px;
    }

    .btn {
        display: flex;
        margin-left: 67px;
        margin-top: 25px;
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



// position: relative;
// /* padding: 6rem calc((100vw - 1300px) /2); */
// padding: 6.7% 3.2%;
// margin: 160px 0 0 14px;
// height: 100vh;
// width: 100vw;
// color: #000;

// .s1 {
//     top: 1.4%;
//     left: 21%; 
// }

// .s2 {
//     top: -2.2%;
//     left: 25%;
// }

// .s3 {
//     top: 16.6%;
//     left: 28%;
// }

// .s4 {
//     top: 24.5%;
// }

// .s5 {
//     top: 5.5%;
//     left: 29.5%;
// }

// .s6 {
//     top: 0.4%;
//     height: 41px;
// }

// .s7 {
//     top: 22%;
// }

// .s1, .s2, .s3, .s4, .s5, .s6, .s7 {
//     @media (max-width: 768px) {
//         display: absolute;
//         top: 1%;
//         left: 42%;
//         transform: translate(-42%, -1%);
//     }
// } 

// @media (min-width: 891px) and (max-width: 1225px) {
//     height: auto;
//     padding: 3rem 0 0;
// }
// @media (max-width: 890px) {
//     height: auto;
// }

// @media (max-width: 768px) {
//     text-align: center;
// }
// `

// const SmallSquare = styled.div`
// position: absolute;
// background-color: #ffc439;
// height: 42px;
// width: 41px;
// z-index: -1;
// `

// const Row = styled.div`
//     display: flex;
//     flex-direction: row;
//     position: relative;
//     width: 100%;
//     font-size: 21px;  
//     justify-content: center;

//     h1 {
//         font-family: "Poppins-bold", sans-serif;
//         font-size: 36px;
//         line-height: 43.5px;
//     }

//     .underline {
//         height: 8px;
//         width: 6.75vw;
//         margin-top: 2.2rem;
//         background-color: #000;
//     }

//     p {
//         margin-top: 1.4rem;
//         line-height: 28.5px;
//     }

//     .icon {
//         font-size: 96px;
//     } 

//     .square {
//         position: relative;
//         width: 17vw;
//         margin: 0 4.9vh;

//     @media (max-width: 768px) {
//         width: 70%;
//         margin-top: 30px;
//         align-items: center;
//         justify-content: center;

//         .underline {
//             margin: 2.2rem auto 0;
//             width: 15vw;
//         }
//         }
//     }
// `

// const TitleSection = styled.div` 
// top: -86px;
// width: 12vw;
// `

// const AmenititesButton = styled.div`
// position: relative;
// margin: 11.4vh 0 0 9.2vh;

//     #Button:hover > .icon {
//         background-color: #077BF1;
//     }

//     #Button {
//         font-family: "Poppins-bold", sans-serif;
//         font-size: 13px; 
//         padding: 20.5px 16px 20.5px 23px; 
//         color: #fff;
//         transition: color 0.3s;
//     }

//     .icon {
//         margin-left: 25px;
//         font-size: 26px;
//         text-align: right;
//         color: #fff;
//         background-color: #000;
//         z-index: 2;
//         transition: background-color 0.3s;
//     }

// @media (max-width: 768px) {
//     margin-left: auto;
//     margin-right: auto;
// }
// `