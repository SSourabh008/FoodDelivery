import { createContext, useEffect } from "react";
import { food_list } from "../assets/assets";
import { useState } from "react";
export const StoreContext=createContext(null);

const StoreContextProvider=(prop)=>{
    const[cartItems,setCartItems]=useState({});
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
    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }
    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])
    return(
        <StoreContext.Provider value={contextValue}>
            {prop.children}
        </StoreContext.Provider>
    );
}
export default StoreContextProvider;