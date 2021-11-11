import React from 'react';
import { useParams } from 'react-router';
import useFirebase from '../../hooks/useFirebase';

const Purchase = () => {
    const {bikeId } = useParams();
    const { user } = useFirebase();
    return (
        <div>
           <h2> booking id: {bikeId}</h2>
            <h3>by:{user?.email}</h3>
        </div>
    );
};

export default Purchase;