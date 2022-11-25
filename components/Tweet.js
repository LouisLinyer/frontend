import React from "react";
import styles from '../styles/LastTweet.module.css';
import LastTweets from "./LastTweets";
import Login from "./Login";

function Tweet() {

const newTweet = ` 
  <div class="row new-row">
    <img class="avatar" src="images/avatar-1.jpg" />
    <div class="text-container">
      <h6>${firstname, username}</h6>
      <p>heure écoulée</p>
    </div>
     <input></input>
    <div>
    </div>
    <span class="delete">✖</span>
  </div>
`;
  
  return (
   <>
   {newTweet}
   </>
  );
}

export default Tweet