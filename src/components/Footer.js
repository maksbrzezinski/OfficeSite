import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Footer = () => {
  return (
    <FooterContainer>
        <CompanyDetails>
            <h1>LOGO</h1>
            <p>ul. Towarowa 5/6 31-000 Kraków</p>
            <p css={`font-family: Poppins-bold; margin-top: 0.3rem;`}>+48 999 999 999 email@email.com</p>
        </CompanyDetails>
        <LinksContainer>
            <ul>
                <li>Strona główna</li>
                <li css={`margin-top: 1px;`}>Poznaj przestrzeń</li>
                <li>Oferta</li>
            </ul>
            <ul css={``}>
                <li>Lokalizacja</li>
                <li>Własne biuro</li>
                <li>Kontakt</li>
            </ul>
        </LinksContainer>
        <BottomLinks>
            <p>Polityka prywatności</p>
            <p>Proudly reproduced by Maks Brzeziński</p>
        </BottomLinks>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1100px) /2);
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin: 8rem auto 0;
    min-height: 53.6vh;
    color: #fff;
    background: #000;
`

const CompanyDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 7.5vw;
    position: relative;
    left: -3.75%;
    top: -36px;

    h1 {
        font-family: Poppins-bold;
        font-size: 49px;
        margin-bottom: 2.15rem;
    }

    p {
        font-size: 12px;
        margin-left: 3px;
        line-height: 19px;
    }
`

const LinksContainer = styled.div`
    display: grid; 
    grid-template-columns: repeat(2, 1fr);
    margin-left: 27.35%;
    position: relative;
    justify-content: end;
    text-align: left;
    align-items: center;
    top: 1px;

    ul {
        list-style-type: none;
        width: 16.7vw;
        line-height: 30px;
    }

    li {
        font-size: 12px;
    }
`

const BottomLinks = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    position: absolute;
    top: 88.5%;
    left: 9.1%;
    font-size: 9px;
    width: 100%;
    height: auto;

    p {
        width: 71.4vw;
        /* grid-gap: 40vw; */
    }
`