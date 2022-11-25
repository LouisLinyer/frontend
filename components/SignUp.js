import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, React } from "react";
import styles from '../styles/Home.module.css';
import ReactModal from 'react-modal';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Link from 'next/link';
import Tweet from './Tweet';
import {login} from '../reducers/user';
import LastTweets from './LastTweets';
//import styles from '../styles/Login.module.css';

function SignUp() {

const dispatch = useDispatch();


  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpFirstName, setSignUpFirstName] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

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

const handleRegister = () => {
    fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname:signUpFirstName, username: signUpUsername, password: signUpPassword }),
    }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    dispatch(login({ firstname:signUpFirstName, username: signUpUsername, token: data.token }));
                    setSignUpFirstName('');
                    setSignUpUsername('');
                    setSignUpPassword('');
                }
                
            });
            return <LastTweets/>
    };

 //<Link href="/lasttweets.js">Articles></Link>   

    const user = useSelector((state) => state.user.value);

function openModal() {
    setModalIsOpen(true);
  }
  let subtitle;
  

function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

function closeModal() {
    setModalIsOpen(false);
  }
let modalContentSignUp = (
    <div>
            <div className={styles.modal} >
            <div>
            <button  className={styles.buttonX} onClick={closeModal}>X</button>
            </div>
            <img className={styles.modallogo} src="logo-blanc.png"/>
            <p className={styles.modaltitle}>Create your Hackatweet account</p>
            <input className={styles.input} type="text" placeholder="Firstname" id="signUpFirstName" onChange={(e) => setSignUpFirstName(e.target.value)} value={signUpFirstName} />
            <input className={styles.input} type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
            <input className={styles.input} type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
            <Link href="/lasttweets">
            <button className={styles.modalsign} id="register" onClick={() => handleRegister()}>Sign Up</button>
            </Link>
      </div>
    </div>
  );
  return (
    <div className={styles.content}>
        <button onClick={openModal} className={styles.buttonUp}>Sign Up</button>
        <Modal isOpen={modalIsOpen} ariaHideApp={false} onAfterOpen={afterOpenModal} onRequestClose={closeModal} className={styles.modalcontainer} contentLabel="Example Modal">
        {modalContentSignUp}
      </Modal>
    </div>
  );
}

export default SignUp;