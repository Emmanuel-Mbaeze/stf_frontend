import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header/Header";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { addbooking } from "../Global/Globalstate";
import { useDispatch, useSelector } from "react-redux";

const Booking = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const yupSchema = yup.object().shape({
    title: yup.string().required("This field should be filled"),
    message: yup.string().required("This field should be filled"),
    fullname: yup.string().required("This field should be filled"),
    location: yup.string().required("This field should be filled"),
  });

  const user = useSelector((state) => state.current);
  const id = user._id;

  const { handleSubmit, reset, register } = useForm({
    resolver: yupResolver(yupSchema),
  });

  const onSubmit = handleSubmit(async (val) => {
    console.log(val);
    const { message, title, fullname, location } = val;

    const local = "http://localhost:9091";
    const url = `${local}/api/book/create/${id}`;

    await axios
      .post(url, { message, title, fullname, location })
      .then((res) => {
        dispatch(addbooking(res.data.data));
        console.log(res.data.data);
      });
    navigate("/");
  });
  return (
    <>
      {/* <Header /> */}
      <Container>
        <Wrapper onSubmit={onSubmit}>
          <Title {...register("title")} placeholder="Title"></Title>
          <Card>
            <textarea
              {...register("message")}
              placeholder="Input Description"
            />
          </Card>
          <Date placeholder="fullname" {...register("fullname")}></Date>
          <Time placeholder="location" {...register("location")}></Time>
          <Button>
            <button type="submit">Upload</button>
          </Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default Booking;

const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  /* background-color: black; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;
const Wrapper = styled.form`
  width: 400px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.3);

  @media (min-width: 390px) and (max-width: 428px) {
    width: 380px;
  }
  @media (max-width: 320px) {
    width: 305px;
  }
  @media (min-width: 360px) and (max-width: 375px) {
    width: 345px;
  }
`;
const Card = styled.div`
  width: 90%;
  /* background-color: gold; */
  height: 107px;
  textarea {
    width: 98%;
    min-height: 100px;
    border: 1.5px solid lightgrey;
    outline: none;
    resize: none;
  }
`;
const Title = styled.input`
  width: 90%;
  height: 37px;
  border: none;
  outline: none;
  border-radius: 4px;
  border: 1.5px solid lightgrey;
`;

const Date = styled.input`
  width: 90%;
  height: 37px;
  border: none;
  outline: none;
  border-radius: 4px;
  border: 1.5px solid lightgrey;
`;
const Time = styled.input`
  width: 90%;
  height: 37px;
  border: none;
  outline: none;
  border: 1.5px solid lightgrey;

  border-radius: 4px;
`;
const Button = styled.div`
  button {
    padding: 14px 26px;
    border: 1.5px solid grey;
    background-color: black;
    color: white;
    border-radius: 5px;
    outline: none;
  }
  :hover > button {
    background-color: transparent;
    color: black;
  }
`;
