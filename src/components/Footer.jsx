import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
        <CompanyDetails>
            <h1>LOGO</h1>
            <p>ul. Towarowa 5/6 <br />31-000 Kraków</p>
            <p>+48 999 999 999 <br />email@email.com</p>
        </CompanyDetails>

        <p className="policy">Polityka prywatności</p>

        <LinksContainer>
            <ul>
                <li>Strona główna</li>
                <li>Poznaj przestrzeń</li>
                <li>Oferta</li>
            </ul>
            <ul>
                <li>Lokalizacja</li>
                <li>Własne biuro</li>
                <li>Kontakt</li>
            </ul>
        </LinksContainer>

        <p className="reproduced">Proudly (re)designed by Maks Brzeziński</p>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    min-height: 547px;
    padding: 5% 9% 0;
    margin-top: 170px;
    background-color: #000;
    color: #fff;

    .policy, .reproduced {
        position: absolute;
        font-size: 12px;
        font-weight: 300;
        width: 30vw;
        bottom: 29px;
        left: 80.5%;
    }

    .policy {
        left: 9.1%;
        font-weight: 400;
    }

    @media (max-width: 1300px) {
        padding-left: 7%;
        padding-right: 7%;

        .policy {
            left: 4%;
        }

        .reproduced {
            left: 72%;
        }
    }

    @media (max-width: 991px) {
        .reproduced {
            left: 65%;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: start;

        .policy {
            margin-top: 35px;
        }

        .policy, .reproduced {
            position: relative;
            display: flex;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            justify-content: center; 
            text-align: center;
            order: 2;
        }
    }
`

const CompanyDetails = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 18vw;
    margin-top: -200px;

    h1, p:last-of-type {
        font-family: "Poppins", sans-serif; 
        font-weight: 700;
    }

    h1 {
        font-size: 65px;
        margin-bottom: 46px;
    }

    p {
        font-size: 16px;
        margin-left: 3px;
        line-height: 26px;
    }

    p:last-of-type {
        margin-top: 9px;
    }

    @media (max-width: 768px) {
        margin-top: 0;
        width: 50vw;

        h1 {
            margin-bottom: 30px;
            font-size: 36px;
        }

        p {
            font-size: 14px;
        }
    }
`

const LinksContainer = styled.div`
    position: relative;
    display: flex; 
    flex-direction: row;
    width: 100vw;
    margin-left: 428px;
    margin-top: -100px;
    text-align: left;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    ul {
        font-size: 16px;
        font-weight: 400;
        line-height: 40px;
        width: 16.6vw;
        list-style-type: none;
    }

    @media (max-width: 1300px) {
        margin-left: 250px;

        ul {
            width: 25vw;
        }
    }

    @media (max-width: 991px) {
        margin-left: 150px;

        ul {
            width: 30vw;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        margin-left: -48px;
        margin-top: 40px;
        align-items: start;

        ul {
            width: 50vw;
            margin-left: 4%;
            font-size: 14px;
        }
    }
`