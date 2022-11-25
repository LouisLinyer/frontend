import React from "react";
import styles from '../styles/Hashtag.module.css';
import Tweet from "./Tweet";
import Trends from "./Trends";



function Hashtag() {
  
  return (
    <div className={styles.main}>
      
        <div className={styles.contentgauche}>
            <img className={styles.logo} src="logo-blanc.png"/>
        </div>
        <div className={styles.contentmilieu}>
          
          <div className={styles.home}>
          <h1 className={styles.title}>Hashtag</h1>
          <div className={styles.whatsup}>
          <input  className={styles.hashtaginput} size='110' type="text" placeholder="#hashtag"></input>
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

export default Hashtag;