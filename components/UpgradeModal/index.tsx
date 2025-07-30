'use client';

import styles from './UpgradeModal.module.css';

type Props = {
  onUpgradeClick: () => void;
  onClose: () => void;
  secondsLeft: number;
};

const UpgradeModal = ({ onUpgradeClick, onClose, secondsLeft }: Props) => {
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <div className={`modal-card ${secondsLeft <= 30 ? 'urgent' : ''}`}>
      <div className={styles.closeRow}>
        <button className={styles.close} onClick={onClose}>
          &times;
        </button>
      </div>

      <div className="reward-banner">
        <span>Upgrade & Earn</span>
        <span role="img" aria-label="coins">💰</span>
        <span>20 Points</span>
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

      <div className="reward-points-wrapper">
        <span className={styles.strike}>20 Points</span>
        <span className="bonus-points">40 Points</span>
      </div>

      <button className="global-button" onClick={onUpgradeClick}>
        Upgrade account
      </button>
    </div>
  );
};

export default UpgradeModal;
