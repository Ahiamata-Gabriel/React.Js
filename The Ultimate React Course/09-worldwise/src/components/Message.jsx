import styles from "./Message.module.css";

function Message({ message }) {
  return (
    <p className={styles.message}>
      <span role="img">👋 Add city by clicking city on the map</span> {message}
    </p>
  );
}

export default Message;
