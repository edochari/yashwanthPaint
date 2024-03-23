import React from "react";
import Grid from '@mui/material/Grid';


import getSymbolFromCurrency from 'currency-symbol-map';
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import styles from "../CSS/ProductDetails.module.css";


function ProductDetails(){
 
  const { Product } = useParams();
  const productDetails = JSON.parse(decodeURIComponent(Product));
 

  
  useEffect(()=>{
    
    
    
  
  })
  return (
    <div>
            <Grid container>
              <Grid item xs={5}>
                <div className={styles.placeholder_image}>
                  <img src={productDetails.image}  width="320px" />
                  </div>
              </Grid>
              <Grid item xs={3}>
                <div className={styles.placeholder_description}>
                    <div className={styles.laceholder_description_firstpart}>
                        <div style={{fontSize:"40px",margin:"3px"}}>{productDetails.name}</div>
                       
                    </div>
                    <div className={styles.placeholder_description_secondpart}>
             
                        <div className={styles.product_price}>
                          {getSymbolFromCurrency('INR') }
                          {productDetails.Price}
            
                        </div>
                        <div className={styles.placeholder_description}>
                          {productDetails.description}
                        </div>
                    </div>

                </div>
                
              </Grid>
              <Grid item xs={3}>
              
                        <div className={styles.placeholder_order}>
                            
                            <div > 
                                <Link to="/checkout">
                                <button className={styles.placeorder__button+' '+styles.addtocart} >Add to Cart</button>
                                </Link>
                                
                                
                                    <button className={styles.placeorder__button+' '+styles.buynow}>Buy Now</button>
                                
                            </div>
                        </div>
                   
              </Grid>

           </Grid>
    
    </div>
    );
}

export default ProductDetails;
//  },[]);

// //   const add=(product)=>
// //   {
// //     dispatch(addToCart(product));
// //   }
//     return (
//         <div>
          //  <Grid container>
          //     <Grid item xs={5}>
          //       <div className="placeholder_image">
          //         <img src={productDetails.image}  width="320px" />
          //         </div>
          //     </Grid>
          //     <Grid item xs={4}>
          //       <div className="placeholder_description">
          //           <div className="placeholder_description_firstpart">
          //               <div style={{fontSize:"40px",margin:"3px"}}>{productDetails.name}</div>
                       
                     
          //           </div>
          //           <div className="placeholder_description_secondpart">
                        
          //               <div className="product_price">
          //                 {getSymbolFromCurrency('INR') }
          //                 {productDetails.Price}
            
          //               </div>
          //           </div>

          //       </div>
                
          //     </Grid>
          //     <Grid item xs={3}>
              
          //               <div className="placeholder_order">
          //                   <div><strong>Without Exchange</strong></div>
          //                   <div>50,999</div>
          //                   <div style={{ marginTop: "10px"}}><strong>Add an Accessory</strong></div>
          //                   <div>
          //                       <label><input type="checkbox" ></input>Apple Airpods</label><br></br>
          //                       <label><input type="checkbox" ></input>Apple 20W USB Power Adapter</label>
          //                   </div>
          //                   <div > 
          //                       <Link to="/checkout">
          //                       <button className="placeorder__button addtocart" onClick={()=>{add(ProductDetails)}} >Add to Cart</button>
          //                       </Link>
                                
                                
          //                           <button className="placeorder__button buynow">Buy Now</button>
                                
          //                   </div>
          //               </div>
                   
          //     </Grid>

          //  </Grid>
        
