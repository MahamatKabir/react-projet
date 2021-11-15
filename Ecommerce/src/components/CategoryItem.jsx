import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container = styled.div`
flex:1;
margin: 3px;
height:80vh;
position: relative;


`
const Image = styled.img`
width:90%;
height:90%;
border-radius:10%;
object-fit:cover;


`
const Info = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
flex-direction: column;
display:flex;
align-items:center;
justify-content:center;


`
const Title = styled.h1`
color:white;
margin-bottom:20px;
letter-spacing:5px;
`
const Button = styled.button`
border:none;
padding:10px;
background-color:#6931c2;
color:white;
font-weight:border;
width:200px;
height:50px;
font-size:20px;
border-radius:5%;

cursor:pointer;
transition:  all 0.5s ease;

&:hover{
    transform:scale(1);
}

`

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Link to={`/products/${item.cat}`}>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
            </Link>
            
        </Container>
    )
}

export default CategoryItem;
