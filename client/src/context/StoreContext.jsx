import { createContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
export const StoreContext=createContext(null);

const StoreContextProvider=(prop)=>{
    const[cartItems,setCartItems]=useState({});
    const url="http://localhost:5000";
    const[food_list,setFoodList]=useState([]);
    const [token,setToken]=useState("");
    const addToCart=(itemid)=>{
            if(!cartItems[itemid]){
                setCartItems((prev)=>({...prev,[itemid]:1}))
            }
            else{
                setCartItems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
            }
    }
    const removeFromCart=(itemid)=>{
        setCartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=food_list.find((product)=>product._id===item);
               totalAmount+=itemInfo.price * cartItems[item]; 
            }
        }
        return totalAmount;
   }
   const fetchFood=async()=>{
    const response=await axios.get(url+"/api/food/list");
    setFoodList(response.data.data);
    
   }
   useEffect(() => {
        
        async function loadData(){
            await fetchFood();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
            }
        }
        loadData();
   }, [])
    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
   
    return(
        <StoreContext.Provider value={contextValue}>
            {prop.children}
        </StoreContext.Provider>
    );
}
export default StoreContextProvider;