'use client';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import styles from './Header.module.css';

const Header = () => {
  const points = useSelector((state: RootState) => state.reward.points);

  return (
    <header className={styles.header}>
      <h1>Reward System</h1>
      <div className={styles.points}>Points: {points}</div>
    </header>
  );
};

export default Header;
