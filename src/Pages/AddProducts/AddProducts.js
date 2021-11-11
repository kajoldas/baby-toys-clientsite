import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddProducts.css'

const AddProducts = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        console.log(data)
        axios.post('http://localhost:5000/products', data )
        .then(res => {
            console.log(res)
            if(res.data.insertedId){
                alert('New Places Added Successfully')
                // reset();
            }
        })
    };












    return (
        <div className="products">
            <h2>Add a Products</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Name" />
                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("price")} placeholder="price"  />
                <input {...register("img")} placeholder="Image URL" />
                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;