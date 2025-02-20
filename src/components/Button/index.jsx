/* eslint-disable react/prop-types */
import styles from './styles.module.css'

export default function Button(props) {
  return (
    <>
      <button className={styles.wrapper}>{props.text}</button>
    </>
  );
}
