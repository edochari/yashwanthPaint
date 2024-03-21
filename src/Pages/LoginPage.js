import styles from '../CSS/LoginPage.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../Firebase/firebaseInit"

const Login=()=>{
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
   const handleSubmit=async (e)=>{
     e.preventDefault();
     signInWithEmailAndPassword(auth,email,password)
     .then((userCredentials)=>{
      console.log(userCredentials);
     }).catch((error)=>{
      console.log(error);
     })
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
          <div className={styles.field} >
             <button >
               {"Log In"}</button>
          </div>
          <div className={styles.linkContainer} >
             <Link to="/signup"  className={styles.link} >
               Register</Link>
          </div>

      </form>
      </div>
   )
}

export default Login;