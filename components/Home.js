import React from "react";
import styles from '../styles/Home.module.css';

function Home() {

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
            <button className={styles.buttonUp}>Sign Up</button>
           <p className={styles.content}>Already have on account?</p>
           <button className={styles.buttonIn}>Sign in</button>
        </div>
      </div>
      </main>
    </div>
  );
}

export default Home;