'use client';

import { useSelector } from 'react-redux';
import Image from 'next/image';
import styles from './Header.module.css';
import coinIcon from '/public/coin-icon.png'; // replace with correct path to the coin icon if needed

export default function Header() {
  const rewardPoints = useSelector((state: any) => state.rewards.value);

  return (
    <header className={styles.headerWrapper}>
      {/* Top row: Time + Icons */}
      <div className={styles.topRow}>
        <span className={styles.time}>9:41</span>
        <div className={styles.topIcons}>
          <span className={styles.icon}>📶</span>
          <span className={styles.icon}>🔋</span>
        </div>
      </div>

      {/* Middle row: Profile + Search + Bell */}
      <div className={styles.middleRow}>
        <div className={styles.profilePhoto}></div>
        <div className={styles.middleIcons}>
          <span className={styles.icon}>🔍</span>
          <span className={styles.icon}>🔔</span>
        </div>
      </div>

      {/* Bottom row: Balance & Rewards */}
      <div className={styles.balanceCard}>
        <div className={styles.balanceRow}>
          <div className={styles.balanceItem}>
            <span className={styles.label}>Total Balance</span>
            <span className={styles.amount}>Rs <strong>12,406</strong></span>
          </div>
          <div className={styles.balanceItem}>
            <span className={styles.label}>My Rewards</span>
            <span className={styles.amount}>
              <strong>{rewardPoints}</strong> points
            </span>
          </div>
        </div>

        <div className={styles.actionsRow}>
          <button className={styles.addCash}>+ Add Cash</button>
          <button className={styles.earnPoints}>
            <Image src={coinIcon} alt="coin" width={16} height={16} /> Earn points
          </button>
        </div>
      </div>
    </header>
  );
}
