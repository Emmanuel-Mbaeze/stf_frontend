import React from "react";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Up>
          <Whatsapp>
            <Icon />
            <Text>(+234) 8088253728</Text>
          </Whatsapp>
          <Whatsapp>
            <Icon />
            <Text>(+234) 9012075964</Text>
          </Whatsapp>
          <Whatsapp>
            <Icon />
            <Text>mbaezesomto@gmail.com</Text>
          </Whatsapp>
          <Whatsapp>
            <Icon />
            <Text>London,Bakere Street</Text>
          </Whatsapp>
        </Up>
        <Down>
          <Me>Designed By Emmanuel Mbaeze</Me>
          <Why>
            My photos are inspired by light, color, techniques from black &
            white processing, vintage photos, creative perspective, and of
            course, most importantly, the personalities of the people I
            photograph!
          </Why>
        </Down>
      </Wrapper>
    </Container>
  );
};
export default Footer;
// const Up = styled.div``
const Why = styled.div`
  width: 610px;
  opacity: 0.5;
  color: white;
  @media (max-width: 900px) {
    width: 93%;
    text-align: center;
  }
`;
const Me = styled.div`
  width: 350px;
  font-weight: bolder;
  opacity: 0.3;
  color: white;
  @media (max-width: 900px) {
    width: 93%;
    margin-top: 15px;
  }
`;
const Down = styled.div`
  width: 100%;
  min-height: 70px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    text-align: start;
    margin-top: 45px;
  }
`;
const Text = styled.div`
  font-weight: 500;
  font-size: 17px;
  opacity: 0.5;
  color: white;
  @media (max-width: 900px) {
    font-size: 13px;
  }
  @media (max-width: 425px) {
    font-size: 10px;
  }
  @media (min-width: 500px) and (max-width: 900px) {
    /* justify-content: center; */
    /* background-color: red; */
  }
  /* width: 100%; */
`;
const Icon = styled(FaUser)`
  color: white;
  font-size: 45px;
  border: 1.5px solid white;
  border-radius: 100%;
  @media (max-width: 900px) {
    font-size: 40px;
  }
  @media (max-width: 425px) {
    font-size: 30px;
  }
`;
const Whatsapp = styled.div`
  width: 130px;
  height: 80px;
  display: flex;
  flex-direction: column;
  /* background-color: palegoldenrod; */
  align-items: center;
  justify-content: space-between;
  margin: 5px;
`;
const Up = styled.div`
  width: 100%;
  min-height: 80px;
  /* background-color: gold; */
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: space-between;
  @media (max-width: 900px) {
    justify-content: center;
    // background-color: red;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  min-height: 200px;
  /* background-color: white; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;

  @media (max-width: 900px) {
    min-height: 250px;
  }
`;
const Container = styled.div`
  width: 100%;
  min-height: 260px;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  //   margin-top: 2px;

  @media (max-width: 900px) {
    min-height: 300px;
  }
`;
