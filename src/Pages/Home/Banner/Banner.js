import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();

    const goToProducts = () => {
        navigate('/categories/1')
    }

    return (
        <h2>This is banner</h2>
    );
};

export default Banner;