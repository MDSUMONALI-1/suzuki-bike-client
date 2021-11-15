import React,{ useState,useEffect} from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './purchase.css';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Purchase = () => {
    const {bikeId } = useParams();
    const { user } = useAuth();
    const[bike ,setBike] =useState({})
useEffect(() => {
    fetch(`https://damp-shore-20321.herokuapp.com/bikes/${bikeId}`)
.then(res => res.json())
.then(data => setBike(data))
},[])
    
   


    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://damp-shore-20321.herokuapp.com/customers', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('details added successfully');
                    reset();
                }
            })
    }
    return (
        <div>
           <div className="bike">
           <h2> product id: {bikeId}</h2>
           <h3>name: {bike.name}</h3>
<h5>price:{bike.price}</h5>
<img src={bike.img} alt="" />
           
          
           <p className="px-5">description:{bike.description}</p>
           </div>
            <h3>by email:{user?.email}</h3>
            <h3>by name:{user?.displayName}</h3>
            <h2>customer details</h2>
           <div className="add-one">
           <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />
                <textarea {...register("address")} placeholder="address" />
                <input type="number" {...register("phone")} placeholder="phone" />
               
                <input type="submit" />
            </form>
           </div>
            <Link to="/myorder"><Button>PlaceOrder</Button></Link>
        </div>
    );
};

export default Purchase;