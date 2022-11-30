import * as React from "react"
import styled from 'styled-components'
import { menuData } from '../data/MenuData'

const Header = () => {
  return (

    <Navigation>
      <div className="container-fluid d-flex flex-row custom-nav">
        <div class="left-container">
          <h1>LOGO</h1>
          <NavMenu className="d-flex flex-row">
            {menuData.map((item, index) => 
              <NavLink to ={item.link} key={index}>
                {item.title}
              </NavLink>
            )}
          </NavMenu>
        </div>
        <div className="social">
          <a href="/" className="socialIcon">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="/" className="socialIcon">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      </Navigation>
  )
}

export default Header

const Navigation = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  z-index: 2;
  padding-top: 48px;
  padding-left: 8.5%;
  padding-right: 8.5%;

  .custom-nav {
    justify-content: space-between;

    .left-container {
      display: flex;
      flex-direction: row;
    }
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 48px; 
    color: #fff;
  }

  .social {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: -4px;
    margin-right: -8px;
    
    a {
      color: #000;
      font-size: 17px;
      height: 27px;
      width: 27px;
    }
    a:last-of-type {
      font-size: 20px;
    }

    .socialIcon {
      background-color: #fff;
      margin-left: 11px;
      margin-right: 11px;
    }
  }

  @media (max-width: 991px) {
    padding-left: 2.4%;
    padding-right: 2.4%;

    .social {
      margin-right: 30px;
    }
  }
`

const NavMenu = styled.div`
  font-size: 15.5px;
  color: #fff;
  align-items: center;
  // width: 775px;
  width: 51.3vw;
  justify-content: space-around;
  // margin-left: 148px;
  margin-left: 11.9%;
  margin-top: -2px;

  @media (max-width: 768px) {
    width: 150px;
  }
`

const NavLink = styled.div`
  // align-items: center;
  justify-content: space-around;
  padding-left: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`

// const Nav = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   padding: 0.5rem calc((100vw - 1200px) / 2);
//   height: 80px;
//   background: transparent;
//   z-index: 2; 

//   h1 {
//     position: relative;
//     top: 28px;
//     left: 1%;
//     width: 8vw;
//     height: 8vw;
//     font-family: "Poppins-bold", sans-serif;
//     font-size: clamp(28px, 2.5vw, 3rem);
//     cursor: pointer;
//   }

//   .Social {
//     margin-right: 13px;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
//   }

//   .socialIcon {
//     height: 20.5px;
//     width: 20.5px;
//     margin-top: 40px;
//     padding: 4px;
//     font-size: 17px;
//     text-align: center;
//     color: #000;
//     background-color: #fff;

//     @media screen and (max-width: 768px) {
//       display: none;
//     }
//     }

//     .FB {
//       margin-right: 17px;
//     }
// `

// const NavMenu = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   width: 40.2vw;
//   margin-left: -14%;
//   top: 20px;
  
//   @media screen and (max-width: 1100px) {
//     display: none;
//   }
// `

// const NavLink = styled(Link)`
//   display: flex;
//   height: 100%;
//   font-size: 12px; 
//   letter-spacing: -0.2px;
//   align-items: center;
//   text-decoration: none;
//   color: #000;
//   cursor: pointer;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `