import NavBar from "../Components/NavBar";
import MainPage from "./MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsSeperation from "./ProductsSeperation";
import MainPageItems from "../Components/MainPageItems";
import LoginPage from "../Pages/LoginPage";
import SignUp from "../Pages/SignUp";

function HomePage(){
  const router=createBrowserRouter([
    {path:"/",element:<NavBar />,children:[
      {index:true,element:<MainPage />},
      {path:"/items",element:<ProductsSeperation />}
    ]},
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