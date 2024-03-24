import NavBar from "../Components/NavBar";
import MainPage from "./MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsSeperation from "./ProductPage";
import MainPageItems from "../Components/MainPageItems";
import LoginPage from "../Pages/LoginPage";
import SignUp from "../Pages/SignUp";
import { useDispatch } from "react-redux";
import { getAsyncThunkData } from "../redux/slices/ProductSlice";
import { useEffect } from "react";
import ProductDetails from "../Pages/ProductDetails";
import CheckOut from "./CheckOut";

function HomePage(){
  
  const dispatch=useDispatch();
  const router=createBrowserRouter([
    {path:"/",element:<NavBar />,children:[
      {index:true,element:<MainPage />},
      {path:"/items/:productName",element:<ProductsSeperation />}
    ]},
    {path:"/:Product",element:<ProductDetails />},
    {path:"/checkout",element:<CheckOut />},
    {path:"/login",element:<LoginPage />},
    {path:"/signup",element:<SignUp />},
  
  ])
 
    return (
        <>
          <RouterProvider router={router} />
         
          
        
        </>
    );
}

export default HomePage;