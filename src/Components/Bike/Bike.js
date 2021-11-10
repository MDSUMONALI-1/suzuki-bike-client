import React from 'react';
import './Bike.css';
import { Link } from 'react-router-dom';

const Bike = ({ bike }) => {
    // const {Bike} = props;
    const {_id, name,description, img } = bike;
    return (
        <div className="Bike pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p className="px-5">{description}</p>
            <Link to={`/placeorder/${_id}`}>
               <button className="btn btn-danger">Book {name}</button>
            </Link>
        </div>
    );
};

export default Bike;