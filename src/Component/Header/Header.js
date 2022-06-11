import React from "react";
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Container>
      <Logo>
        <img src="/images/stf.jpg" />
      </Logo>
      <Navhold>
        <Navs to="/">Home</Navs>
        <Navs to="/card">Portfolio</Navs>
        <Navs to="/Booking">Book a service</Navs>
        <Navs to="/upload">Upload</Navs>
        <Navs to="/card">About</Navs>
      </Navhold>
      <Buttons>
        <Button1 to="/Signin">
          <button>Login</button>
        </Button1>
        <Button2 to="/Signup">
          <button>Register</button>
        </Button2>
      </Buttons>
      <Icons>
        <AiOutlineMenu
          id="Menu"
          onClick={() => {
            document.getElementById("sidebar").style.width = "260px";
            document.getElementById("Menu").style.display = "none";
            document.getElementById("Close").style.display = "block";
          }}
        />
        <AiOutlineClose
          fontSize="25px"
          style={{
            display: "none",
          }}
          id="Close"
          onClick={() => {
            document.getElementById("sidebar").style.width = "0";
            document.getElementById("Menu").style.display = "block";
            document.getElementById("Close").style.display = "none";
          }}
        />
      </Icons>
      <Sidebar id="sidebar">
        <Hold>
          <Nav>Home</Nav>
          <Nav>Blog</Nav>
          <Nav>Portfolio</Nav>
          <Nav>Book a service</Nav>
          <Nav>About</Nav>
          <Button3>
            <button>Login</button>
          </Button3>
          <Button4>
            <button>Register</button>
          </Button4>
        </Hold>
      </Sidebar>
    </Container>
  );
};

export default Header;
// const Container = styled.div``
const Button4 = styled.div`
  :hover > button {
    background-color: transparent;
    border: 2px solid white;
    color: white;
    transform: scale(1.09);
    transition: all 950ms;
    /* transform: rotate(2.09); */
  }
  button {
    padding: 12px 16px;
    color: black;
    font-weight: bold;
    font-size: 14px;
    background-color: white;
    outline: none;
    border: 2px solid black;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 30px;
  }
`;
const Button3 = styled.div`
  :hover > button {
    background-color: transparent;
    border: 2px solid white;
    color: black;
    transform: scale(1.09);
    transition: all 950ms;
    /* transform: rotate(2.09); */
  }
  button {
    padding: 12px 20px;
    color: white;
    font-weight: bold;
    font-size: 14px;
    background-color: black;
    outline: none;
    border: none;
    border-radius: 6px;
    margin-right: 20px;
    cursor: pointer;
    margin-top: 30px;
    margin-left: 20px;
  }
`;
const Nav = styled.div`
  margin-top: 40px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`;
const Logos = styled.div`
  img {
    width: 60px;
  }
`;
const Hold = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;
const Sidebar = styled.div`
  width: 0;
  height: 100vh;
  background-color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

  position: fixed;
  display: none;
  z-index: 10;
  transition: all 950ms;
  overflow: hidden;
  top: 0;
  left: 0;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Icons = styled.div`
  color: white;
  font-size: 27px;
  font-weight: bolder;
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;
const Button2 = styled(Link)`
  :hover > button {
    background-color: transparent;
    border: 2px solid white;
    color: white;
    transform: scale(1.09);
    transition: all 950ms;
    /* transform: rotate(2.09); */
  }
  button {
    padding: 12px 16px;
    color: black;
    font-weight: bold;
    font-size: 14px;
    background-color: white;
    outline: none;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
`;
const Button1 = styled(Link)`
  :hover > button {
    background-color: white;
    color: black;
    transform: scale(1.09);
    transition: all 950ms;
    /* transform: rotate(2.09); */
  }
  button {
    padding: 12px 20px;
    color: white;
    font-weight: bold;
    font-size: 14px;
    background-color: transparent;
    outline: none;
    border: none;
    border-radius: 6px;
    margin-right: 20px;
    cursor: pointer;
  }
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Navs = styled(Link)`
  margin-right: 40px;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
  text-decoration: none;
  color: white;
`;
const Navhold = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  align-items: center;
  margin-left: 90px;
`;
const Logo = styled.div`
  img {
    width: 60px;
  }
`;
const Container = styled.div`
  padding: 3px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
`;
