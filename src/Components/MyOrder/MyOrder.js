import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyOrder = () => {
    return (
        <div>
            <h2>Your Order List:</h2>
            <Link to="/pay"><Button>Pay</Button></Link>
        </div>
    );
};

export default MyOrder;