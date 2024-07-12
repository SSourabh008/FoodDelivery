import React from 'react'
import "./Add.css";
import {assets} from "../../assets/assets"
const Add = () => {
  return (
   <div className="add">
      <form className="flex-col">
            <div className="flex-col add-img-upload">
                  <p>Upload Image</p>
                  <label htmlFor="image">
                    <img src={assets.upload_area} alt="" />
                    <input type="file" id='image' hidden required/>
                  </label>
            </div>
            <div className="add-product-name flex-col">
                  <p>Product Name</p>
                <input type="text" name='name' placeholder='Type here'/>
            </div>
            <div className="add-product-description flex-col">
                  <p>Product Description</p>
                  <textarea name="decription" rows="6" placeholder='Write Here'></textarea>
            </div>
            <div className="add-category-price">
                 <div className="add-category flex-col">
                        <p>Product Category</p>
                        <select name="category" id="">
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
                      <input type="number" name="price" id="" placeholder='$20'/>
                 </div>
            </div>
            <button type='submit' className='add-btn'>Add</button>
      </form>
   </div>
  )
}

export default Add