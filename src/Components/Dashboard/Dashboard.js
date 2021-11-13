import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'
const Dashboard = () => {
    return (
        <div className="dashboard">
         
       <Link to="/pay">My payment</Link> <br/>
       <Link to="/myorder">My Orders</Link> <br/>
       <Link to="/reviews">Reviews</Link>
       </div>
    );
};

export default Dashboard;