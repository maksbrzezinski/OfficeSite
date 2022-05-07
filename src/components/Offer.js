import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'gatsby'

const Offer = () => {
    
        return (
            <ServicesWrapper>
                <ImageContainer>
                    <StaticImage src="../images/Work1.jpeg" />
                    <Link to="/" >
                        <ItemBtn>
                            <button />
                        </ItemBtn>
                    </Link>
                    <ItemName css={`height: 119px; width: 167px`}>
                        <ItemSquare />
                        <h4>Biuro</h4>
                        <hr css={`height: 4px; top: -17px`} />
                        <p css={`top: -27px`}>od 1000 zł/msc</p>
                    </ItemName>
                </ImageContainer>
                <ImageContainer>
                    <StaticImage src="../images/Work2.jpeg" />
                    <Link to="/" >
                        <ItemBtn>
                            <button />
                        </ItemBtn>
                    </Link>
                    <ItemName css={`height: 146px; width: 181px`}>
                        <ItemSquare />
                        <h4>Lorem<br /> ipsum</h4>
                        <hr css={`height: 4px;`} />
                        <p>od 500 zł/msc</p>
                    </ItemName>
                </ImageContainer>
                <BottomContainer>
                    <StaticImage src="../images/Work3.jpeg" />
                    <Link to="/" >
                        <ItemBtn css={`top: 63.7%;
                        @media screen and (max-width: 1300px) {
                        top: 73.6%;
                        }
                        `}>
                            <button />
                        </ItemBtn>
                    </Link>
                    <ItemName css={`top: 30.5%; height: 147px; width: 167px;
                    @media screen and (max-width: 1300px) {
                        top: 0;
                    }`}>
                        <ItemSquare />
                        <h4>Biuro<br /> lorem</h4>
                        <hr css={`height: 4px;`} />
                        <p>od 100 zł/h</p>
                    </ItemName>
                </BottomContainer>
                <BottomContainer>
                    <StaticImage src="../images/Work4.jpeg" />
                    <Link to="/" >
                        <ItemBtn css={`top: 63.7%;
                        @media screen and (max-width: 1300px) {
                        top: 73.6%;
                        }`}>
                            <button />
                        </ItemBtn>
                    </Link>
                    <ItemName css={`top: 30.5%; height: 147px; width: 243px;
                    @media screen and (max-width: 1300px) {
                        top: 0;
                    }
                    `}>
                        <ItemSquare css={`left: -3.5%`}/>
                        <h4>Biuro lorem ipsum Lorem</h4>
                        <hr css={`height: 4px;`} />
                        <p>od 100 zł/h</p>
                    </ItemName>
                </BottomContainer>
            </ServicesWrapper>
        )
    }

export default Offer;

const ServicesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.8% 1.9%;
    position: relative;
    justify-items: center;
    margin: 6.6% auto;
    height: 80vh;
    width: 81.8vw;

    @media screen and (max-width: 1300px) {
        grid-template-columns: 1fr;
        height: auto;
    }
` 

const ImageContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    height: 48.5vh;
    width: 100%;
    margin-top: 2%;

    a{ 
        color: black;
    }
`

const BottomContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    height: 68.9%; 
    width: 100%;
    margin-top: 1.5%;

    @media screen and (max-width: 1300px) {
        height: 48.5vh;
        margin-top: 2%;
    }
`

const ItemBtn = styled(AiOutlineArrowRight)`
    display: flex;
    background-color: #fff;
    border-radius: 0px;
    height: 6.15rem;
    width: 6.15rem;
    position: absolute;
    padding: 30px;
    left: 83%;
    top: 73.6%;

    @media screen and (max-width: 868px) {
        left: 76%;
        top: 73.5%;
    }
`

const ItemName = styled.div`
    background-color: #fff;
    position: absolute;
    height: 10rem;
    width: 10rem;
    margin: 1.35rem;
    padding-left: 4.5%;

    h4 {
        font-family: Poppins-bold;
        font-size: 21px;
        margin: 1.35rem;
        position: absolute;
        top: 3.4px;
        left: 5px;
        line-height: 1.36;
        width: 90%;
    }

    hr {
        margin-top: 39px;
        height: 4px;
        width: 37px;
        position: relative;
        bottom: -11px;
    }

    p {
        font-size: 13.5px;
        position: relative;
        margin-top: 18px;
    }
`

const ItemSquare = styled.div`
    background-color: #ffc439;
    position: relative;
    height: 31px;
    width: 31px;
    margin-top: 1.2rem;
    left: -4.7%;
`