import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import styled from "styled-components";
import NavbarSecond from '../components/NavbarSecond';

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
  text-align: center;
  font-weight:bold;
  color:black;

`;

 const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <NavbarSecond/>
            <Slider />
            <Title>ÜRÜN KATEGORİLERİ</Title>
            <Categories />
            <Title>SİZİN İÇİN SEÇTİKLERİMİZ</Title>
            <Products />
            <Newsletter />
            <Footer/>
        </div>
    )
}

export default Home;
