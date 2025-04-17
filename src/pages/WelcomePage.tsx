import styles from "../styles/styles.module.css";
import {TEXTS} from "../constants/texts.ts";
import {useAuthentification} from "../hooks/useAuthentification.ts";

const WelcomePage = () => {
    const { user, logout } = useAuthentification();

    return (
        <div className={styles.pageStyle}>
            <h1>
                {TEXTS.WELCOME}, {user?.displayName || "Гость"}!
            </h1>
            <button onClick={logout} className={styles.logoutButton}>
                {TEXTS.LOGOUT_BUTTON}
            </button>
        </div>
    );
};

export default WelcomePage;