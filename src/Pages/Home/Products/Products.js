import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const products = useLoaderData();
    console.log(products);

    return (
        <div>
            <h1 className='text-3xl text-center font-bold mb-8'>All Products</h1>
            <div className='ml-[20px] sm:mx-[110px] lg:mx-[150px] grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map( product => <Product product={product} key={product?._id}> </Product>)
                }         
            </div>
        </div>
    );
};

export default Products;