import React from 'react';
import { Link } from 'react-router-dom';

const PlaceOrder = () => {
    return (
        <div>
            <h2>Your Order is placed</h2>
           <Link to="/pay">Please payment your money</Link>
        </div>
    );
};

export default PlaceOrder;