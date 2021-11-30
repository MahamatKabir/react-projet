import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import  {AiOutlineSearch,AiOutlineShoppingCart}  from  "react-icons/ai";
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';


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
 height:450px;
 display:flex;
 align-items:center;
 justify-content:center;
 background-color: #efebf5;
 background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d9d0e8' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    
 position:relative;

 &:hover ${Info}{
    opacity:1;
}
`
const Circle = styled.div`
width:200px;
height:200px;
border-radius:50%;
background-color:white;
position: absolute;

`
const Image = styled.img`
height:60%;
width:60%;
z-index:2;
display: flex;
justify-content: center;


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
