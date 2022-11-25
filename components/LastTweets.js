import React from "react";
import styles from '../styles/LastTweet.module.css';
import Tweet from "./Tweet";
import Trends from "./Trends";



function LastTweet() {
  
  return (
    <div className={styles.main}>
      
        <div className={styles.contentgauche}>
            <img className={styles.logo} src="logo-blanc.png"/>
            <div>
                fetch
            </div>
        </div>
        <div className={styles.contentmilieu}>
          
          <div className={styles.home}>
          <h1 className={styles.title}>Home</h1>
          <div className={styles.whatsup}><textarea className={styles.comment} maxlength='280' >
          <input  className={styles.whatsupinput} size='280' type="text" placeholder="What's up?"></input></textarea>
          </div>
          <div className={styles.compteur}>
            <p>0/280</p>
            <button className={styles.buttontweet} >Tweet</button>
          </div>
          </div>
                 
          </div>
        <div className={styles.contentdroit}>
            <h1>Trends</h1>
            <div className={styles.hashtrend}>
                0 #hashtag
            </div>

        </div>
      
    </div>
  );
}

export default LastTweet;