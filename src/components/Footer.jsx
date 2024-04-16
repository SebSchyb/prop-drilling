import styles from "./Footer.module.css";

function Footer(props) {
  return (
    <footer className={styles.footer}>
      <p>Her er en meget standard footer hvor jeg gerne vil vise {props.email}</p>
    </footer>
  );
}

export default Footer;
