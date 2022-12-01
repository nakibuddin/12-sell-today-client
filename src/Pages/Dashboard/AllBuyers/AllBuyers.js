import React, { useEffect, useState } from 'react';

const AllBuyers = () => {
    const [buyers, setBuyers] = useState([]);
    let i=1;
    
    useEffect(() => {
        fetch('http://localhost:5000/users/buyer')
        .then(res => res.json())
        .then(data => setBuyers(data))
        .catch(err => console.log('my_fetch_error: ', err));
    },[])

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