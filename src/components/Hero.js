import React from 'react'
import styled from 'styled-components'
import { Carousel } from 'react-bootstrap'
import slide01 from "../images/Office1.jpeg"
import slide02 from "../images/Office4.jpeg"
import slide03 from "../images/Office3.jpeg"
import {Link} from 'gatsby'
import {BsFillArrowUpSquareFill} from 'react-icons/bs'

const Hero = () => {
return (

<HeroContainer>
    <HeroBG>
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slide01} className="d-block w-100 bg-secondary"  alt="photo 1" />
                </div>
                <div className="carousel-item">
                    <img src={slide02} className="d-block w-100 bg-secondary" alt="photo 2" />
                </div>
                <div className="carousel-item">
                    <img src={slide03} className="d-block w-100 bg-secondary" alt="photo 3" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
                <span className="fa-solid fa-arrow-left" aria-hidden="true"></span>
            </a>
            <a className="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
                <span className="fa-solid fa-arrow-right" aria-hidden="true"></span>
            </a>
        </div>
    </HeroBG>

<div className="container-fluid custom-container">
    <div className="row custom-row">
        <HeroText className="d-flex col-12 col-sm-8">
            <h1>Firma</h1>
            <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Ut auctor</p>
        </HeroText>
        <div className="form d-flex lg-flex-row-reverse col-12 col-lg-4">
            <HeroForm controlId="myFormGroup" name="contact-form" method="post" data-netlify="true" action="#">  
                <form method="post">
                    <h2>Lorem ipsum</h2>
                    <h3>Lorem ipsum lorem ipsum</h3>
                    <p>consectetur adipiscing elit. Ut auctor arcu</p>
                    <p>Zostaw kontakt, zadzwonimy do Ciebie</p>

                    <input type="text" placeholder="Imię i nazwisko" required={true} className="first-input" />
                    <input type="text" placeholder="Telefon" required={true} />
                    <input type="email" placeholder="Email" required={true} />

                    <input type="text" placeholder="Lorem ipsum lorem ipsum" required={true} />
                    <div className="data-consent d-flex flex-row">
                        <input type="checkbox" className="tickBox" required={true} />
                        <p>Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych więcej...</p>
                    </div>

                    <button type="submit"><span>WYŚLIJ</span></button>
                </form>
            </HeroForm>
        </div>
    </div>
</div>

    <Link to="/">
        <ArrowUp>
            <BsFillArrowUpSquareFill />
        </ArrowUp>
    </Link>

</HeroContainer>
)
}

export default Hero

const HeroContainer = styled.div`
    display: flex;
    position: relative;
    min-height: 953px;
    width: 100vw;
    margin: -126px 0 4rem;
    padding: 0 1rem;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .custom-container {
        margin-top: 68px;
        padding-left: 8.4%;
        padding-right: 8.4%;
    }

    .form {
        padding-right: 0;
    }

    .headerLayout {
        position: relative;
        display: flex;
        flex-direction: row;

        @media (max-width: 1300px) {
            flex-direction: column;
        }

        @media (max-width: 910px) {
            align-items: flex-start;
            justify-content: flex-start;
        }
    }

    // .carousel-control-prev, .carousel-control-next {
    //     position: absolute;
    //     height: 90px;
    //     width: 116px;
    //     top: 83.5vh;
    //     background-color: #000;
    //     opacity: 1;

    //     @media (max-width: 768px) {
    //         display: none;
    //     }
    // }

    // .carousel-control-next {
    //     margin-right: 84.1%;
    // }


    @media (max-width: 991px) {
        min-height: 1100px;

        .custom-container {
            padding-left: 2.4%;
            padding-right: 2.4%;
            .custom-row {
                display: flex;
                flex-direction: column;
                margin-top: 30px;
            }
        }
    }
    @media (max-width: 768px) {
        .custom-container {
            .custom-row {
                margin-top: 60px;
            }
        }
    }
    @media (max-width: 580px) {
        .custom-container {
            .custom-row {
                margin-top: 80px;
            }
    }
`

const HeroBG = styled.div`
    position: absolute;
    top: 0px;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;

    img {
        min-height: 953px;
        min-width: 100%;
    }

    .carousel .slide {
        position: relative;
    }

    .carousel-control-prev, .carousel-control-next {
        position: absolute;
        height: 117px;
        width: 153px;
        // top: 83.5vh;
        top: 835px;
        background-color: #000;
        font-size: 38px;
        opacity: 1;

        @media (max-width: 768px) {
            display: none;
        }
    }

    .carousel-control-next {
        margin-right: 84.2%;
    }

    a {
        text-decoration: none;       
    }

    @media (max-width: 1600px) {
        .carousel-control-next {
            margin-right: 81%;
        }
    @media (max-width: 1300px) {
        .carousel-control-next {
            margin-right: 76.5%;
        }
    }
    @media (max-width: 1050px) {
        .carousel-control-next {
            margin-right: 72%;
        }
    }
    @media (max-width: 991px) {
        img {
            min-height: 1100px;
        }
        .carousel-control-next {
            display: none;
        }
        .carousel-control-prev {
            display: none;
        }
    }
    }
`

const HeroText = styled.div `
    position: relative;
    flex-direction: column;
    justify-content: end;
    margin-bottom: 38px;

    h1 {
        // font-size: clamp(16px, 3.35vw, 65px);
        font-size: 65px;
        font-family: "Poppins-bold", sans-serif;
        color: #fff;
    }

    p {
        // font-size: clamp(0.5rem, 2.5vw, 48px);
        font-size: 48px;
        margin-top: 9px;
        color: #fff;
    }

    @media (max-width: 1120px) {
        h1 {
            font-size: 48px;
        }

        p {
            font-size: 24px;
        }
    }
`

const HeroForm = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    background-color: #fff;
    max-width: 449px;
    min-width: 345px;
    height: auto;
    min-height: 638px;
    padding: 33px;
    margin-left: 9%;

    h2, h3 {
        margin-top: -2px;
        margin-bottom: 5px;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        // font-size: clamp(1.2rem, 1.49vw, 28px); 
        font-size: 28px; 
        // margin-left: -1px;
        line-height: 35px;
    }

    p {
    // font-size: clamp(13.5px, 1vw, 18px);
    font-size: 18px;
    }

    p:first-of-type {
        color: #959595;
        margin-top: 8px;
    }

    p:last-of-type {
        font-family: "Poppins-bold", sans-serif;
        margin-top: -6px;
    }

    input {
        display: flex;  
        color: black;
        flex-direction: column;
        width: 100%;
        border: 1px solid; 
        line-height: 50px;
        margin-bottom: 20px;
        padding-left: 5%;
        // font-size: clamp(13.5px, 0.9vw, 18px);
        font-size: 18px;
    }

    .first-input {
        margin-top: 34px;
    }

    .data-consent {
        display: flex;
        position: relative;
        align-items: center;
        color: #000;
        line-height: 1.6;
        margin-top: -2px;

        p {
            // font-size: clamp(7px, 0.52vw, 10px);
            font-family: 'Poppins', sans-serif;
            font-size: 9.9px;
            font-weight: 500;
            margin: -7px 0 0 15px
        }
    
        input[type=checkbox] {
            width: 24px;
            height: 24px;
        }
    }

    button {
        border: none;
        background-color: #000;
        color: #fff;
        font-family: "Poppins", sans-serif;
        // font-size: clamp(12px, 0.9vw, 17.5px);
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 4px;
        justify-content: center;
        height: 52px;
        width: 100%;
        border: none;
        margin-top: 15px;

        span {
            padding-left: 8px;
        }
    }
`

const ArrowUp = styled.div`
    font-size: clamp(2rem, 5vw, 3rem);
    position: fixed;
    height: 16px;
    width: 16px;
    padding: 48px;
    margin-bottom: 0.5rem;
    right: 1%;
    bottom: 7%;
    color: #333;
    z-index: 3;
`