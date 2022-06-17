import React from "react";
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../Global/Globalstate";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.current);
  return (
    <Container>
      <Logo>
        <img src="/images/stf.jpg" />
      </Logo>
      {user ? (
        <Wrap>
          <Navhold>
            <Navs to="/">Home</Navs>
            <Navs to="/card">Gallery</Navs>
            <Navs to="/Booking">Book a service</Navs>
            <Navs to="/upload">Upload</Navs>
            <Navs to="/card">About</Navs>
          </Navhold>
          <Buttons>
            <Button2 to="/Signin">
              <button
                onClick={() => {
                  dispatch(signOut());
                  navigate("/Signin");
                }}
              >
                LogOut
              </button>
            </Button2>
          </Buttons>
        </Wrap>
      ) : (
        <Buttons>
          <Button1 to="/Signin">
            <button>Login</button>
          </Button1>
          <Button2 to="/Signup">
            <button>Register</button>
          </Button2>
        </Buttons>
      )}

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
        {user ? (
          <Hold>
            <Nav to="/">Home</Nav>
            <Nav to="/card">Gallery</Nav>
            <Nav to="/Booking">Book a service</Nav>
            <Nav to="/upload">Upload</Nav>
            <Nav to="/card">About</Nav>
            <Button3 to="/Signin">
              <button
                onClick={() => {
                  dispatch(signOut());
                  navigate("/Signin");
                }}
              >
                Logout
              </button>
            </Button3>
          </Hold>
        ) : (
          <Hold>
            {/* <Logo>
              <img src="/images/stf.jpg" />
            </Logo> */}
            <Button3 to="/Signin">
              <button>Login</button>
            </Button3>
            <Button4 to="/Signup">
              <button>Register</button>
            </Button4>
          </Hold>
        )}
      </Sidebar>
    </Container>
  );
};

export default Header;
// const Container = styled.div``
const Wrap = styled.div`
  /* background-color: rebeccapurple; */
  /* width: 40%; */
  /* height: 70px; */
  display: flex;
`;
const Button4 = styled(Link)`
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
const Button3 = styled(Link)`
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
const Nav = styled(Link)`
  margin-top: 40px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  color: black;
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
  @media (max-width: 834px) {
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
  @media (max-width: 834px) {
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
  @media (max-width: 834px) {
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
  @media (max-width: 834px) {
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
  /* z-index: 1000; */
  background-color: black;
`;
