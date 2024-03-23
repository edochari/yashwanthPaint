import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { db } from "../../Firebase/firebaseInit";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";

const initialState={
    Products:[],
    status:'idle',
}

export const getAsyncThunkData=createAsyncThunk("Products/getProducts",async (arg,thunkAPI)=>{
      let docRef=collection(db,"Paints");
        const snapShot= await getDocs(docRef);
        
        const docs=snapShot.docs.map((doc)=>({...doc.data(),id:doc.id}));
        console.log("docs",docs);
       return docs;
        
        
        
})


const ProductSlice=createSlice({
    name:"Products",
    initialState:initialState,
   
    extraReducers: (builder) => {
      builder
        .addCase(getAsyncThunkData.pending, (state) => {
          console.log("loading");
          state.status = 'loading';
        })
        .addCase(getAsyncThunkData.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.Products = action.payload;
          console.log("state",state.Products);
        })
       
    },
})

export const productsReducer=ProductSlice.reducer;
export const actions=ProductSlice.actions;