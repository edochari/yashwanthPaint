import SimpleCarousel from "../Components/Carousel";
import MainPageFooter from "../Components/MainPageFooter";
import MainPageItems from "../Components/MainPageItems";
import styles from "../CSS/MainPage.module.css"
import { useEffect } from "react";
function MainPage(){
    useEffect(()=>{

    },[]);
    return (
        <div className={styles.mainpageContainer}>
        
          <div >
             <SimpleCarousel />


          </div>
           <MainPageItems />
           <MainPageFooter />
          </div>
          
        
        
    );
}

export default MainPage;