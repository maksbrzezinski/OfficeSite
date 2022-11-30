import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
        <CompanyDetails>
            <h1>LOGO</h1>
            <p>ul. Towarowa 5/6 <br />31-000 Kraków</p>
            <p>+48 999 999 999 <br />email@email.com</p>
            <p>Polityka prywatności</p>
        </CompanyDetails>
        <LinksContainer>
            <ul>
                <li>Strona główna</li>
                <li class="lower">Poznaj przestrzeń</li>
                <li>Oferta</li>
            </ul>
            <ul>
                <li>Lokalizacja</li>
                <li>Własne biuro</li>
                <li>Kontakt</li>
            </ul>
        </LinksContainer>
            <p className="reproduced">Reproduced by Maks Brzeziński</p> 
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
    padding: 5vw 11.8vw;
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin: 8rem auto 0;
    height: 410px;
    color: #fff;
    background-color: #000;

    .reproduced {
        position: absolute;
        font-size: 9px;
        width: 30vw;
        bottom: 4%;
        right: -10.5%;
    }

    @media (max-width: 768px) {
        .reproduced {
            right: 2%;
        }
    }
`

const CompanyDetails = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 18vw;
    height: 100%;
    margin-top: -1.1%;
    margin-left: -3.75%;
    
    @media (max-width: 768px) {
        width: 50vw;
    }

    h1, p ~ p {
        font-family: "Poppins-bold", sans-serif; 
    }

    h1 {
        font-size: 49px;
        margin-bottom: 2.15rem;
    }

    p {
        font-size: 12px;
        margin-left: 3px;
        line-height: 19px;
    }

    p ~ p {
        margin-top: 0.3rem;
    }

    p:last-of-type {
        font-family: "Poppins", sans-serif;
        font-size: 9px;
        padding-top: 61%;

        @media (max-width: 768px) {
            padding-top: 11vh;
    }
    }
`

const LinksContainer = styled.div`
    position: relative;
    display: flex; 
    flex-direction: row;
    height: 100%;
    width: 100vw;
    margin-left: 28.5%;
    top: 1px;
    text-align: left;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    ul {
        list-style-type: none;
        width: 16.6vw;
        line-height: 30px;
        font-size: 12px;

    @media (max-width: 768px) {
        width: 50vw;
        margin-left: 1%;
    }
    }

    .lower {
        margin-top: 1px;
    }
`