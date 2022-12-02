import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
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
                    
                        <li><NavLink to='/dashboard/all-sellers'>All sellers</NavLink></li>
                        <li><NavLink to='/dashboard/all-buyers'>All buyers</NavLink></li>
                        <li><NavLink to='/dashboard/reported-items'>Reported items</NavLink></li>
                        <li><NavLink to='/dashboard/my-products'>My products</NavLink></li>
                        <li><NavLink to='/dashboard/add-product'>Add a product</NavLink></li>
                        <li><NavLink to='/dashboard/my-orders'>My orders</NavLink></li>
                    </ul>
                
                </div>
            </div>

        </div>
    );
};

export default DashBoardLayout;