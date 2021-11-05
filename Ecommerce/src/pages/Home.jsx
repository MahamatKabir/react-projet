import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Productpopular from '../components/Productpopular';
import Footer from '../components/Footer';

 const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Productpopular />
            <Footer/>
        </div>
    )
}

export default Home;
