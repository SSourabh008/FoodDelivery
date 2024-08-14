import { createContext, useEffect } from "react";
import { food_list } from "../assets/assets";
import { useState } from "react";
export const StoreContext=createContext(null);

const StoreContextProvider=(prop)=>{
    const[cartItems,setCartItems]=useState({});
    const url="http://localhost:5000";
    const [token,setToken]=useState("");
    useEffect(() => {
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
        }
    }, [input])
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