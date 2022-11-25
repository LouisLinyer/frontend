import React from "react";
import styles from '../styles/Home.module.css';
import Modal from 'react-modal';
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function Login() {
  const customStyles = {
    content: {
      top: '10%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, 50%)',
    },
  };

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.content1}>
          <img className={styles.logo1}src="neke1.jpg" alt="fondecran" />
      </div>
      <div className={styles.content}>
      <div>
          <img className={styles.logo} src="logo-blanc.png"/>
          <h1 className={styles.title}>See what's <br>
          </br>happening</h1>
          <h3 className={styles.content1}>Join Hackatweat today.</h3>
          <SignUp/>
           <p className={styles.content}>Already have on account?</p>
          <SignIn />
          </div>
      
      </div>
      </main>
    </div>
  );
}

export default Login;

