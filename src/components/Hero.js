import React from 'react'
import styled from 'styled-components'
import { Carousel } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
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
    <Link to="/">
        <ArrowUp>
            <BsFillArrowUpSquareFill />
        </ArrowUp>
    </Link>
    </HeroBG>
    <PageLayout>
        <HeroItems>
            <HeroHeader>Firma</HeroHeader>
            <HeroParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor</HeroParagraph>
        </HeroItems>
        <HeroForm controlId="myFormGroup" name="contact-form" method="post" data-netlify="true">  
            <Form>
                <Form.Group>
                    <FormText>
                        <h1 css={`
                            margin-bottom: 3px;
                            `}>
                            Lorem ipsum</h1>
                        <h1>Lorem ipsum lorem ipsum</h1>
                        <p css={`
                            color: #959595;
                            `}>
                            consectetur adipiscing elit. Ut auctor arcu</p>
                        <p css={`
                            font-family: Poppins-bold; 
                            margin-top: -4px;
                            `}>
                            Zostaw kontakt, zadzwonimy do Ciebie</p>
                    </FormText>
                    <FormLabels>   
                            <input type="text"  placeholder="Imię i nazwisko" required={true} />
                            <input type="text"  placeholder="Telefon" required={true} />
                            <input type="email"  placeholder="Email" required={true} />
                            <input type="text"  placeholder="Lorem ipsum lorem ipsum" required={true} />
                    </FormLabels>
                    <FormCheck>
                        <input type="checkbox" required={true} border-radius="0" />
                        <p>Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych więcej...</p>
                    </FormCheck>
                    <FormButton>
                        <button type="submit">WYŚLIJ</button>
                    </FormButton>
                </Form.Group>
            </Form>
        </HeroForm>
    </PageLayout>
</HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    position: relative;
    height: 101.7vh;
    margin: -104px 0 4rem;
    color: #fff;
    background-color: lightgreen;

    @media screen and (max-width: 1300px) {
        height: auto;
    }
`

const HeroBG = styled.div`
    position: absolute;
    height: 100vh;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
        min-height: 100vh;
        max-width: 100vw;
        height: auto;
        width: 100%;
        object-fit: cover;
    }
`

const ArrowUp = styled.div`
    font-size: clamp(2rem, 5vw, 3rem);
    position: fixed;
    height: 1rem;
    width: 1rem;
    padding: 3rem;
    right: 1%;
    bottom: 7%;
    margin-bottom: 0.5rem;
    color: #000;
    z-index: 3;
`

const PageLayout = styled.div `
    display: flex;
    flex-direction: row;
    position: relative;
    margin-top: 50%;
    height: 80vw;

    @media screen and (max-width: 1300px) {
    flex-direction: column;
    margin-top: 0;
    height: auto;
    }
`

const HeroItems = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 9vh;
    left: -4.2vw;
    top: 18%;
    color: #000;
    width: 50vw;

    @media screen and (max-width: 1300px) {
        left: 0;
        top: 0;
        width: auto;
        margin: 30vh 4rem 2rem;
        justify-content: center;
    }
`
const HeroHeader = styled.h1`
    font-size: clamp(1rem, 5vw, 64.4px);
    font-family: Poppins-bold;
    letter-spacing: 0.4px;
`
const HeroParagraph = styled.p`
    font-size: clamp(0.5rem, 3vw, 48px);
    margin-top: 9.5px;
`

const HeroForm = styled.div`
    /* display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(9, auto); */
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    position: relative;
    background-color: #fff;
    box-sizing: border-box;
    left: 5.6%;
    top: 1.1%;
    height: 67.2vh;
    /* height: auto; */
    /* width: 23.4vw; */
    width: 28rem;
    padding: 2.1% 2.3% 3.2% 2.4%;

    @media screen and (max-width: 1300px) {
        display: flex;
        position: relative;
        left: 0;
        top: 0;
        width: auto;
        height: auto;
        margin: auto;
        justify-content: center;
        margin-bottom: 5%;
        padding-bottom: 0;
    }
`

const FormText = styled.div`
    color: black;
    line-height: 1.4;

    h1 {
        position: relative;
        top: -1px;
        font-size: clamp(1.2rem, 1.5vw, 28px); 
        line-height: 1.25;
        font-family: Poppins-bold;
    }
    p {
        font-size: clamp(0.8rem, 1vw, 18px);
    }
`

const FormLabels = styled.div`
    color: black;
    display: flex;
    flex-direction: column;
    margin: 3vh 0 0;

    input {
        border: 1px solid; 
        line-height: 5.28vh;
        margin: 6.1px 0 14px 0;
        padding-left: 5%;
        font-size: clamp(0.8rem, 1vw, 18px);
        font-weight: 400;
    }
`

const FormCheck = styled.div`
    display: flex;
    color: black;
    margin-top: 6px;

    p {
        color: black;
        font-size: clamp(0.5rem, 0.6vw, 10px);
        margin-left: 1.2vw;
        line-height: 16px;
    }
`

const FormButton = styled.button`
    border: none;
    background-color: black;
    height: 5.5vh;
    width: 100%;
    color: white;
    font-size: clamp(0.8rem, 1.5vw, 17.5px);
    justify-content: center;
    margin-top: 8px;
    position: relative;

    button {
        background-color: transparent;
        color: white;
        border: none;
        font-family: Poppins-bold;
        letter-spacing: 4px;
        margin-left: 7px;
    }
`