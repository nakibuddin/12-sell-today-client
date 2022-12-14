import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import './DashboardLayout.css';

const DashBoardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mx-5 lg:mr-16 pb-10 sidebar_border ">
                        <Outlet></Outlet>
                    {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                </div> 

                <div className="drawer-side lg:ml-16 sidebar_border">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-60 bg-base-100 text-base-content">
                    
                        <li><NavLink to='/dashboard/all-sellers'>All Sellers</NavLink></li>
                        <li><NavLink to='/dashboard/all-buyers'>All Buyers</NavLink></li>
                        <li><NavLink to='/dashboard/reported-items'>Reported Items</NavLink></li>
                        <li><NavLink to='/dashboard/my-products'>My Products</NavLink></li>
                        <li><NavLink to='/dashboard/add-product'>Add a Product</NavLink></li>
                        <li><NavLink to='/dashboard/my-orders'>My Orders</NavLink></li>
                    </ul>
                
                </div>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default DashBoardLayout;