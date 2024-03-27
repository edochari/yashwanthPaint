import styles from '../CSS/LoginPage.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../Firebase/firebaseInit";
import { useNavigate } from 'react-router-dom';

const Login=()=>{
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
   const navigate=useNavigate();
   const handleSubmit=async (e)=>{
     e.preventDefault();
     
     signInWithEmailAndPassword(auth,email,password)
     .then((userCredentials)=>{
      console.log("user",userCredentials);
     }).catch((error)=>{
      console.log(error);
     });
    
     navigate(-1);
   }

   return (
    <div className={styles.loginFormContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
          <span className={styles.loginSignupHeader}>Login</span>

          <div className={styles.field}>
             <input type="email" placeholder='Email' value={email} 
             onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className={styles.field}>
             <input type="password" placeholder='password' value={password} 
             onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div onClick={handleSubmit} className={styles.buttons}>Login</div>
          <Link to="/signup"  className={styles.buttons} >
               Register</Link>
          

      </form>
      </div>
   )
}

export default Login;