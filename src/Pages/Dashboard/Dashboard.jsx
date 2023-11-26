import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1 className='text-4xl text-center font-bold pt-32'>Admin Dashboard</h1>
            <div className="drawer drawer-open -mt-16 ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
            
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <Link><li><a>All Users</a></li></Link>
                <Link to='/admin/allarticles'><li><a>All Articles</a></li></Link>
                <Link to='/admin/addpublisher'><li><a>Add Publisher</a></li></Link>
                
                </ul>
            
            </div>
            </div>
        </div>
    );
};

export default Dashboard;