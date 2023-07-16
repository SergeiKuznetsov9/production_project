import { useState } from "react";
import styles from './Counter.module.scss'

export const Counter = () => {
  const [counter, setCounter] = useState(1);
  return (
    <>
      <div>{counter}</div>
      <button onClick={() => setCounter((prev) => prev + 1)} className={styles['incr-button']}>Increase</button>
    </>
  );
};
