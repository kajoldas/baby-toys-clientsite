import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
      console.log(data)
        axios.post('http://localhost:5000/products', data )
        .then(res => {
            console.log(res)
            if(res.data.insertedId){
                alert('Product Added Successfully')
                reset();
            }
        })
    };
    return (
        <div className="product">
            <h1>Add Product </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Title" />
                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("price")} placeholder="price"  />
                <input {...register("img")} placeholder="Image URL" />
                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;