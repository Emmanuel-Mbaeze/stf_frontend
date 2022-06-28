import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header/Header";
import pix from "../Pages/user.png";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { addcontent } from "../Global/Globalstate";
import { useDispatch, useSelector } from "react-redux";

const Upload = () => {
  const [image, setImage] = useState("");
  const [avatar, setAvatar] = useState(pix);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleImage = (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setAvatar(save);
    setImage(file);
  };

  const yupSchema = yup.object().shape({
    title: yup.string().required("This field should be filled"),
    message: yup.string().required("This field should be filled"),
  });

  const user = useSelector((state) => state.current);
  const id = user._id;

  const { handleSubmit, reset, register } = useForm({
    resolver: yupResolver(yupSchema),
  });

  const onSubmit = handleSubmit(async (val) => {
    console.log(val);
    const { message, title } = val;

    // const local = "http://localhost:9091";
    const online = "https://stfback.herokuapp.com";
    const url = `${online}/api/content/create/${id}`;

    const formData = new FormData();
    formData.append("message", message);
    formData.append("title", title);
    formData.append("image", image);

    const config = {
      "content-type": "multipart/form-data",
      onUploadProgress: (ProgressEvent) => {
        const { loaded, total } = ProgressEvent;
        const percent = Math.floor((loaded * 100) / total);
        console.log(percent);
      },
    };

    await axios.post(url, formData, config).then((res) => {
      dispatch(addcontent(res.data.data));
      console.log(res.data.data);
    });
    navigate("/");
  });
  return (
    <>
      {/* <Header /> */}
      <Container>
        <Wrapper onSubmit={onSubmit} type="multipart/form-data">
          <ImageHolder>
            <Image src={avatar} />
            <ImageLabel htmlFor="pix">Upload Image</ImageLabel>
            <ImageInput
              id="pix"
              onChange={handleImage}
              type="file"
              accept="avatar/*"
            />
          </ImageHolder>
          <Title {...register("title")} placeholder="Title"></Title>
          <Card>
            <textarea
              {...register("message")}
              placeholder="Input Description"
            />
          </Card>
          <Button>
            <button type="submit">Upload</button>
          </Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default Upload;
const ImageHolder = styled.div`
  /* width: 90%; */
  width: 100%;
  height: 290px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 15px;
  /* background-color: red; */
  margin-top: -15px;
`;
const ImageInput = styled.input`
  display: none;
`;
const ImageLabel = styled.label`
  padding: 10px 20px;
  background-color: black;
  color: white;
  border-radius: 3px;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;
const Image = styled.img`
  width: 99%;
  height: 223px;
  object-fit: cover;
  border: 2.2px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 91vh;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);

  /* background-color: yellow; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.form`
  /* width: 30%; */
  width: 400px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  margin-top: 20px;
  align-items: center;
  border-radius: 10px;

  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  @media (min-width: 390px) and (max-width: 428px) {
    width: 380px;
  }
  @media (max-width: 320px) {
    width: 305px;
  }
  @media (min-width: 360px) and (max-width: 375px) {
    width: 345px;
  }
  @media (min-width: 760px) and (max-width: 834px) {
  }
`;
const Card = styled.div`
  width: 90%;
  height: 117px;
  textarea {
    width: 100%;
    min-height: 110px;
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

const Button = styled.div`
  button {
    padding: 14px 34px;
    border: 1.5px solid grey;
    background-color: black;
    color: white;
    font-size: 14px;
    font-weight: 600;
    border-radius: 5px;
    outline: none;
  }
  :hover > button {
    background-color: transparent;
    color: black;
  }
`;
