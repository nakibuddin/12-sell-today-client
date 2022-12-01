import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const AllBuyers = () => {
    let i=1;

    const {data: buyers = [], refetch} = useQuery({
        queryKey: ['buyers'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users/buyer');
            const data = await res.json();
            return data;
        }
    });

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
                    buyers.map(buyer =>
                    <tr key={buyer._id}>
                        <th>{i++}</th>
                        <td>{buyer?.name}</td>
                        <td>{buyer?.email}</td>
                        <td>{buyer?.role}</td>
                        <td className='text-red-600 font-bold'>Delete</td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default AllBuyers;