import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from '../styles/LastTweet.module.css';
import Tweet from "./Tweet";
import Trends from "./Trends";
import user, {logout} from '../reducers/user';
import Link from 'next/link';
import Login from "./Login";



function LastTweet() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);

    const handleLogout = () => {
		dispatch(logout());
        return <Login/>
	};

    fetch('http://localhost:3000/users/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: user.username, firstname: user.firstname }),
    }).then(response => response.json())
        .then(data => {
            return ({ username: data.username, firstname: data.firstname });
                     }
        )
       
  
  return (
    <div className={styles.main}>
        <div className={styles.contentgauche}>
        <img className={styles.logo} src="logo-blanc.png"/>
        <div className={styles.userlogout}>
                <div>
                <img className={styles.logo2} src="Image1.png"/>
                </div>
       
                <div className={styles.firstglobalgauche}> 
            <div className={styles.firstnamegauche}>
                {user.firstname}
                console.log({user.firstname})
            </div>
            <div className={styles.firstnamegauche}>
                <p>@{user.username}</p>
            </div>
        </div>
       </div>
        <div>
            <Link href="/login">
            <button className={styles.buttonlogout} onClick={() => handleLogout()}>logout</button>
            </Link>
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