import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Fade from 'react-reveal/Fade';
import { selectCars, selectMenu } from '../Features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
  const [menuStatus, setMenuStatus] = useState(false);
  const cars = useSelector(selectCars);
  const menu = useSelector(selectMenu);
  console.log(menu);

  return (
    <Container>
      <Fade left>
        <a href="#">
          <img src="/images/logo.svg" alt="" />
        </a>
      </Fade>
      <Fade right>
        <Menu>
          {cars && cars.map((car, index) => (
            <a key={index} href="#">{car}</a>
          ))}
        </Menu>
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>
          <CustomMenu onClick={()=>setMenuStatus(true)} />
        </RightMenu>
      </Fade>
      <MenuNav show={menuStatus}>
        <ButtonWrap>
          <Closebtn onClick={()=>setMenuStatus(false)} />
        </ButtonWrap>
          {menu && menu.map((option, index) => (
            <li key={index}>
              <a href="#">{option}</a>
            </li>
          ))}
      </MenuNav>      
    </Container>
  )
}

export default Header

const Container = styled.div`
  z-index: 1;
  min-height: 40px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 35px;
  top: 0;
  left: 0;
  right: 0;

  // a:hover {
  //   background: rgba(6, 6, 6, 0.1);
  // }

`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }
`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`
const MenuNav = styled.div`
  list-style: none;
  position: fixed;
  top: 0;
  buttom: 0;
  right: 0;
  background: white;
  width: 294px;
  height: 100vh;
  z-index: 5;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  transform: ${props => props.show ? `translateX(0)` : `translateX(100%)`};
  transition: transform 0.2s ease-in;
  li {
    padding: 15px;
    border-radius: 5px;
    transition: 0.2s ease-in;
    a {
      font-weight: 600;
    }
  }
  li:hover {
    background: rgba(6, 6, 6, 0.1);
  }
`
const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`

const Closebtn = styled(CloseIcon)`
  text-align: end;
`