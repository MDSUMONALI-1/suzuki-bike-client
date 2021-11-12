import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const {_id, name,description, price,img } = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>price:{price}tk</h5>
            <p className="px-5">{description}</p>
            <Link to={`/purchase/${_id}`}>
                <button className="btn btn-danger">Book {name}</button>
            </Link>
        </div>
    );
};

export default Service;