import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Products from '../Products/Products';
import TopBanner from './../TopBanner/TopBanner';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <TopBanner></TopBanner>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;