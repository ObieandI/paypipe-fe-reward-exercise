'use client';

import styles from './TaskCompleteModal.module.css';

type Props = {
  onClose: () => void;
};

export default function TaskCompleteModal({ onClose }: Props) {
  return (
    <div className={styles.modal}>
      <div className={styles.card}>
        <div className={styles.header}>
          <span className={styles.badge}>Upgrade & Earn</span>
          <span className={styles.done}>✓ Done</span>
        </div>
        <h2>Task complete</h2>
        <img src="/coins.png" alt="Coins" className={styles.image} />
        <p>You have earned <span className={styles.points}>40 Points</span></p>
        <button className={styles.continue} onClick={onClose}>Continue</button>
      </div>
    </div>
  );
}
    