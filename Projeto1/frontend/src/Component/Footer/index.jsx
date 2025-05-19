import styles from "./Footer.module.css";

function Footer(){
    return (
        <footer className={styles.footer}>
        <p>
            <span className={styles.bold}>
                meu pet sumiu
            </span>
            &copy;2025
        </p>
        </footer>
    )
}
export default Footer;