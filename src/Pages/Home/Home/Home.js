import React from 'react';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import Categories from '../Categories/Categories';
import Reviews from '../Reviews/Reviews';
import Banner from './../Banner/Banner';
import useTitle from './../../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <AdvertisedProducts></AdvertisedProducts>
            {/* <Reviews></Reviews> */}
        </div>
    );
};

export default Home;