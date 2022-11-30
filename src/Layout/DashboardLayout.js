import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashBoardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mx-5">
                        <Outlet></Outlet>
                    {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                </div> 

                <div className="drawer-side border border-black">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    
                        <li><Link to='/dashboard/all-sellers'>All Sellers</Link></li>
                        <li><Link to='/dashboard/all-buyers'>All Buyers</Link></li>
                    </ul>
                
                </div>
            </div>

        </div>
    );
};

export default DashBoardLayout;