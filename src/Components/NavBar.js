import styles from "../CSS/NavBar.module.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../Firebase/firebaseInit";
import { onAuthStateChanged } from "firebase/auth";
function NavBar(){
    const [user,loading,error]=useAuthState(auth);
    if(user){console.log(user.uid)};
    
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
                <input type="text" className={styles.navbarSearchBox} />
            </div>
            <div className={styles.navbarItemsContainer}>
                <div className={styles.navbarUserContainer}>
                    <Link to="/login">{
                        onAuthStateChanged(auth,(user)=>{
                            if(user){
                                 return <div>{console.log(user.email)}</div>
                            }
                            else
                            {

                            }
                        })
                    }<img src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png" alt="No User Icon" className={styles.navbarIcon}/></Link>
                </div>
                
                <div className={styles.navbarCartContainer}>
                    <img src="https://cdn-icons-png.flaticon.com/128/4903/4903482.png" alt="No cart icon" className={styles.navbarIcon} />

                </div>
            </div>
        </div>
        <Outlet />
        </>
    );
}

export default NavBar;