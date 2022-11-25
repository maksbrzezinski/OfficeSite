import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'gatsby'

const Offer = () => {
    
    return (
        <ServicesWrapper>
            <TopRow>
                <TopContainer className="Container oneContainer">
                    <StaticImage className="photo" src="../images/Work1.jpeg" />

                    <Link to="/" >
                        <Arrow className="arrowTop" />
                    </Link>

                    <div className="one">
                        <ItemSquare />
                        <h4>Biuro</h4>
                        <Underline className="oneCustomDiv" />
                        <p className="oneCustomP">od 1000 zł/msc</p>
                    </div>
                </TopContainer>

                <TopContainer className="Container twoContainer">
                    <StaticImage className="photo" src="../images/Work2.jpeg" />

                    <Link to="/" >
                        <Arrow className="arrowTop" />
                    </Link>

                    <div className="two">
                        <ItemSquare />
                        <h4>Lorem<br /> ipsum</h4>
                        <Underline />
                        <p>od 500 zł/msc</p>
                    </div>
                </TopContainer>
            </TopRow>

            <BottomRow>
                <BottomContainer className="Container threeContainer">
                    <StaticImage className="photo" src="../images/Work3.jpeg" />

                    <Link to="/" >
                        <Arrow className="arrowBottom" />
                    </Link>

                    <div className="three">
                        <ItemSquare />
                        <h4>Biuro<br /> lorem</h4>
                        <Underline />
                        <p>od 100 zł/h</p>
                    </div>
                </BottomContainer>

                <BottomContainer className="Container">
                    <StaticImage className="photo" src="../images/Work4.jpeg" />

                    <Link to="/" >
                        <Arrow className="arrowBottom" />
                    </Link>

                    <div className="four">
                        <ItemSquare className="squareFour"/>
                        <h4>Biuro lorem ipsum Lorem</h4>
                        <Underline />
                        <p className="fourCustomP">od 100 zł/h</p>
                    </div>
                </BottomContainer>
            </BottomRow>
        </ServicesWrapper>
    )
}

export default Offer;

const ServicesWrapper = styled.div`
display: flex;
flex-direction: column;
position: relative;
justify-items: center;
margin: 6.5% auto;
height: 80vh;
width: 81.8vw;

.Container {
    position: relative;
    display: flex;
    flex-direction: row;
    margin: 0.6% 1%;
    width: 100%;
}


h4 {
    position: absolute;
    font-family: "Poppins-bold", sans-serif;
    font-size: 21px;
    margin: 1.35rem;
    line-height: 1.36;
    top: 3.4px;
    left: 5px;
    width: 90%;
}

p {
    font-size: 13.5px;
    position: relative;
    margin-top: 3.8%;
    margin-left: 1%;
}

.one, .two, .three, .four {
    position: absolute;
    background-color: #fff;
    padding-left: 25px;
    margin: 1.35rem;
}

.one {
    height: 119px; 
    width: 167px;

    .oneCustomDiv, .oneCustomP {
        top: -26px;
    }
}

.two {
    height: 146px; 
    width: 181px;
}

.three, .four {
    top: 30.3%; 
    height: 146px; 
}

.three {
    width: 167px;
}

.four {
    width: 243px;

    .fourCustomP {
        top: -4px;
    }
}

.arrowTop {
}

.arrowBottom {
    top: 64.2%;
}

.squareFour {
    margin-left: 1.9%;
}

a { 
    color: #000;
    transition: color 0.3s ease;
}

a:hover {
    color: royalblue;
}

    @media (max-width: 1300px) {
        grid-template-columns: 1fr;
        height: auto;

        .Container {
            height: 48.5vh;
            margin-top: 2%;
        }

        .arrowBottom {
            top: 73.6%;
        }

        .three, .four {
            top: 0;
        }
    }
` 

const Underline = styled.div`
    position: relative;
    background-color: #000;
    height: 4px;
    width: 37px;
    margin-top: 6.3vh;
    margin-left: 1%;
`

const TopContainer = styled.div`
height: 93.4%;
margin-top: 2%;
`

const BottomContainer = styled.div`
height: 70.5%;
`

const TopRow = styled.div`
    display: flex;
    `

const BottomRow = styled.div`
    display: flex;
    `

const Arrow = styled(AiOutlineArrowRight)`
position: absolute;
display: flex;
background-color: #fff;
border-radius: 0px;
height: 98px;
width: 98px;
padding: 30px;
top: 73.85%;
left: 83.1%;

@media screen and (max-width: 868px) {
    left: 76%;
}
`

const ItemSquare = styled.div`
background-color: #ffc439;
position: relative;
height: 32px;
width: 32px;
margin-top: 18.5px;
left: -4.4%;
`