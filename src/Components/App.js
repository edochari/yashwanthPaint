import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import Signup from '../Pages/SignUp';
import {store} from "../redux/store";
import { Provider, useDispatch } from 'react-redux';
import MainPage from '../Pages/MainPage';
import { useEffect } from 'react';
import { UseDispatch } from 'react-redux';
import { getAsyncThunkData } from '../redux/slices/ProductSlice';
function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getAsyncThunkData());
 },[dispatch]);
  return (
   
      <HomePage />
    
      
   

     
  );
}

export default App;
