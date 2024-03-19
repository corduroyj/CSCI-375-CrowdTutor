import styles from './App.module.scss';
import Classnames from 'classnames';

function App() {
    return (
        <div className={styles.App}>
            <div className={styles['login-form']}>
                <div>
                    <h1>Login</h1>
                    <form className={styles['form-label']}>
                        <label className={styles['form-label']}>First name:</label>
                        <input type="text" className={styles['form-inputs']} />
                        <hr className={styles['form-hr']} />
                        <label>Last name:</label>
                        <input type="text" className={styles['form-inputs']} />
                        <hr className={styles['form-hr']} />
                        <br />
                        <input type="submit" value="LOGIN" className={styles['form-btn']} />
                    </form>
                </div>
                <div>
                    Don&apos;t have an account?
                    <input type="submit" value="Create an Account" className={styles['create-btn']} />
                </div>
            </div>
        </div>
    );
}

export default App;
