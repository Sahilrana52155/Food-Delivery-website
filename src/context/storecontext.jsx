import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext=createContext(null)
const StoreContextProvider=(props)=>{
    const[carditems,setcarditems]=useState({});
    const addToCart=(itemId)=>{
        if(!carditems[itemId]){
            setcarditems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setcarditems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCart=(itemId)=>{
        setcarditems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount=()=>{
        let totalAmount=0;
for(const item in carditems)
{
    if(carditems[item]>0)
    {
    let itemInfo=food_list.find((product)=>product._id===item);
    totalAmount+=itemInfo.price*carditems[item];
    }
}
return totalAmount;
    }

const contextValue={
    food_list,
    carditems,
    setcarditems,
    addToCart,
    removeFromCart,
   getTotalCartAmount

}
return(
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
)
}
export default StoreContextProvider;