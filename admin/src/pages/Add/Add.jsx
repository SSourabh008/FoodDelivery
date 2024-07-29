import React, { useState } from 'react'
import "./Add.css";
import {assets, url} from "../../assets/assets"
import axios from 'axios';
import { toast } from 'react-toastify';
const Add = () => {
      const[image,setImage]=useState(false);
      const[data,setData]=useState({
            name:"",
            description:"",
            price:"",
            category:"Salad"
      })
      const onChangHandler=(e)=>{
            const name=e.target.name;
            const value=e.target.value;
            setData(data=>({...data,[name]:value}));
      }
     const handleSubmit=async (e)=>{
            e.preventDefault();
            const formData=new FormData();
            formData.append("name",data.name);
            formData.append("description",data.description);
            formData.append("price",Number(data.price));
            formData.append("category",data.category);
            formData.append("image",image);
            const url='http://localhost:5000';
            const response =await axios.post(`${url}/api/food/add`,formData);
            if (response.data.success) {
                  console.log("In the sucess block")
                  setData({
                        name:"",
                        description:"",   
                        price:"",
                        category:"Salad"
                  });
                  setImage(false);
                  toast.success(response.data.message);
            } else {
                  toast.error(response.data.message);
            }

     }
  return (
   <div className="add">
      <form className="flex-col" onSubmit={handleSubmit}>
            <div className="flex-col add-img-upload">
                  <p>Upload Image</p>
                  <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                    <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required/>
                  </label>
            </div>
            <div className="add-product-name flex-col">
                  <p>Product Name</p>
                <input onChange={onChangHandler} value={data.name} type="text" name='name' placeholder='Type here'/>
            </div>
            <div className="add-product-description flex-col">
                  <p>Product Description</p>
                  <textarea onChange={onChangHandler} value={data.description} name="description" rows="6" placeholder='Write Here'>

                  </textarea>
            </div>
            <div className="add-category-price">
                 <div className="add-category flex-col">
                        <p>Product Category</p>
                        <select name="category" id="" onChange={onChangHandler} value={data.category}>
                              <option value="Salad">Salad</option>
                              <option value="Rolls">Rolls</option>
                              <option value="Desert">Desert</option>
                              <option value="Sandwich">Sandwich</option>
                              <option value="Cake">Cake</option>
                              <option value="Pure Veg">Pure Veg</option>
                              <option value="Pasta">Pasta</option>
                              <option value="Noodle">Noodle</option>
                        </select>
                 </div>
                 <div className="add-price flex-col">
                      <p>Add Price</p>
                      <input onChange={onChangHandler} value={data.price} type="number" name="price" id="" placeholder='$20'/>
                 </div>
            </div>
            <button type='submit' className='add-btn'>Add</button>
      </form>
   </div>
  )
}
export default Add