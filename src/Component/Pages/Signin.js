import React from "react";
import styled from "styled-components";
import * as yup from "yup";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUsers } from "../Global/Globalstate";
const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().email().required("Field can't be empty"),
    password: yup.string().required("Field can't be empty"),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = handleSubmit(async (value) => {
    console.log(value);
    const { email, password } = value;
    const local = "http://localhost:9091";
    const url = `${local}/api/user/signin`;

    await axios.post(url, { email, password }).then((res) => {
      console.log(res.data.data);
      dispatch(createUsers(res.data.data));
    });
    navigate("/");
  });

  return (
    <Container>
      <Wrapper>
        <Left></Left>
        <Right>
          <Form onSubmit={onSubmit}>
            <Title>Sign In</Title>
            <Inputs>
              <Inputholder>
                <Label>Email address</Label>
                <Input
                  placeholder="input email"
                  {...register("email")}
                  type="email"
                />
                <Error>{errors.message && errors?.message.email}</Error>
              </Inputholder>
              <Inputholder>
                <Label>Password</Label>
                <Input
                  placeholder="input password"
                  {...register("password")}
                  type="password"
                />
                <Error>{errors.message && errors?.message.password}</Error>
              </Inputholder>
            </Inputs>
            <Buttons>
              <Button type="submit">Sign In</Button>
            </Buttons>
          </Form>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Signin;
//#090909
const Error = styled.div`
  color: red;
  font-weight: 500;
  font-size: 12px;
`;

const Right = styled.div`
  @media (max-width: 950px) {
    flex: 1;
  }
  flex: 0.5;
  min-height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: royalblue; */
`;
const Left = styled.div`
  @media (max-width: 950px) {
    display: none;
  }
  flex: 0.6;
  min-height: 90px;
  background-image: url("/images/sss.JPEG");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const Wrapper = styled.div`
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

  width: 75%;
  min-height: 80vh;
  display: flex;
  @media (max-width: 768px) {
    /* background-color: red; */
    width: 81%;
  }
`;
const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  /* background-color: green; */
`;

const Form = styled.form`
  @media (max-width: 768px) {
    flex: 1;
  }
  width: 90%;
  min-height: 25%;
  opacity: 0.8;
  /* background-color: red; */
  border-radius: 7px;
  padding: 20px 32px;
`;
const Buttons = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* background-color: red; */
  align-items: center;
  margin-top: 20px;
`;
const Button = styled.button`
  /* background-color: royalblue; */
  background-color: black;
  padding: 12px 28px;
  border-radius: 4px;
  color: white;
  font-size: 15px;
  transition: all 400ms;
  transform: scale(1);

  cursor: pointer;
  :hover {
    transform: scale(1.025);
    background-color: white;
    border: 2px solid black;
    color: black;
    font-size: 20px;
    font-weight: 600;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: black;
`;
const Inputs = styled.div`
  margin-top: 30px;
`;
const Inputholder = styled.div`
  margin-bottom: 20px;
`;
const Label = styled.div`
  font-weight: 700;
  color: black;
`;
const Input = styled.input`
  :focus {
    border: 1px solid black;
  }
  font-size: 17px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
  padding: 0 5px;
  width: 100%;
  height: 45px;
  border: none;
  outline: none;
  border-radius: 6px;
  margin-top: 7px;
`;
