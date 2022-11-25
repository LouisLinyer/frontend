import { useEffect, useState, React } from "react";
import styles from '../styles/Home.module.css';
//import { useDispatch, useSelector } from 'react-redux';
import ReactModal from 'react-modal';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
//import styles from '../styles/Login.module.css';

function SignIn() {

//const dispatch = useDispatch();
//const user = useSelector((state) => state.user.value);
const [signInUsername, setSignInUsername] = useState('');
const [signInPassword, setSignInPassword] = useState('');

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

  const handleConnection = () => {
    fetch('http://localhost:3000/users/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: signInUsername, password: signInPassword }),
    }).then(response => response.json())
        .then(data => {
            if (data.result) {
                dispatch(login({ username: signInUsername, token: data.token }));
                setSignInUsername('');
                setSignInPassword('');
            }
        });
};

function openModal() {
    setIsOpen(true);
  }
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  
  function openModalIn() {
    setIsOpenIn(true);
  }
  let subtitleIn;
  const [modalIsOpenIn, setIsOpenIn] = useState(false);

  function afterOpenModalIn() {
    // references are now sync'd and can be accessed.
  }

  function closeModalIn() {
    setIsOpenIn(false);
  }

  let modalContentSignIn = (
    <div>
      <div className={styles.modal} >
      <button className={styles.buttonX} onClick={closeModalIn}>X</button>
      <img className={styles.modallogo} src="logo-blanc.png"/>
        <p className={styles.modaltitle}>Connect to Hackatweet</p>
        <input className={styles.input} type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
        <input className={styles.input} type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
        <button className={styles.modalsign} id="register" onClick={() => handleConnection()}>Sign In</button>
      </div>
    </div>
  );

  return (

        <div>
            <button onClick={openModalIn}className={styles.buttonIn}>Sign in</button>
                <Modal isOpen={modalIsOpenIn} onAfterOpen={afterOpenModalIn} onRequestClose={closeModalIn} className={styles.modalcontainer} contentLabel="Example ModalIn">
                 {modalContentSignIn}
                </Modal>
        </div>
      
  );
}

export default SignIn;