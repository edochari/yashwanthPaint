import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import CheckOutItems from '../Components/CheckOutItem';
import styles from "../CSS/CheckOut.module.css";
import { useState,useEffect } from 'react';
import { auth } from '../Firebase/firebaseInit';
import { doc } from 'firebase/firestore';
import { db } from '../Firebase/firebaseInit';
import { getDoc } from 'firebase/firestore';
import { updateDoc } from 'firebase/firestore';


function CheckOut(props) {
    
    const [cartItems,setCartItems]=useState([]);
    const [totalPrice,setTotalPrice]=useState(0);
    useEffect(()=>{
      getCartItems();
      getTotalPrice();
        
    },[cartItems]);
    const deleteCartItem=async (id)=>{
        if(auth.currentUser!==null){
            const userId=auth.currentUser.uid;
           let docRef=doc(db,'users',userId);
           const docSnap=await getDoc(docRef);
          let updatedCart=docSnap.data().cart.filter((item)=>item.id!==id);
          await updateDoc(docRef,({cart:updatedCart}));
        
    }

}
    const getCartItems=async ()=>{
        if(auth.currentUser!==null){
        const userId=auth.currentUser.uid;
        let docRef=doc(db,'users',userId);
        const docSnap=await getDoc(docRef);
        setCartItems(docSnap.data().cart);
        }
        
        
    }
    const getTotalPrice=()=>{
        let price=cartItems.reduce((acc,item)=>(
            acc+item.Price
        ),0);
        setTotalPrice(price);
    }
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
                                    <CheckOutItems definition={value} delete={deleteCartItem}  />
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