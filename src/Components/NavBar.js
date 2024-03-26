import styles from "../CSS/NavBar.module.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../Firebase/firebaseInit";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function NavBar(){
    const [user,loading,error]=useAuthState(auth);
    const navigate=useNavigate();
    const [showOptions, setShowOptions] = useState(false);
    const handleSearchBarClick = () => {
        setShowOptions(true);
      };

      const handleOptionClick = (option) => {
       
        setShowOptions(false);
      };
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
                navigate("/");
                console.log("Signed out successfully")
            }).catch((error) => {
            // An error happened.
            });
    }
    
    
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
                {console.log("main user",user)}
                {user?<div className={styles.displayName}>{user.displayName}</div>:null}
                {user?<button onClick={handleSignOut} className={styles.signOut}>SignOut</button>:null}
                
                <div className={styles.navbarCartContainer}>
                    <img src="https://cdn-icons-png.flaticon.com/128/4903/4903482.png" alt="No cart icon" className={styles.navbarIcon} />
                    {
                        user?<div classname={styles.cartItemsCount}>
                            0
                        
                            </div>
                        :null
                    }
                    

                </div>
            </div>
        </div>
        <Outlet />
        </>
    );
}

export default NavBar;