import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddOne.css';

const AddOne = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://damp-shore-20321.herokuapp.com/bikes', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('bike added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-one">
            <h2>Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddOne;