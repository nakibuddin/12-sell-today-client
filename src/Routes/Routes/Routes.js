import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from '../../Layout/Main'
import AddProduct from "../../Pages/AddProduct/AddProduct";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Home/Products/Products";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";
import Register from "../../Pages/Register/Register";
import Login from './../../Pages/Login/Login';
import Dashboard from './../../Pages/Dashboard/Dashboard/Dashboard';
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import PrivateRoute from './../PrivateRoute/PrivateRoute';
import MyProducts from './../../Pages/Dashboard/MyProducts/MyProducts';
import ReportedItems from './../../Pages/Dashboard/ReportedItems/ReportedItems';
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import Contact from "../../Pages/Contact/Contact";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";



import React from 'react';

const Routes = () => {
    const {user} = useContext(AuthContext);  
    const email = user?.email;
    
    return (
        <div>
            
        </div>
    );
};

export default Routes;

export const my_router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {path: '/', element: <Home></Home>},
            {path: '/home', element: <Home></Home>},
            {path: '/login', element: <Login></Login>},
            {path: '/register', element: <Register></Register>},
            {path: '/contact', element: <Contact></Contact>},
            {path: '/blog', element: <Blog></Blog>},
            {
                path: '/categories/:id', 
                loader: async ({params}) => await fetch(`http://localhost:5000/categories/${params.id}`),
                element: <PrivateRoute><Products></Products></PrivateRoute>
            },            
            {path: '*', element: <PageNotFound></PageNotFound>}
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {path:'/dashboard', element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>},
            {path:'/dashboard/all-sellers', element: <PrivateRoute> <AllSellers></AllSellers> </PrivateRoute>},
            {path:'/dashboard/all-buyers', element: <PrivateRoute> <AllBuyers></AllBuyers> </PrivateRoute>},
            {path:'/dashboard/reported-items', element: <PrivateRoute> <ReportedItems></ReportedItems> </PrivateRoute>},

            {path:'/dashboard/my-products', element:  <MyProducts></MyProducts>},
            {path: '/dashboard/add-product', element: <PrivateRoute> <AddProduct></AddProduct> </PrivateRoute>},

            {path: '/dashboard/my-orders', element: <PrivateRoute> <MyOrders></MyOrders> </PrivateRoute> },
        ]
    }
])