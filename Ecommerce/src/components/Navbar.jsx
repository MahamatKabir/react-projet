import  {AiOutlineSearch,AiOutlineShoppingCart}  from  "react-icons/ai";
import React from 'react';
import Badge from '@mui/material';
import styled from "styled-components";
import { red } from "@mui/material/colors";


const Container= styled.div`
          height:50px;
          align-item:center;
          
          
`
const Wrapper = styled.div`
        padding: 10px 20px;
        display:flex;
        align-item:center;
        justify-content:space-between;
`
const Left= styled.div`
        flex:1;
        display:flex;
        align-item:center;
`
const Logo = styled.div`
     font-weight:bold;
     
     align-item:center;
`
const Center= styled.div`
text-align:center;
flex:1;
align-item:center;
`
const Right= styled.div`
flex:1;
display:flex;
align-item:center;
justify-content:flex-end;
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
  border: 0.5px solid lightgray;
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
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Languages>En</Languages>
                    <SearchContainer>
                        <Input />
                        <AiOutlineSearch style={{color:"red", fontsize: 10}}/>  
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo >TCHAD-SHOP</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                    <AiOutlineShoppingCart />
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;