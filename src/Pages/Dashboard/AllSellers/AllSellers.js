import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../../hooks/useTitle';

const AllSellers = () => {
    useTitle('All Seller');
    let i=1;

    const {data: sellers = [], refetch} = useQuery({
        queryKey: ['sellers'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users/seller');
            const data = await res.json();
            return data;
        }
    });

    const handleDelete = id => {
        const agree = window.confirm(`Are you sure you want to delete this seller ?`);
        if(agree){
            fetch(`http://localhost:5000/users/${id}`, {
                method: 'delete',
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount === 1){                                        
                    toast('Seller deleted successfully.', {position: toast.POSITION.TOP_CENTER});                                         
                    refetch();                                      
                }
            })
            .catch(error =>  console.error('my_fetch_delete_error: ', error) );
        }
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
                    <th>Status</th>
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
                        <td> <button className='text-red-600 font-bold'> Unverified </button> </td>
                        <td> <button onClick={() => handleDelete(seller?._id)} className='text-red-600 font-bold'> Delete </button> </td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default AllSellers;