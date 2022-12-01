import * as React from "react"
import { useState } from "react"
import styled from 'styled-components'
import { menuData } from '../data/MenuData'

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
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

          <nav className="navBar">
            <button onClick={handleToggle} type="button" class="btn btn-outline-light"><i className="fa-solid fa-bars"></i></button>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
              <li>Poznaj Przestrzeń</li>
              <li>Oferta</li>
              <li>Lokalizacja</li>
              <li>Własne Biuro</li>
              <li>Kontakt</li>
            </ul>
          </nav>
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
  width: 51.3vw;
  justify-content: space-around;
  margin-left: 11.9%;
  margin-top: -2px;

  .navBar {
    position: relative;
    display: none;
  }
  
  .navBar button {
    position: relative;
    left: 50%;
    right: 50%;
    z-index: 10;
    cursor: pointer;
  }
  
  .menuNav {
    overflow-x: scroll;
    list-style: none;
    position: fixed;
    background-color: rgba(255,255,255,0.8);
    align-items: center;
    justify-content: center;
    top: 0;
    height: 0;
    width: 0;
    color: #000;
    overflow: hidden;
    z-index: 9;
    transition: 0.4s;
  }
  
  .menuNav.showMenu {
    min-width: 100vw;
    height: 300px;
    margin-left: -200px;
  }
  
  button {
    display: block;
    padding: 6px 16px;
    text-decoration: none;
    color: #000;

    i {
      font-size: 24px;
    }
  }
  
  .menuNav li {
    padding: 5px;
  }
  .menuNav li:first-child {
    margin-top: 7rem;
  }

  @media (max-width: 768px) {
    width: 150px;

    .navBar {
      display: block;
    }
  }
`

const NavLink = styled.div`
  justify-content: space-around;
  padding-left: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`