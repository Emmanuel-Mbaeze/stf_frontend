import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Home() {
  const slider = [
    {
      id: 1,
      title: "Be Creative In Your Mind.",
      author: "stfcreate",
      image: "/images/ss.jpeg",
    },
    {
      id: 2,
      title: "Professional Photography Studio.",
      author: "stfcreate",
      image: "/images/6.jpg",
    },
    {
      id: 3,
      title: "The World without Photography Will Be Meaningless.",
      author: "stfcreate",
      image: "/images/7.jpg",
    },
    {
      id: 4,
      title: "Photos Inspired By People I Photograph.",
      author: "stfcreate",
      image: "/images/s.jpeg",
    },
  ];

  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setInterval(() => {
      setCount((el) => el + 1);
    }, 30000);
  }, []);

  return (
    <>
      <Container>
        <Background>
          <img src={slider[count % slider.length].image} alt="" />
        </Background>
        <Content>
          <Info>{slider[count % slider.length].title}</Info>
          <Details>
            <Author>{slider[count % slider.length].author}</Author>
          </Details>
        </Content>
      </Container>
    </>
  );
}

const Container = styled.div`
  color: #fff;
  padding-top: 60px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 77vh;
  flex-direction: column;
  position: relative;
  /* background-color: pink; */
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70vh;
  /* background-color: blue; */
  margin-top: 80px;
  padding-top: 100px;
  z-index: 1;
`;
const Background = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  position: absolute;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Tag = styled.div`
  margin: 10px;
  margin-top: 150px;
`;
const Author = styled.div``;
const Span = styled.span`
  border: 2px solid #fff;
  border-radius: 15px;
  padding: 6px;
`;
const Info = styled.h2`
  font-size: 3rem;
  width: 650px;
  color: #eeee;
  /* background-color: violet; */
`;
const Details = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px;
  /* background-color: gold; */
`;
const Border = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
  margin-top: -20px;
`;
