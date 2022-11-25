import React from "react";
import styles from '../styles/LastTweet.module.css';
import Tweet from "./Tweet";
import Trends from "./Trends";



function LastTweet() {
  
  return (
    <div className={styles.main}>
      
        <div className={styles.contentgauche}>
            <img className={styles.logo} src="logo-blanc.png"/>
        </div>
        <div className={styles.contentmilieu}>
          
          <div className={styles.home}>
          <h1 className={styles.title}>Home</h1>
          <div className={styles.whatsup}>
          <input  className={styles.whatsupinput} type="text" placeholder="What's up?"></input>
          </div>
          <div className={styles.compteur}>
            <p>0/280</p>
            <button className={styles.buttontweet}>Tweet</button>
          </div>
          </div>
           <p className={styles.content}>Already have on account?</p>
           <button className={styles.buttonIn} onClick = {() => <SignIn />} >Sign in</button>
           
        </div>
        <div className={styles.contentdroit}>
            <h1>Trends</h1>

        </div>
      
    </div>
  );
}

export default LastTweet;