import { createSlice } from "@reduxjs/toolkit"

const initialState={
    cartItems:[],
    totalPrice:0
}


export const CartSlice=createSlice({
    name:"Cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
             state.cartItems.push(action.payload);
             state.totalPrice=state.totalPrice+action.payload.Price;
        },
        removeFromCart:(state,action)=>{
           
            state.cartItems=state.cartItems.map((item)=>{
                if(item.id===action.payload)
                {
                    state.totalPrice-=item.Price;
                }
                return item.id!==action.payload});
            
             
        }
    }
});

export const CartReducer=CartSlice.reducer;
export const CartActions=CartSlice.actions;

