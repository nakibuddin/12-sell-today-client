import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const AllSellers = () => {
    // const [sellers, setSellers] = useState([]);
    let i=1;

    // useEffect(() => {
    //     fetch('http://localhost:5000/users/seller')
    //     .then(res => res.json())
    //     .then(data => setSellers(data))
    //     .catch(err => console.log('my_fetch_error: ', err));
    // },[])

    const {data: sellers = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users/seller');
            const data = await res.json();
            return data;
        }
    });

    const handleDelete = id => {
        
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {/* rows */}
                {
                    sellers.map(seller =>
                    <tr key={seller._id}>
                        <th>{i++}</th>
                        <td>{seller?.name}</td>
                        <td>{seller?.email}</td>
                        <td>{seller?.role}</td>
                        <td> <button onClick={() => handleDelete(seller?._id)} className='text-red-600 font-bold'> Delete </button> </td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default AllSellers;