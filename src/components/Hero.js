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

    <div className="headerLayout">
        <HeroText>
            <h1>Firma</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor</p>
        </HeroText>

        <HeroForm controlId="myFormGroup" name="contact-form" method="post" data-netlify="true" action="#">  
            <form method="post">
                <FormText>
                    <h2>Lorem ipsum</h2>
                    <h3>Lorem ipsum lorem ipsum</h3>
                    <p>consectetur adipiscing elit. Ut auctor arcu</p>
                    <p>Zostaw kontakt, zadzwonimy do Ciebie</p>
                </FormText>
                <FormLabels>   
                    <input type="text" placeholder="Imię i nazwisko" required={true} />
                    <input type="text" placeholder="Telefon" required={true} />
                    <input type="email" placeholder="Email" required={true} />
                    <input type="text" placeholder="Lorem ipsum lorem ipsum" required={true} />
                </FormLabels>
                <FormCheck>
                    <input type="checkbox" className="tickBox" required={true} />
                    <p>Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych więcej...</p>
                </FormCheck>
                <FormButton>
                    <button type="submit">WYŚLIJ</button>
                </FormButton>
            </form>
        </HeroForm>
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
    height: 95vh;
    width: 100vw;
    margin: -104px 0 4rem;
    padding: 0 1rem;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .headerLayout {
        position: relative;
        display: flex;
        flex-direction: row;
        height: 100%;
        width: 100%;

        @media (max-width: 1300px) {
            flex-direction: column;
            align-items: center;
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
    overflow: hidden;

    img {
        min-height: 100vh;
        min-width: 100vw;
    }
`

const HeroText = styled.div`
    position: relative;
    width: 50vw;
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

const HeroForm = styled.div`
    position: relative;
    background-color: #fff;
    height: 478px;
    width: 338px;
    margin: 20.5vh 0 0 15.5vh;
    padding: 1.65% 1.75% 3.2% 1.8%;
    z-index: 2;

    @media screen and (max-width: 1300px) {
        margin: 3vh auto;
        padding: 2.2%;
    }

    @media (max-width: 768px) {
        padding: 3.8%;
    }
`

const FormText = styled.div`
    position: relative;
    color: black;

    h2, h3 {
        top: -1px;
        font-size: clamp(1.2rem, 1.46vw, 28px); 
        font-family: "Poppins-bold", sans-serif;
        margin-bottom: 3px;
    }

    p {
        font-size: clamp(13.5px, 0.9vw, 18px);

    }

    p:first-of-type {
        color: #959595;
        margin-top: 7px;
    }

    p:last-of-type {
        font-family: "Poppins-bold", sans-serif;
        margin-top: -8px;
    }
`

const FormLabels = styled.div`
    color: black;
    display: flex;
    flex-direction: column;
    margin: 3.1vh 0 0;

    input {
        border: 1px solid; 
        line-height: 4.95vh;
        margin-bottom: 14px;
        padding-left: 5%;
        font-size: clamp(13.5px, 0.9vw, 18px);
    }
`

const FormCheck = styled.div`
    display: flex;
    position: relative;
    color: #000;
    top: -1px;
    line-height: 1.6;

    p {
        font-size: clamp(7px, 0.52vw, 10px);
        margin-left: 11px;
        margin-top: 1px;
    }

    input[type=checkbox] {
        width: 19px;
        height: 19px;
    }
`

const FormButton = styled.button`
    border: none;
    background-color: #000;
    color: #fff;
    height: 5.1vh;
    width: 100%;
    margin-top: 2px;
    font-size: clamp(12px, 0.9vw, 17.5px);
    justify-content: center;

    button {
        background-color: transparent;
        color: #fff;
        border: none;
        font-family: "Poppins-bold", sans-serif;
        letter-spacing: 3px;
        margin-left: 7px;
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