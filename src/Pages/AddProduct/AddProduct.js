import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {

    const handleAddProduct = event => {
        event.preventDefault();        
        const name = event.target.name.value;
        const image = event.target.image.value;
        const categoryName = event.target.categoryName.value;        
        const condition = event.target.condition.value;        
        const purchaseYear = event.target.purchaseYear.value;        
        const purchasePrice = event.target.purchasePrice.value;        
        const sellingPrice = event.target.sellingPrice.value;        
        const description = event.target.description.value;        
        const mobile = event.target.mobile.value;        
        const location = event.target.location.value;
        let categoryId = 1;

        
        if(categoryName === 'Toyota'){
            categoryId = 1;
        }
        else if(categoryName === 'Suzuki'){
            categoryId = 3;
        }
        else if(categoryName === 'Tata'){
            categoryId = 2;
        }
        

        const product = {name, image, categoryName, categoryId, condition, purchaseYear,
            purchasePrice, sellingPrice, description, mobile, location};
        // console.log(product);

        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(product),
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged === true){
                toast.success('Product added successfully!', {
                    position: toast.POSITION.TOP_CENTER });
            }
        })
        .catch(err => console.error('my_fetch_error: ', err));
        
    }

    return (
        <section className="p-6  text-gray-100">
            <form onSubmit={handleAddProduct} noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow  bg-gray-900 ng-untouched ng-pristine ng-valid">
                <h2 className="text-center w-full text-3xl font-bold leading-tight">Add a product</h2>

                <div>
                    <label htmlFor="name" className="block mb-1 ml-1">Product name</label>
                    <input id="name" type="text" placeholder="Product name" required className="border border-gray-700 block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400  bg-gray-800" />
                    {/* <input type="image" src="" alt="" /> */}
                </div>

                <div>
                    <label htmlFor="image" className="block mb-1 ml-1">Product image URL</label>
                    <input id="image" type="" placeholder="Product image" required className="border border-gray-700 block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400  bg-gray-800" />
                </div>

                <div>
                    <label htmlFor="categoryName" className="block mb-1 ml-1">Category</label>
                    <select id="categoryName" name="role" className="border border-gray-700 block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400  bg-gray-800">
                        <option value="Toyota">Toyota</option>
                        <option value="Tata">Tata</option>
                        <option value="Suzuki">Suzuki</option>
                    </select>   
                </div>

                <div>
                    <label htmlFor="condition" className="block mb-1 ml-1">Condition</label>
                    <select id="condition" name="role" className="border border-gray-700 block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400  bg-gray-800">
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                    </select>   
                </div>

                <div>
                    <label htmlFor="purchaseYear" className="block mb-1 ml-1">Year of purchase</label>
                    <input id="purchaseYear" type="date" placeholder="Year of purchase" required className="border border-gray-700 block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400  bg-gray-800" />
                </div>

                <div>
                    <label htmlFor="purchasePrice" className="block mb-1 ml-1">Purchase price</label>
                    <input id="purchasePrice" type="number" placeholder="Purchase price" required className="border border-gray-700 block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400  bg-gray-800" />
                </div>

                <div>
                    <label htmlFor="sellingPrice" className="block mb-1 ml-1">Selling price</label>
                    <input id="sellingPrice" type="number" placeholder="Selling price" required className="border border-gray-700 block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400  bg-gray-800" />
                </div>            

                <div>
                    <label htmlFor="description" className="block mb-1 ml-1">Description</label>
                    <textarea id="description" type="text" placeholder="Description..." className="border border-gray-700 block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400  bg-gray-800"></textarea>
                </div>
                
                <div>
                    <label htmlFor="mobile" className="block mb-1 ml-1">Mobile number</label>
                    <input id="mobile" type="number" placeholder="Mobile number" required className="border border-gray-700 block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400  bg-gray-800" />
                </div>

                <div>
                    <label htmlFor="location" className="block mb-1 ml-1">Location</label>
                    <input id="location" type="text" placeholder="Location" required className="border border-gray-700 block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400  bg-gray-800" />
                </div>                                

                <div>
                    <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50  bg-violet-400 focus:ring-violet-400 hover:ring-violet-400  text-gray-900">Submit</button>
                </div>
            </form>
        </section>
    );
};

export default AddProduct;