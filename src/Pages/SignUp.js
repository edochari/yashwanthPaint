import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import styles from '../CSS/LoginPage.module.css';
import {auth} from "../Firebase/firebaseInit";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { db } from '../Firebase/firebaseInit';
import { onSnapshot } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { setDoc } from 'firebase/firestore';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signingUp, setSigningUp] = useState('');
 
  const navigate=useNavigate();


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
    .then(async (userCredentials)=> {
      await setDoc( doc(db, 'users',userCredentials.user.uid ), 
      { email:email,
      name:name,
      cart:[]})
  
  .then(() => {
    console.log("user",userCredentials);
    console.log("User document created in Firestore");
  })
  .catch(error => {
    console.error("Error creating user document in Firestore: ", error);
  });
  updateProfile(auth.currentUser, {
    displayName: name
  }).then(() => {
   console.log("Profile updated");
  })
     
       
  });
    
        navigate(-1);
    
    
  }
  
       
    

   
  

  
  return (
    <form className={styles.loginForm} onSubmit={handleFormSubmit}>
      <span className={styles.loginSignupHeader}> Signup</span>
      <div className={styles.field}>
        <input
          placeholder="Name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="new-password"
        />
      </div>
      <div className={styles.field}>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
         
        />
      </div>
      <div className={styles.field}>
        <input
          placeholder="password"
          type="password"
          required
          value={password}
          onChange={(e) => {e.preventDefault();setPassword(e.target.value)}}
        />
      </div>
      <div className={styles.field}>
        <input
          placeholder="confirm Password"
          type="password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
     
        <button disabled={signingUp} className={styles.buttons}>
          SignUp
        </button>
      
    </form>
  );
}

export default SignUp;