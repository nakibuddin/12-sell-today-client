import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(err => console.error('my_fetch_error: ', err));
    },[])

    const showAll = (id) => {
        navigate(`/categories/${id}`)        
    }

    return (
        <div>
            <h1 className='text-3xl text-center font-bold mb-8'>Product Categories</h1>
            <div className='ml-[20px] sm:mx-[110px] lg:mx-[150px] grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    categories.map( category => <div key={category?._id}>

                        <div className="border border-gray-300 max-w-xs rounded-md shadow-md  bg-gray-900  text-gray-100">
                            <img src={category?.url} alt="" className="object-cover object-center w-full rounded-t-md h-60  bg-white" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-center text-3xl font-semibold tracking-wide">{category.categoryName}</h2>
                                    <p className="text-center text-gray-100">{category?.description}</p>
                                </div>
                                <button onClick={() => showAll(category.categoryId)} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  bg-violet-400  text-gray-900">Show all</button>
                            </div>
                        </div>   
                        
                    </div>)
                }         
            </div>
        </div>
    );
};

export default Categories;