import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const AdvertisedProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://12-sell-today-server.vercel.app/advertise')
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.error('my_fetch_error: ', err));
    },[])

    return (
        <div>
            <h1 className='text-3xl text-center font-bold mt-20 mb-6'>Advertised Products</h1>
            <div className='ml-[20px] sm:mx-[110px] lg:mx-[220px] grid  grid-cols-1 sm:grid-cols-2 gap-4'>
                {
                    products.map( product => <Product product={product} key={product?._id}> </Product>)
                }         
            </div>
        </div>
    );
};

export default AdvertisedProducts;