import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllBuyers = () => {
    let i=1;

    const {data: buyers = [], refetch} = useQuery({
        queryKey: ['buyers'],
        queryFn: async() =>{
            const res = await fetch('https://12-sell-today-server.vercel.app/users/buyer');
            const data = await res.json();
            return data;
        }
    });
    const handleDelete = id => {
        const agree = window.confirm(`Are you sure you want to delete this Buyer ?`);
        if(agree){
            fetch(`https://12-sell-today-server.vercel.app/users/${id}`, {
                method: 'delete',
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount === 1){                                        
                    toast('Buyer deleted successfully.', {position: toast.POSITION.TOP_CENTER});                                         
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
                        <td> <button onClick={() => handleDelete(buyer?._id)} className='text-red-600 font-bold'> Delete </button> </td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default AllBuyers;