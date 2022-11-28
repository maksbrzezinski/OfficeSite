import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'gatsby'
import { photo1 } from '../images/Work1.jpeg'

const Offer = () => {
    
    return (
        // <ServicesWrapper>
        //     <TopRow>
        //         <TopContainer className="Container oneContainer">
        //             <StaticImage className="photo" src="../images/Work1.jpeg" />

        //             <Link to="/" >
        //                 <Arrow className="arrowTop" />
        //             </Link>

        //             <div className="one">
        //                 <ItemSquare />
        //                 <h4>Biuro</h4>
        //                 <Underline className="oneCustomDiv" />
        //                 <p className="oneCustomP">od 1000 zł/msc</p>
        //             </div>
        //         </TopContainer>

        //         <TopContainer className="Container twoContainer">
        //             <StaticImage className="photo" src="../images/Work2.jpeg" />

        //             <Link to="/" >
        //                 <Arrow className="arrowTop" />
        //             </Link>

        //             <div className="two">
        //                 <ItemSquare />
        //                 <h4>Lorem<br /> ipsum</h4>
        //                 <Underline />
        //                 <p>od 500 zł/msc</p>
        //             </div>
        //         </TopContainer>
        //     </TopRow>

        //     <BottomRow>
        //         <BottomContainer className="Container threeContainer">
        //             <StaticImage className="photo" src="../images/Work3.jpeg" />

        //             <Link to="/" >
        //                 <Arrow className="arrowBottom" />
        //             </Link>

        //             <div className="three">
        //                 <ItemSquare />
        //                 <h4>Biuro<br /> lorem</h4>
        //                 <Underline />
        //                 <p>od 100 zł/h</p>
        //             </div>
        //         </BottomContainer>

        //         <BottomContainer className="Container">
        //             <StaticImage className="photo" src="../images/Work4.jpeg" />

        //             <Link to="/" >
        //                 <Arrow className="arrowBottom" />
        //             </Link>

        //             <div className="four">
        //                 <ItemSquare className="squareFour"/>
        //                 <h4>Biuro lorem ipsum Lorem</h4>
        //                 <Underline />
        //                 <p className="fourCustomP">od 100 zł/h</p>
        //             </div>
        //         </BottomContainer>
        //     </BottomRow>
        // </ServicesWrapper>


        <ServicesWrapper>
            <div class="office-tiles">

                <div class="photo-container-upper d-flex column col-6 " id="con-1">
                    <StaticImage className="photo1" src="../images/Work1.jpeg" />
                    <div class="text-container-1">
                        <div class="yellow-square"></div>
                        <p>Biuro</p>
                        <span></span>
                        <p>od 1000 zł/msc</p>
                    </div>
                    <div class="arrow-container d-flex align-self-end ms-auto"><i class="fa-solid fa-arrow-right"></i></div>
                </div>

                <div class="photo-container-upper d-flex column col-6 " id="con-2">
                    <StaticImage className="photo2" src="../images/Work2.jpeg" />
                    <div class="text-container-2">
                        <div class="yellow-square"></div>
                        <p>Lorem ipsum</p>
                        <span></span>
                        <p>od 500 zł/msc</p>
                    </div>
                    <div class="arrow-container d-flex align-self-end ms-auto"><i class="fa-solid fa-arrow-right"></i></div>
                </div>

                <div class="photo-container-lower d-flex column col-6 " id="con-3">
                    <StaticImage className="photo3" src="../images/Work3.jpeg" />
                    <div class="text-container-3">
                        <div class="yellow-square"></div>
                        <p>Biuro lorem</p>
                        <span></span>
                        <p>od 100 zł/h</p>
                    </div>
                    <div class="arrow-container d-flex align-self-end ms-auto"><i class="fa-solid fa-arrow-right"></i></div>
                </div>

                <div class="photo-container-lower d-flex column col-6 " id="con-4">
                    <StaticImage className="photo4" src="../images/Work4.jpeg" />
                    <div class="text-container-4">
                        <div class="yellow-square"></div>
                        <p>Biuro lorem ipsum<br/> Lorem</p>
                        <span></span>
                        <p>od 100 zł/h</p>
                    </div>
                    <div class="arrow-container d-flex align-self-end ms-auto"><i class="fa-solid fa-arrow-right"></i></div>
                </div>
            </div>
        </ServicesWrapper>
    )
}

export default Offer;

const ServicesWrapper = styled.div`
// flex-direction: column;
position: relative;
// justify-items: center;
// margin: 6.5% auto;
margin-top: 125px;
height: 80vh;
// width: calc(100% + 60px);
// width: 81.8vw;
padding-left: 8.4%;
padding-right: 8.4%;

.office-tiles {
    display: flex;
    flex-flow: wrap;
    // width: calc(100% + 60px)
}

.photo-container-upper {
    height: 494px;
    max-width: calc(50% - 30px);
    flex-basis: calc(50% - 30px);
}

.photo-container-lower {
    height: 362px;
    max-width: calc(50% - 30px);
    flex-basis: calc(50% - 30px);

    .text-container-3, .text-container-4 {
        align-self: end;

        @media (max-width: 1400px) {
            align-self: start;
        }
    }
}

.arrow-container {
    height: 130px;
    width: 130px;
    color: #000;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 38px;
}

#con-1, #con-2, #con-3, #con-4 {
    position: relative;
    margin: 15px;
    padding: 0;
    overflow: hidden;
    .photo1, .photo2, .photo3, .photo4 {
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
    }
}

.text-container-1, .text-container-2, .text-container-3, .text-container-4 {
    background-color: #fff;
    margin: 28px;
    padding: 25px;

    .yellow-square {
        height: 42px;
        width: 42px;
        background-color: #ffcc48;
    }

    p, span {
        margin-left: 10px;
    }

    p:first-of-type {
        font-family: 'Poppins' , sans-serif;
        font-weight: 700;
        font-size: 28px;
        position: relative;
        margin-top: -35px;
        line-height: 40px;
    }

    span {
        width: 50px;
        height: 5px;
        background-color: #000;
        display: block;
        margin-top: 24px;
        margin-bottom: 6px;
    }

    p:last-of-type {
        font-size: 18px;
        position: relative;
    }

    @media (max-width: 1295px) {
        margin: 0;
    }
}

.text-container-1 {
    height: 160px;
    width: 223px;
    padding-top: 26px;
}

.text-container-2 {
    height: 195px;
    width: 240px;
    padding-top: 26px;

    span {
        margin-top: 21px;
    }
}

.text-container-3 {
    height: 195px;
    width: 222px;
    margin-bottom: 30px;

    span {
        margin-top: 21px;
    }
}

.text-container-4 {
    height: 195px;
    width: 323px;
    margin-bottom: 30px;
    padding-right: 24px;

    span {
        margin-top: 21px;
    }
} 

@media (max-width: 1160px) {
    .office-tiles {
        flex-direction: column;
    }

    .office-tiles > div {
        min-width: 100%;
        min-height: 300px;
    } 
}
`








// .Container {
//     position: relative;
//     display: flex;
//     flex-direction: row;
//     margin: 0.6% 1%;
//     width: 100%;
// }


// h4 {
//     position: absolute;
//     font-family: "Poppins-bold", sans-serif;
//     font-size: 21px;
//     margin: 1.35rem;
//     line-height: 1.36;
//     top: 3.4px;
//     left: 5px;
//     width: 90%;
// }

// p {
//     font-size: 13.5px;
//     position: relative;
//     margin-top: 3.8%;
//     margin-left: 1%;
// }

// .one, .two, .three, .four {
//     position: absolute;
//     background-color: #fff;
//     padding-left: 25px;
//     margin: 1.35rem;
// }

// .one {
//     height: 119px; 
//     width: 167px;

//     .oneCustomDiv, .oneCustomP {
//         top: -26px;
//     }
// }

// .two {
//     height: 146px; 
//     width: 181px;
// }

// .three, .four {
//     top: 30.3%; 
//     height: 146px; 
// }

// .three {
//     width: 167px;
// }

// .four {
//     width: 243px;

//     .fourCustomP {
//         top: -4px;
//     }
// }

// .arrowTop {
// }

// .arrowBottom {
//     top: 64.2%;
// }

// .squareFour {
//     margin-left: 1.9%;
// }

// a { 
//     color: #000;
//     transition: color 0.3s ease;
// }

// a:hover {
//     color: royalblue;
// }

//     @media (max-width: 1300px) {
//         grid-template-columns: 1fr;
//         height: auto;

//         .Container {
//             height: 48.5vh;
//             margin-top: 2%;
//         }

//         .arrowBottom {
//             top: 73.6%;
//         }

//         .three, .four {
//             top: 0;
//         }
//     }
// ` 

// const Underline = styled.div`
//     position: relative;
//     background-color: #000;
//     height: 4px;
//     width: 37px;
//     margin-top: 6.3vh;
//     margin-left: 1%;
// `

// const TopContainer = styled.div`
// height: 93.4%;
// margin-top: 2%;
// `

// const BottomContainer = styled.div`
// height: 70.5%;
// `

// const TopRow = styled.div`
//     display: flex;
//     `

// const BottomRow = styled.div`
//     display: flex;
//     `

// const Arrow = styled(AiOutlineArrowRight)`
// position: absolute;
// display: flex;
// background-color: #fff;
// border-radius: 0px;
// height: 98px;
// width: 98px;
// padding: 30px;
// top: 73.85%;
// left: 83.1%;

// @media screen and (max-width: 868px) {
//     left: 76%;
// }
// `

// const ItemSquare = styled.div`
// background-color: #ffc439;
// position: relative;
// height: 32px;
// width: 32px;
// margin-top: 18.5px;
// left: -4.4%;
// `