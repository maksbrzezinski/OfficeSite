import * as React from "react"
import styled from 'styled-components'
import { menuData } from '../data/MenuData'
import { Link } from "gatsby"
import { SiInstagram } from "react-icons/si"
import { FaFacebookF } from "react-icons/fa"

const Header = () => {
  return (
    <Nav>
      <LogoText>LOGO</LogoText>
      <NavMenu>
        {menuData.map((item, index) => 
          <NavLink to ={item.link} key={index}>
            {item.title}
          </NavLink>
        )}
      </NavMenu>
      <NavBtn>
        <Link to="/Facebook">
          <Facebook>
            <FaFacebookF />
          </Facebook>
        </Link>
        <Link to="/Instagram">
          <Instagram>
            <SiInstagram />
          </Instagram>
        </Link>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.div`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  padding-left: 120px;
  padding-right: 120px;
  z-index: 2; 
`
const LogoText = styled.div`
  font-family: Poppins-bold;
  position: relative;
  display: block;
  font-size: 48px;
  top: 32px;
  left: 3.3%;
  width: 8vw;
  height: 8vw;
  overflow: pointer;
`

const NavMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 44vw;
  position: relative;
  justify-items: center;
  margin-left: 6rem;
  top: 39px;
  left: -7.1%;
  
  @media screen and (max-width: 1300px) {
    display: none;
  }
`

const NavLink = styled(Link)`
  color: black;
  display: flex;
  font-size: 1rem; 
  letter-spacing: -0.2px;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavBtn = styled.div`
  display: flex;
  position: relative;
  align-items: start;
  margin-right: 18px;
  /* left: 5px;
  top: 1px; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Facebook = styled.div`
  display: flex;
  height: 28px;
  width: 28px;
  /* padding-right: 0.5rem; */
  /* padding-top: 2rem; */
  margin: 55px 22px 0 0;
  font-size: 17px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: black;
  background-color: #fff;

  @media screen and (max-width: 768px) {
    display: none;
  }
`


const Instagram = styled.div`
  display: flex;
  height: 28px;
  width: 28px;
  /* padding-left: 0.5rem; */
  /* padding-top: 2rem; */
  margin: 55px 39px 0 0;
  font-size: 17px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: black;
  background-color: #fff;

  @media screen and (max-width: 768px) {
    display: none;
  }
`