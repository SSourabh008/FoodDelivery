import React, { useState } from 'react'
import "./List.css"
import axios from 'axios';

const List = () => {
  const[list,setList]=useState([]);
  const fetchList=async()=>{
    const response=await axios.get("http://localhost:5000/api/food/list");

  }
  return (
    <div>List</div>
  )
}

export default List