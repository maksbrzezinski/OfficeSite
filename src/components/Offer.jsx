import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Offer = () => {
    
    return (
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
                        <p className="p-desktop">Biuro lorem ipsum<br/> Lorem</p>
                        <p className="p-mobile">Biuro lorem ipsum Lorem</p>
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
position: relative;
margin-top: 125px;
min-height: 80vh;
padding-left: 8.4%;
padding-right: 8.4%;

.office-tiles {
    display: flex;
    flex-flow: wrap;
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
    transition: 0.3s;

    @media (max-width: 768px) {
        width: 80px;
        height: 80px;
    }
}

.arrow-container:hover {
    background-color: #ffcc38;
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
        transition: transform 0.5s;
    }
}

#con-1:hover > .photo1, #con-2:hover > .photo2, #con-3:hover > .photo3, #con-4:hover > .photo4 {
    transform: scale(1.2);
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

    .p-mobile {
        display: none;
    }

    p:first-of-type {
        font-family: 'Poppins' , sans-serif;
        font-weight: 700;
        font-size: 28px;
        position: relative;
        margin-top: -35px;
        line-height: 40px;

        @media (max-width: 991px) {
            font-size: 24px;
        }
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
        min-height: 380px;
    } 
}

@media (max-width: 768px) {
    margin-top: -40px; 

    #con-1, #con-2, #con-3, #con-4 {
        margin-left: 0; 
        margin-right: 0; 
    }

    .text-container-1, .text-container-2, .text-container-3, .text-container-4 {
        padding: 15px;
        height: 130px;
        width: 200px;

        span {
            margin-top: -10px;
        }

        p, span {
            margin-left: 0;
        }
    }

    .p-desktop {
        display: none;
    }

    .p-mobile {
        display: block !important;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 28px;
        position: relative;
        margin-top: -35px;
        line-height: 40px;
    }

    .text-container-4 {
        width: 230px;
        height: 170px;
    }

    .yellow-square {
        margin-left: -10px;
    }

}
`