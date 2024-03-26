import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../Firebase/firebaseInit";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { query } from "firebase/firestore";
import { useState } from "react";
import styles from "../CSS/ProductPage.module.css";
import { Link } from "react-router-dom";
function ProductPage(){
    const {productName}=useParams();
    const [Products,setProducts]=useState([]);
    
    useEffect(()=>{
        getData();
    },[]);
    async function getData(){
        let docRef=collection(db,"Paints");
        const snapShot= await getDocs(docRef);
        console.log(productName);
        const docs=snapShot.docs.map((doc)=>({...doc.data(),id:doc.id}));
        const Details=query(collection(db,"Paints",productName,"Products"));
        const ProductDetails=await getDocs(Details);
        const Products=ProductDetails.docs.map((doc)=>({...doc.data(),id:doc.id}));
        setProducts(Products);
        

    
        
    }
    
    return (
        
          <div className={styles.ProductsContainer}>
             {Products.map((Product,index)=>(
                
                <div key={index} className={styles.Product} >
                    
                    <Link to={`/${encodeURIComponent(JSON.stringify(Product))}`} style={{"textDecoration":"none"}}><img src={Product.image}  alt="No image" className={styles.ProductImage} />
                    <p style={{"fontSize":"large","color":"brown"}}>{Product.name}</p>
                    <p><img src="https://cdn-icons-png.flaticon.com/128/7204/7204809.png" style={{"height":"2vh","width":"2vw"}} />{Product.Price}</p>
                    </Link>
                    <p style={{"fontSize":"x-large"}}>{Product.description}</p>

                </div>

             ))}


          </div>
          
        
        
    );
}

export default ProductPage;