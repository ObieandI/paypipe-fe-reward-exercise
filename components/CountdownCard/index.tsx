'use client';

import { useEffect, useState } from 'react';
import styles from './CountdownCard.module.css';

type Props = {
  onUpgradeClick: () => void;
  onClose: () => void;
};

const CountdownCard = ({ onUpgradeClick, onClose }: Props) => {
  const [secondsLeft, setSecondsLeft] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <div className={styles.card}>
      <div className={styles.closeRow}>
        <button className={styles.close} onClick={() => onClose()}>
        &times;
        </button>
      </div>

      <div className={styles.banner}>
        <span className={styles.bannerText}>Upgrade & Earn</span>
        <span role="img" aria-label="coins">💰</span>
        <span className={styles.bannerText}>20 Points</span>
        <span className={styles.x2}>X2</span>
      </div>

      <div className={styles.timerRow}>
        <div>
          <div className={styles.timerBox}>{String(minutes).padStart(2, '0')}</div>
          <div className={styles.label}>Minutes</div>
        </div>
        <div>:</div>
        <div>
          <div className={styles.timerBox}>{String(seconds).padStart(2, '0')}</div>
          <div className={styles.label}>Seconds</div>
        </div>
      </div>

      <p className={styles.instructions}>
        Upgrade account before the timer runs out to earn double the coins
      </p>

      <p className={styles.points}>
        <span className={styles.strike}>20 Points</span>
        <span className={styles.bonus}>40 Points</span>
      </p>

      <button className={styles.button} onClick={() => onUpgradeClick()}>
        Upgrade account
      </button>
    </div>
  );
};

export default CountdownCard;
