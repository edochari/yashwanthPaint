import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import CheckOutItems from '../Components/CheckOutItem';
import { useSelector } from 'react-redux';
import styles from "../CSS/CheckOut.module.css";
import { useState,useEffect } from 'react';
function CheckOut(props) {
    const {cartItems,totalPrice}=useSelector(state=>state.CartReducer);
    

    useEffect(()=>{
        
    },[totalPrice]);
    return (
        <div className={styles.checkout_body}>
             <Grid container >
                 <Grid item={10}>
                    <div className={styles.checkout_container}>
                        <div style={{fontSize: "30px" , fontWeight: "500" , padding : "20px 0px 0px 20px"}}>Shopping Cart</div>
                        <div>
                            { 
                                cartItems.length >0 ?
                                cartItems.map( (value) => (
                                    <CheckOutItems definition={value} />
                                ))
                                : <div style={{height: "100vh", margin: "30px" }}> Please buy something</div>
                            }
                          
                        </div>
                    </div>
                 </Grid>
                 <Grid item={2}>
                    <div style={{ width: "300px", height:"200px", padding: "20px", marginTop: "25px", backgroundColor: "white"}}>
                        <div style={{ fontSize: "26px"}}>Subtotal :{totalPrice} </div>
                        <div style={{paddingTop : "25px "}}>
                            <button className={styles.placeorder_button} >Proceed to Buy</button>
                        </div>
                    </div>
                 </Grid>
             </Grid>
        </div>
    );
}

export default CheckOut;