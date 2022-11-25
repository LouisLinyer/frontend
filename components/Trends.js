import React from "react";
import styles from '../styles/LastTweet.module.css';
import LastTweet from "./LastTweets";
import Hashtag from "./Hashtag"

function Trends() {

    let hashtag="No tweets found with #hashtagname";
    const getHashtag = () => {
        fetch('http://localhost:3000/tweets', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({message: data.message}),
        }).then(response => response.json())
            .then(data => {
                if (message.includes('#')) {
                    let pattern = /^#/gi
                    let hashtag=text.match(pattern)
                    return hashtag.forEach(element=>console.log(element));
                }
            });
    };;
    let countHashtag=0;
    let count=hashtag.forEach(element=>countHashtag +=1);
    /*
    function NumberHashtag (){
        s = document.getElementById("inputString").value;
        s = s.replace(/(^\s)|(\s$)/gi,"");
        s = s.replace(/[ ]{2,}/gi," ");
        s = s.replace(/\n /,"\n");
        document.getElementById("wordcount").value = s.split(' ').length;
/
    const displayHashtag= () => {
        fetch('http://localhost:3000/tweets', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tweet),
        }).then(response => response.json())
            .then(tweet => {
                if (tweet.includes({hashtagClick})) {
                    return tweet;
                }
            });
    };
/
router.get('/tweet', (req, res) => {
  Tweet.find({username: req.body.username})
    .then(data => {
      let message = data.message;
      res.json({message: data.message});
      return message;
    });
});
*/

return (
  <div className={styles.main}>
      <div className={styles.contentdroit}>
          <h1>Trends</h1>
          <div className={styles.hashtrend}>
            <Link href="/hashtag">
            <button className={styles.modalsign}  onClick={() => getHashtag()}>{hashtag}
              {countHashtag} 
            </button>
            </Link>
          </div>
      </div>
    
  </div>
);
  }

  export default Trends;

