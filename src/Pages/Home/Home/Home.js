import React from 'react';
import Categories from '../Categories/Categories';
import Reviews from '../Reviews/Reviews';
import Banner from './../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;