import styles from '../styles/styles.module.css'
import {TEXTS} from "../constants/texts.ts";
import {useAuthentification} from "../hooks/useAuthentification.ts";

const LoginPage = () => {
    const { login } = useAuthentification();

    return (
        <div className={styles.pageStyle}>
            <h1>{TEXTS.ENTER}</h1>
            <button onClick={login}>{TEXTS.GOOGLE_ENTER}</button>
        </div>
    );
};

export default LoginPage;