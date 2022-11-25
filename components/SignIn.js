import { useState } from 'react';
import { useSelector } from 'react-redux';
import { login } from '../reducers/user';
import styles from '../styles/SignIn.module.css';
import {Modal} from 'antd';
import Link from 'next/link';

function SignIn(){
    const user = useSelector((state) => state.user.value);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');

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
                setIsModalVisible(false)
            }
        });
};

const showModal = () => {
  setIsModalVisible(!isModalVisible);
};

let modalContent;
if (!user.isConnected) {
    modalContent = (
        <div className={styles.registerContainer}>
                <img className={styles.logo} src="logo-blanc.png"/>
                <h2>Connect to Hackatweet</h2>
                <input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
                <input type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
                <button id="connection" onClick={() => handleConnection()}><Link href="/lasttweets"><span className={styles.link}>Sign In</span></Link></button>
           
        </div>
    );
}

return (
    <>
    {isModalVisible && <div id="react-modals">
		<Modal getContainer="#react-modals" className={styles.modal} visible={isModalVisible} closable={false} footer={null}>
					{modalContent}
		</Modal>
	</div>}
    </>
);
}

export default SignIn;