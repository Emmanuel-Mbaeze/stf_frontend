import React from "react";
import styled from "styled-components";
const About = () => {
  return (
    <Container>
      <Wrapper>
        <Left src="/images/10.jpg" />

        <Right>
          <Holder>
            <Up>
              {/* <Hold> */}
              We are,
              <br />
              <span>stfcreate.</span>
              {/* </Hold> */}
            </Up>
            <MIddle>
              The world without photography will be meaningless to us <br />
              if there is no light and color, which opens up our minds <br />
              and expresses passion. alignment monotonactly
            </MIddle>
            <Down>
              My style is a combination between photojournalism and fine-art
              <br /> photography with a touch of fashion and creative lighting.
              My <br />
              photos are inspired by light, color, techniques from black & white
              <br /> processing, vintage photos, creative perspective, and of
              course, <br />
              most importantly, the personalities of the people I photograph!
            </Down>
          </Holder>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default About;
const Holder = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  /* background-color: yellow; */
  width: 490px;
  color: white;
`;
const Down = styled.div`
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
  margin-top: 25px;
  font: bold;
  font-style: 13px;
  opacity: 0.5;
  /* background-color: aliceblue; */
`;
const MIddle = styled.div`
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
  margin-top: 55px;
  font: bold;
  font-style: 13px;
  opacity: 0.5;
`;

const Up = styled.div`
  width: 600px;
  min-height: 18vh;
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
    font-size: 35px;
    // background-color: aliceblue;
  }
  font-weight: bold;
  font-size: 50px;
  text-transform: capitalize;
  span {
    color: orangered;
    font-size: 57px;
    margin-top: -97px;
  }
`;
const Right = styled.div`
  width: 500px;
  min-height: 71vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: brown; */
`;
const Left = styled.img`
  width: 550px;
  height: 71vh;

  object-fit: cover;
`;
const Wrapper = styled.div`
  width: 80%;
  min-height: 71vh;
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 900px) {
    justify-content: center;
  }
`;
const Container = styled.div`
  width: 100%;
  min-height: 88.5vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;
