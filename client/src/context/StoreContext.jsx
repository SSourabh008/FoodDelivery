import { createContext } from "react";
import { food_list } from "../assets/assets";

export const StoreContext=createContext(null);

const StoreContextProvider=(prop)=>{
    const contextValue={
        food_list
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {prop.children}
        </StoreContext.Provider>
    );
}
export default StoreContextProvider;