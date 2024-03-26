import styles from "../CSS/NavBar.module.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../Firebase/firebaseInit";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { doc,getDoc } from "firebase/firestore";
import { db } from "../Firebase/firebaseInit";
import { useEffect } from "react";
function NavBar(){
    const [user,loading,error]=useAuthState(auth);
    const navigate=useNavigate();
    const [cartLength,setCartLength]=useState(0);
    const [showOptions, setShowOptions] = useState(false);
    const handleSearchBarClick = () => {
        setShowOptions(true);
      };
    const getCartLength=async ()=>{
        if(auth.currentUser)
        {
            const userId=auth.currentUser.uid;
            let docRef=doc(db,'users',userId);
            const docSnap=await getDoc(docRef);
            console.log("doc snap",docSnap.data().cart.length)
            setCartLength(docSnap.data().cart.length);
            console.log(cartLength);
        }
       

    }
      
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
                navigate("/");
                console.log("Signed out successfully")
            }).catch((error) => {
            // An error happened.
            });
    }
    useEffect(()=>{
        getCartLength();
    },[cartLength]);
    
    
    return (
        <>
        <div className={styles.navbarContainer}>
            <div className={styles.navbarLogoContainer}>
                <img src="https://cdn-icons-png.flaticon.com/128/1959/1959672.png" alt="No image" className={styles.navbarLogo} />
                <div className={styles.navbarLogoNameContainer}>
                <div className={styles.navbarLogoName}>Yashwanth</div>
                <div className={styles.navbarLogoName}> Paints</div>
                </div>
            </div>
            <div className={styles.navbarSearchContainer}>
                <input type="text" className={styles.navbarSearchBox} onClick={handleSearchBarClick} />
                {showOptions && (
        <div className={styles.searchBarOptions}>
          <div onClick={() => {navigate("/items/Interior"); window.location.reload();}}>Interior</div>
          <div onClick={() => {navigate("/items/Exterior"); window.location.reload();}}>Exterior</div>
          <div onClick={() => {navigate("/items/Wall Papers"); window.location.reload();}}>Wall Papers</div>
          <div onClick={() => {navigate("/items/Wall Stickers"); window.location.reload();}}>Wall Stickers</div>

        </div>
      )}
    
            </div>
            <div className={styles.navbarItemsContainer}>
                <div className={styles.navbarUserContainer}>
                    <Link to="/login">
                    <img src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png" alt="No User Icon" className={styles.navbarIcon}/></Link>
                </div>
                <div className={styles.navbarProfileContainer}>
                {user?<div className={styles.displayName}>{user.displayName}</div>:null}
                {user?<div onClick={handleSignOut} className={styles.displayName}>SignOut</div>:null}
                </div>
                
                <div className={styles.navbarCartContainer}>
                    <img src="https://cdn-icons-png.flaticon.com/128/4903/4903482.png" alt="No cart icon" className={styles.navbarIcon} />
                    {
                        user?(<div className={styles.cartItemsCount}>{cartLength}</div>):null
                    }
                    
                    

                </div>
            </div>
        </div>
        <Outlet />
        </>
    );
}

export default NavBar;