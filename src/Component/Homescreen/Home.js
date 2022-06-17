import React from "react";
import Card from "../Card/Card";
import Slider from "../Pages/Slider";
const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.9)",
      }}
    >
      <Slider />
      <Card />
      <h4>Home of all photography</h4>
    </div>
  );
};

export default Home;
