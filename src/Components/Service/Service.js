import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const {_id, name,description, img } = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p className="px-5">{description}</p>
            <Link to={`/placeorder/${_id}`}>
                <button className="btn btn-danger">Book {name}</button>
            </Link>
        </div>
    );
};

export default Service;