import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import styles from '../CSS/LoginPage.module.css';
import {auth} from "../Firebase/firebaseInit";
import { useNavigate } from 'react-router-dom';

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
    .then((userCredentials)=>{
     navigate(-1);
    }).catch((error)=>{
     console.log(error);
    })
   
  };

  
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
      <div className={styles.field}>
        <button disabled={signingUp}>
          {signingUp ? 'Signing up...' : 'Signup'}
        </button>
      </div>
    </form>
  );
};

export default SignUp;