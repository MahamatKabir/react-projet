import  {Search,ShoppingCartOutlined}  from  "@material-ui/icons";
import React from 'react';
import {Badge} from "@material-ui/core"; 
import styled from "styled-components";
import { red } from "@mui/material/colors";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";



const Container= styled.div`
          position:relative;
          height:80px;
          align-item:center;
          background-color: #efebf5;
          background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d9d0e8' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
             
          
          
`
const Wrapper = styled.div`
        padding: 10px 20px;
        display:flex;
        align-item:center;
        justify-content:space-between;
`
const Left= styled.div`
        positon:relative;
        top:10px;
        flex:1;
        display:flex;
        align-item:center;
`
const Logo = styled.div`
     font-size:35px;
     font-weight:bold;
     font-family: 'Henny Penny', cursive;
     align-item:center;
`
const Span = styled.span`
     font-weight:bold;
     color:red;
     `    
const Center= styled.div`
text-align:center;
flex:1;
align-item:center;
`
const Right= styled.div`
position:relative;
top:10px;
font-size:20px;
flex:1;
display:flex;
align-item:center;
justify-content:flex-end;
color:black;
font-weight:bold;
`
const MenuItem = styled.div`
    fontsize:14px;
    cursor: pointer;
    margin-left:20px;
`
const Languages = styled.div`
  font-size:14;
  cursor : pointer;
`
const SearchContainer = styled.div`
  border: 10px double black;
  display:flex;
  align-item:center;
  margin-left:20px;
  padding:7px;
  height:20px;
`
const Input = styled.input`
   border:none;
`

const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Languages>En</Languages>
                    <SearchContainer>
                        <Input />
                        <Search style={{color:"red", fontsize: 10}}/>  
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo >BEST-<Span>SHOP</Span></Logo>
                </Center>
                <Right>
                    <Link to={"/login"} >
                    <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link to={"/register"} >
                    <MenuItem>SIGN IN</MenuItem>
                    </Link>
                    <Link to={"/cart"}>
                    <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                    </MenuItem>
                    </Link>
                </Right>
            </Wrapper> 
        </Container>
    )
}

export default Navbar;