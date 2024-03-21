import styles from "../CSS/MainPageItems.module.css";
import { Link } from "react-router-dom";
import { db } from "../Firebase/firebaseInit";
import { doc, onSnapshot } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
function MainPageItems(){
    const [documents,setDocuments]=useState([]);
    useEffect(()=>{
       get();

    },[]);
    async function get(){
        let docRef=collection(db,"Paints");
        const snapShot= await getDocs(docRef);
        
        setDocuments(snapShot.docs);
        console.log("documents",documents);
        

    }


    return (
        <div className={styles.mainpageItemsContainer}>
            <ul className={styles.mainPageItemsList}>
                {documents.map((item,index)=>(
                    
                    <Link key={index} to="/items" className={styles.mainPageItem}>
                        <p>{item.name}</p>
                        <img src={item.data().image} alt="No image" />
                        
                    </Link>
                ))}
               
              

            </ul> 

        </div>
    )

}

export default MainPageItems;