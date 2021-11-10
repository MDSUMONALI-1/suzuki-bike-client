import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../Images/404.jpg';
const NotFound = () => {
    return (
        <div>
             <img style={{ width: '100%' }} src={error} alt="the page is not Available" />
            <Link to="/"><button>Return Home</button>
            </Link>
        </div>
    );
};

export default NotFound;