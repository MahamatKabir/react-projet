import React from 'react';
import styled from 'styled-components';
import  {AiOutlineSearch,AiOutlineShoppingCart}  from  "react-icons/ai";


const Info = styled.div`
opacity:0;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.2);
z-index:3;
display:flex;
align-items:center;
justify-content:center;

`

const Container = styled.div`
 flex:1;
 margin:5px;
 min-width:400px;
 height:350px;
 display:flex;
 align-items:center;
 justify-content:center;
 background-color:#f5fbfd;
 position:relative;

 &:hover ${Info}{
    opacity:1;
}
`
const Circle = styled.div`
width:200px;
height:200px;
border-radius:50%;
background-color:red;
position: absolute;

`
const Image = styled.img`
height:50%;
z-index:2;

`

const Icon = styled.div`
width:30px;
height:30px;
border-radius:50%;
background-color:white;
display:flex;
align-item:center;
justify-content:center;
margin:20px;
transition: all 0.5s ease;
cursor: pointer;
&:hover {
    background-color:#e9f5f5;
    transform:scale(1.1);
}

`

 const Product = ({item}) => {
    return (
        <Container>
            <Circle/>
            <Image src={item.img} />
            <Info>
                <Icon>
                    <AiOutlineSearch/>
                </Icon>
                <Icon>
                    <AiOutlineShoppingCart/>
                </Icon>
                <Icon>
                <AiOutlineShoppingCart/>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product;
