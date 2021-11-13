import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Purchase = () => {
    const {bikeId } = useParams();
    const { user } = useAuth();
    return (
        <div>
           <h2> booking id: {bikeId}</h2>
            <h3>by email:{user?.email}</h3>
            <h3>by name:{user?.displayName}</h3>
        </div>
    );
};

export default Purchase;