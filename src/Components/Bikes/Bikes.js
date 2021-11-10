import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';

import './Bikes.css';
const Bikes = () => {
    const [bikes, setBikes] = useState([])
    useEffect(() => {
        fetch('https://damp-shore-20321.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setBikes(data));
    }, [])

    return (
        <div id="Bikes">
            <h2 className="text-success mt-8">Bikes</h2>
            <div className="Bike-container">
                {
                    bikes.map(bike => <Bike
                        key={bike.id}
                        bike={bike}
                    ></Bike>)
                }
            </div>
        </div>
    );
};

export default Bikes;