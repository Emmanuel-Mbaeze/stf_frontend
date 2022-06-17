import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import Collection from './Collection'
import Aos from "aos"
import "aos/dist/aos.css"


 const Slide = () => {

    useEffect(()=>{
        Aos.init({duration:1500})
            }, [])

    const [change,setChange] = useState(0)

    const slider =
      [ 
        // "/Assets/black.jpg",
           "/Assets/redview.png",
           
        "/Assets/whiteb.png"
    ]
       
       
    const addCount =()=>{
        setChange(change + 1)
        console.log(slider)
    }
    const minusCount =()=>{
        setChange(change - 1)
        console.log(slider)
    }




  

  return (
    <>
        <Container>
          
            <Wrapper>
                <Hold>
                    <FaArrowAltCircleLeft onClick={minusCount} size='40px' />
                </Hold>
                <BoxPic data-aos="fade-right">
             
                    <Pic src={slider[change%slider.length]}/>
                    <Des>
                    <Coll>mercedes Collection</Coll>
                    <Model></Model>
                    <Title></Title>
                  
                    <But>Purchase</But>
                    </Des>
                </BoxPic>
                <Hold>
                    <FaArrowAltCircleRight  size='40px'onClick={addCount}/>
                </Hold>
               
            </Wrapper>
        </Container>
    </>
  )
}

export default Slide
const Coll = styled.div`
font-family: poppins;
font-size: 25px;
/* margin-top: 150px; */

@media screen and (max-width: 786px){
  font-size: 18px;
}
`
const ButHold = styled.div`
margin-top: 30px;
`

const But = styled.div`
width:170px;
height:45px;
border:none;
background-color: #EF4D39;
color:white;
font-size:15px;
font-weight:500;
border-radius: 5px;
justify-content: center;
align-items:center;
display:flex;
font-family: poppins;
border: 3px solid #EF4D39;
cursor: pointer;
margin-bottom: 130px;
:hover{
  background-color: #EF4D39;
  border: solid 2px white;
}

@media screen and (max-width: 768px){
    margin-bottom: 40px; 
}
`

const Des = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-bottom: 20px;
`

const Title = styled.div`
font-family: poppins;
margin-bottom: 20px;
`

const Model = styled.div`
font-family: poppins;
color: #EF4D39;
`

const Container = styled.div`
flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 650px;
    width: 100%;
    /* background-color: red; */
    padding-bottom: 30px;

    @media screen and (max-width:768px){
        height: 350px; 
    }
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
`
const Hold = styled.div`
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`
const BoxPic = styled.div`

/* height: 550px; */
width: 70%;
display: flex;

align-items: center;
flex-direction: column;

/* img{
    height: 90%;
    width: 100%;
    object-fit: cover;
} */

`

const Pic = styled.img`
   height: 90%;
    width: 100%;
    object-fit: cover;
    /* background-image: url(${({bg})=>bg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
display: flex;
position: absolute; */
`