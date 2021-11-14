import React , { useState ,useEffect}from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Purchase = () => {
    const {bikeId } = useParams();
//     const[bike ,setBike] =useState({})
// useEffect(() => {
//     fetch(`https://damp-shore-20321.herokuapp.com/bikes/${bikeId}`)
// .then(res => res.json())
// .then(data => setBike(data))
// },[])
    
    const { user } = useAuth();
    return (
        <div>
           <h2> booking id: {bikeId}</h2>

            <h3>by email:{user?.email}</h3>
            <h3>by name:{user?.displayName}</h3>
            <Link to="/myorder"><Button>PlaceOrder</Button></Link>
        </div>
    );
};

export default Purchase;