// import React from "react"
// import Home from "./Components/Homescreen/Home"
// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Discover from "./Components/Pages/Discover"
// import Community from "./Components/Pages/Community"
// import Services from "./Components/Pages/Services"
// import Tryfree from "./Components/Pages/Tryfree"
// const App =()=>{
//   return(
//     <BrowserRouter>
//     <Routes>
//     <Route path="/" element={<Home/>}/>
//     <Route path="/Discover" element={<Discover/>}/>
//     <Route path="/Community" element={<Community/>}/>
//     <Route path="/Services" element={<Services/>}/>
//     <Route path="/Tryfree" element={<Tryfree/>}/>

//     </Routes>
//     </BrowserRouter>
//   )
// }
// export default App

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./Component/Card/Card";
import Private from "./Component/Global/Private";
import Header from "./Component/Header/Header";
import Home from "./Component/Homescreen/Home";
import Booking from "./Component/Pages/Booking";
import Signin from "./Component/Pages/Signin";
import SIgnup from "./Component/Pages/SIgnup";
import Upload from "./Component/Pages/Upload";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Private>
              <Home />
            </Private>
          }
        />
        <Route
          path="/card"
          element={
            <Private>
              {" "}
              <Card />
            </Private>
          }
        />
        <Route path="/Signup" element={<SIgnup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route
          path="/upload"
          element={
            <Private>
              {" "}
              <Upload />
            </Private>
          }
        />
        <Route
          path="/Booking"
          element={
            <Private>
              <Booking />
            </Private>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
