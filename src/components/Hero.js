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
        <Carousel>
            <Carousel.Item>
                <img src={slide01} alt="First Office" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={slide02} alt="Second Office" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={slide03} alt="Third Office" />
            </Carousel.Item>
        </Carousel>
    </HeroBG>

<div className="container-fluid custom-container">
    <div className="row">
        <HeroTextt className="d-flex col-8">
            <h1>Firma</h1>
            <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Ut auctor</p>
        </HeroTextt>
        <div className="form d-flex flex-row-reverse col-4">
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
    min-height: 965px;
    width: 100vw;
    margin: -104px 0 4rem;
    padding: 0 1rem;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .custom-container {
        margin-top: 78px;
        padding-left: 8.6%;
        padding-right: 8.6%;
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

    .carousel-control-prev, .carousel-control-next {
        position: absolute;
        height: 90px;
        width: 116px;
        top: 83.5vh;
        background-color: #000;
        opacity: 1;

        @media (max-width: 768px) {
            display: none;
        }
    }

    .carousel-control-next {
        margin-right: 84.1%;
    }

    @media (max-width: 1300px) {
        height: auto;

        .carousel-control-next {
            margin-right: 82%;
        }
    }

    @media (max-width: 1100px) {
        .carousel-control-next {
            margin-right: 80%;
        }
    }

    @media (max-width: 900px) {
        .carousel-control-next {
            margin-right: 78%;
        }
    }
`

const HeroBG = styled.div`
    position: absolute;
    top: 24px;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;

    img {
        min-height: 100%;
        min-width: 100%;
    }
`

const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 50%;
    margin: 54.3vh 0 0 15vh;
    color: #000;

    h1 {
        font-size: clamp(16px, 3.35vw, 64.4px);
        font-family: "Poppins-bold", sans-serif;
        letter-spacing: 0.4px;
    }

    p {
        font-size: clamp(0.5rem, 2.5vw, 48px);
        margin-top: 12px;
    }

    @media (max-width: 1300px) {
        margin: 25vh auto 0;

        h1 {
            font-size: 32px;
        }

        p {
            font-size: 18px;
        }
    }
`

const HeroTextt = styled.div `
    position: relative;
    flex-direction: column;
    justify-content: end;
    margin-bottom: 38px;

    h1 {
        // font-size: clamp(16px, 3.35vw, 64.4px);
        font-size: 65px;
        font-family: "Poppins-bold", sans-serif;
    }

    p {
        // font-size: clamp(0.5rem, 2.5vw, 48px);
        font-size: 48px;
        margin-top: 9px;
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
    margin-right: -7%;

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