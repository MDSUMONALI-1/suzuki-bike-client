import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Feedback.css';

const Feedback = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://damp-shore-20321.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('bike added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-one">
            <h2>Please give a Feedback</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("review")} placeholder="review" />
                
                <input type="submit" />
            </form>
        </div>
    );
};

export default Feedback;