
import React from 'react';
import { BsFacebook, BsMailbox2, BsMap, BsPhone, BsTwitter, BsYoutube } from 'react-icons/bs';
import styled from 'styled-components';

const Container = styled.div`
display:flex;

`;
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`;
const Logo = styled.h1`

`;
const Desc = styled.p`
flex:1
`;
const SocialContainer = styled.div`
display:flex;
`;
const SocialIcon = styled.div`
width:40px;
height:40px;
border-raduis:50%;
color:white;
background-color: #${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;

`;
const Center = styled.div`
flex:1;
padding:20px;
`;
const Title = styled.h3`
margin-bottom:30px;
`
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width:50%;
margin-bottom:20px;

`
const Right = styled.div`
flex:1;
padding:20px;
`;

const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`;

const Payment = styled.div`
width:50%;
`;

 const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>TCHAD.SHOP</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae quidem est debitis,
                     eveniet, iure minus sunt nostrum perferendis consectetur, 
                    officiis fugit. Quisquam quis sequi, nisi sint perspiciatis odio molestias eos.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3b5999">
                        <BsFacebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <BsYoutube/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <BsTwitter/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>
                    Useful Links
                </Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Home</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <BsMap style={{marginRight:"10px"}}/>   Bilecik merkez fidan pansiyon apart
                </ContactItem>
                <ContactItem>
                    <BsPhone style={{marginRight:"10px"}}/>  +90 543 304 41 64
                </ContactItem>
                <ContactItem>
                    <BsMailbox2 style={{marginRight:"10px"}}/>  mahamatkabir1@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer;
