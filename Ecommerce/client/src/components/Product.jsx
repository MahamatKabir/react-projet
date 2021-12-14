import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import  {AiOutlineSearch,AiOutlineShoppingCart}  from  "react-icons/ai";
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';


const Info = styled.div`
opacity:0;
width:90%;
height:90%;
position:absolute;
top:20px;
left:-15px;
background-color:rgba(0,0,0,0.1);
z-index:3;
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
border:1px solid #6931c2;


`

const Container = styled.div`
 flex:1;
 margin:5px;
 min-width:400px;
 height:450px;
 display:flex;
 align-items:center;
 justify-content:center;
 background-color: white;
  
 position:relative;

 &:hover ${Info}{
    opacity:1;
}
`
const Circle = styled.div`
width:200px;
height:200px;
border-radius:70%;
background-color:white;
position: absolute;
display:flex;
flex-wrap: wrap;


`
const Image = styled.img`
height:90%;
width:70%;
z-index:2;
border-radius:50%;
box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
display: flex;
justify-content: center;
padding-left: 100px;



`
const Price = styled.h1`
position:relative;
bottom:-150px;
font-size:40px;
right:200px;
display: flex;
align-items: center;
text-align: center;
z-index:100;
font-weight:bold;


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
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`}>
                    <SearchOutlined/>
                    </Link>
                </Icon>
                <Icon> 
                <FavoriteBorderOutlined/>
                </Icon>
                
            </Info>
            <Price>{item.price}TL</Price>
            
        </Container>
    )
}

export default Product;
