import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
export const PrimaryNav = styled.nav`
  display:flex;
  background: #251d26;
  height: 90px;
  justify-content: space-between;
  
`
export const MenuLink = styled(Link)`
  color: #fff;
  font-family: Tahoma, sans-serif;
  text-align:right;
  text-decoration: none;
  padding:30%;
  height: 100%;
  &.active {
    color:#2e2c2e;
  }
`
export const Hamburger = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 10rem;
    transform: translate(-100%, 75%);
    position: relative;
    cursor: pointer;
    
  }
`
export const Menu = styled.div`
 display:flex;
 text-align: right;
color: black;
  @media screen and (max-width: 768px) {
    display: none;
  }
`