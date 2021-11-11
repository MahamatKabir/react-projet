import React, {useState} from 'react';
import  {BsFillArrowLeftSquareFill,BsFillArrowRightSquareFill }  from  "react-icons/bs";
import styled from 'styled-components';
import {sliderItems} from '../data';




const Container = styled.div`
height:100vh;
display:flex;
width:100%;
position:relative;
overflow:hidden;
top:-100px;
`
const Arrow = styled.div`
width:100px;
height:50px;
background-color: #fffff;
border-radius:50%;
display:flex;
align-item:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
left: ${props => props.direction === 'left' && "10px"};
right: ${props => props.direction === 'right' && "10px"};
margin:auto;
z-index: 2;
`
const Wrapper = styled.div`
height:100%;
display:flex;
transition:  all  1s ease;
transform:translateX(${(props) =>props.slideIndex * -100}vw);
`
const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
align-item:center;
background-color:#${(props)=>props.bg};
`
const ImgContainer = styled.div`
height:100%;
flex:1;
`
const Image = styled.img`
height:80%;


`
const InfoContainer = styled.div`
padding:50px;
flex:1;
`
const Title = styled.h1`
font-size:70px;

`
const Desc = styled.div`
margin: 50px 0px;
font-size:20px;
font-weight: 500;
letter-spacing: 3px;

`
const Button = styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;

`


export const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0);
    const handleClick = (direction) => {
          if(direction === "left"){
              setSlideIndex(slideIndex > 0 ? slideIndex -1 : 3);
              
          }
          else {
            setSlideIndex(slideIndex <3 ? slideIndex + 1 : 0);
          }
    }
    return (
        <Container>
            
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                  <BsFillArrowLeftSquareFill style={{color: 'white'}} />
             </Arrow>
             <Wrapper slideIndex={slideIndex} >
                 {sliderItems.map((item)=>
                 (
                 <Slide bg={item.bg} key={item.id}>
                 <ImgContainer>
                      <Image src={item.img} />
                 </ImgContainer>
                 <InfoContainer>
                      <Title>{item.title}</Title>
                      <Desc>{item.desc}</Desc>
                      <Button>SHOW NOW</Button>
                 </InfoContainer>
                 </Slide>
                 )
                 )}
                 
             </Wrapper>
             <Arrow direction="right" onClick={()=>handleClick("right")}>
                  <BsFillArrowRightSquareFill />
            </Arrow>
        </Container>
    )
}


export default Slider;
