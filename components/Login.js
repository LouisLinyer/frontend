import React from "react";
import styles from '../styles/Login.module.css';
import SignIn from "./SignIn";



function Login() {
  
  return (
    <div className={styles.main}>
      
        <div className={styles.contentgauche}>
          <img className={styles.logo1} src="Neke1.jpg" alt="fondecran" />
        </div>
        <div className={styles.contentdroit}>
          <div>
          <img className={styles.logo} src="logo-blanc.png"/>
          </div>
          <div>
          <h1 className={styles.title}>See what's <br>
          </br>happening</h1>
          </div>
          <div>
          <h2>Join Hackatweat today.</h2>
          </div>
          <div>
            <button className={styles.buttonUp}>Sign Up</button>
          </div>
           <p className={styles.content}>Already have on account?</p>
           <button className={styles.buttonIn} onClick = {() => <SignIn />} >Sign in</button>
           
        </div>
      
    </div>
  );
}

export default Login;