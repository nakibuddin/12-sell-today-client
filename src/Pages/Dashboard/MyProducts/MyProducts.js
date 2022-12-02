import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useTitle from '../../../hooks/useTitle';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext);  
    const email = user?.email;
    useTitle('My Products');
    let i=1;

    const {data: products = [], refetch} = useQuery({
        queryKey: ['products'],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/products/${email}`);
            const data = await res.json();
            return data;
        }
    });

    const handleDelete = id => {
        const agree = window.confirm(`Are you sure you want to delete this product ?`);
        if(agree){
            fetch(`http://localhost:5000/users/${id}`, {
                method: 'delete',
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount === 1){                                        
                    toast('product deleted successfully.', {position: toast.POSITION.TOP_CENTER});                                         
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
                    <th>Product</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Advertise</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {/* rows */}
                {
                    products.map(product =>
                    <tr key={product._id}>
                        <th>{i++}</th>
                        <td>{product?.name}</td>
                        <td>{product?.categoryName}</td>
                        <td>{product?.sellingPrice}</td>
                        <td>{product?.status}</td>
                        <td> <button className='text-green-600 font-bold'> Advertise </button> </td>
                        <td> <button onClick={() => handleDelete(product?._id)} className='text-red-600 font-bold'> Delete </button> </td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default MyProducts;