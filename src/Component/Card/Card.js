import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
const Card = () => {
  const [post, setPost] = useState([]);

  const Posts = async () => {
    const local = "http://localhost:9091";
    const url = `${local}/api/content/`;
    await axios.get(url).then((res) => {
      setPost(res.data.data);
      console.log(res.data.data);
    });
  };
  useEffect(() => {
    Posts();
  }, []);
  return (
    <Container>
      {post?.map((props) => {
        return (
          <Hold key={props._id}>
            <Image src="/images/s.JPEG" />

            <Text>
              <Title>{props.title}</Title>
              <Description>{props.message}</Description>
            </Text>
          </Hold>
        );
      })}
    </Container>
  );
};

export default Card;
// const Container = styled.div``
// const Container = styled.div``
const Title = styled.div`
  font-weight: bolder;
  font-size: 17px;
  padding: 3px 0;
  text-align: center;
`;
const Description = styled.div`
  font-size: 11px;
  font-family: arvo;
  font-weight: 300;
  padding: 4px 0;
  text-align: center;
`;
const Text = styled.div`
  width: 300px;
  min-height: 60px;

  @media (max-width: 320px) {
    width: 280px;
  }
  /* background-color: yellow; */
`;
const Image = styled.img`
  width: 300px;
  height: 240px;
  object-fit: cover;
  border-radius: 6px;
  @media (max-width: 320px) {
    width: 280px;
  }
`;
const Hold = styled.div`
  width: 300px;
  min-height: 300px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

  /* background-color: red; */
  margin: 20px;
  @media (max-width: 320px) {
    width: 280px;
  }
`;
const Container = styled.div`
  /* margin-top: 20px; */
  /* background-color: blue; */
  width: 100%;
  min-height: 0in;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
