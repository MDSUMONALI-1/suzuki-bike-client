import React from 'react';
import axios from 'axios';

import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
// import { clearTheCart, getStoredCart } from '../../utilities/fakedb';

const MyOrder = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        // const savedCart = getStoredCart();
        // data.order = savedCart;
        axios.post('https://damp-shore-20321.herokuapp.com/orders', data)
        .then(res => {
            if (res.data.insertedId) {
                alert('order process successfully');
                reset();
            }
        })
        
    };
    return (
        <div>
        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

            <input defaultValue={user.displayName} {...register("name")} />

            <input defaultValue={user.email} {...register("email", { required: true })} />
            {errors.email && <span className="error">This field is required</span>}
            <input placeholder="Address" defaultValue="" {...register("address")} />
            <input placeholder="City" defaultValue="" {...register("city")} />
            <input placeholder="phone number" defaultValue="" {...register("phone")} />

            <input type="submit" />
        </form>
    </div>
    );
};

export default MyOrder;