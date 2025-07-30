'use client';

import { useSelector } from 'react-redux';
import styles from './Header.module.css';
import { RootState } from '@/store';

export default function Header() {
  const rewardPoints = useSelector((state: RootState) => state.reward.points);

  return (
<header className={styles.headerContainer}>
  <div className={styles.headerContent}>
      {/* Top bar with time and status icons */}
      <div className={styles.statusBar}>
        <span>9:41</span>
        <div className={styles.iconRow}>
          <span role="img" aria-label="signal">📶</span>
          <span role="img" aria-label="battery">🔋</span>
        </div>
      </div>

      {/* Middle row with avatar and action icons */}
      <div className={styles.middleRow}>
        <div className={styles.profile}></div>
        <div className={styles.iconRow}>
          <span role="img" aria-label="search">🔍</span>
          <span role="img" aria-label="bell">🔔</span>
        </div>
      </div>

      {/* Balance and Rewards summary */}
      <div className={styles.summaryCard}>
        <div className={styles.summaryColumn}>
          <span className={styles.label}>Total Balance</span>
          <span className={styles.amount}>Rs <strong>12,406</strong></span>
        </div>
        <div className={styles.summaryColumn}>
          <span className={styles.label}>My Rewards</span>
          <span className={styles.points}><strong>{rewardPoints}</strong> points</span>
        </div>
      </div>

      {/* Action buttons */}
      <div className={styles.buttonRow}>
        <button className={`${styles.cardButton} ${styles.cashButton}`}>
          + Add Cash
        </button>
        <button className={`${styles.cardButton} ${styles.pointsButton}`}>
          🪙 Earn points
        </button>
        </div>
      </div>
    </header>
  );
}
