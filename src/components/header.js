import * as React from "react"
import styled from 'styled-components'
import { menuData } from '../data/MenuData'
import { Link } from "gatsby"
import { SiInstagram } from "react-icons/si"
import { FaFacebookF } from "react-icons/fa"

const Header = () => {
  return (
    <Nav>
      <h1>LOGO</h1>
      <NavMenu>
        {menuData.map((item, index) => 
          <NavLink to ={item.link} key={index}>
            {item.title}
          </NavLink>
        )}
      </NavMenu>
      <div className="Social">
        <Link to="/Facebook">
            <FaFacebookF className="socialIcon FB"/>
        </Link>
        <Link to="/Instagram">
            <SiInstagram className="socialIcon Insta"/>
        </Link>
      </div >
    </Nav>
  )
}

export default Header

const Nav = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1200px) / 2);
  height: 80px;
  background: transparent;
  z-index: 2; 

  h1 {
    position: relative;
    top: 28px;
    left: 1%;
    width: 8vw;
    height: 8vw;
    font-family: "Poppins-bold", sans-serif;
    font-size: clamp(28px, 2.5vw, 3rem);
    cursor: pointer;
  }

  .Social {
    margin-right: 13px;

  @media screen and (max-width: 768px) {
    display: none;
  }
  }

  .socialIcon {
    height: 20.5px;
    width: 20.5px;
    margin-top: 40px;
    padding: 4px;
    font-size: 17px;
    text-align: center;
    color: #000;
    background-color: #fff;

    @media screen and (max-width: 768px) {
      display: none;
    }
    }

    .FB {
      margin-right: 17px;
    }
`

const NavMenu = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 40.2vw;
  margin-left: -14%;
  top: 20px;
  
  @media screen and (max-width: 1100px) {
    display: none;
  }
`

const NavLink = styled(Link)`
  display: flex;
  height: 100%;
  font-size: 12px; 
  letter-spacing: -0.2px;
  align-items: center;
  text-decoration: none;
  color: #000;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
`