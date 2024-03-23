import styles from "../CSS/MainPageItems.module.css";
import { Link } from "react-router-dom";
import { db } from "../Firebase/firebaseInit";
import { doc, onSnapshot } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { store } from "../redux/store";
import { useSelector } from "react-redux";
function MainPageItems(){
    const Products=useSelector((state)=>state.productsReducer.Products);
   
   


    return (
        <div className={styles.mainpageItemsContainer}>
            <ul className={styles.mainPageItemsList}>
                {Products.map((item,index)=>(
                    
                    <Link key={index} to={`/items/${item.name}`} className={styles.mainPageItem}>
                        <img src={item.image} alt="No image" className={styles.mainPageItemImage} />
                        <p className={styles.mainPageItemText}>{item.name}</p>
                       
                        
                    </Link>
                ))}
               
              

            </ul> 

        </div>
    )

}

export default MainPageItems;