'use client';

import styles from './TaskCompleteModal.module.css';
import Image from 'next/image';


type Props = {
  onClose: () => void;
  bannerLabel?: string;
  doneLabel?: string;
  heading?: string;
  rewardText?: string;
  pointsEarned?: string;
  buttonLabel?: string;
};

export default function TaskCompleteModal({
  onClose,
  bannerLabel = 'Upgrade & Earn',
  doneLabel = '✓ Done',
  heading = 'Task complete',
  rewardText = 'You have earned',
  pointsEarned = '40 Points',
  buttonLabel = 'Continue',
}: Props) {
  return (
    <div className={styles.modal}>
      <div className="modal-card">
        <div className="reward-banner">
          <span>{bannerLabel}</span>
          <span className="done-label">
            <span role="img" aria-label="check" className="check-icon">✓</span> {doneLabel.replace('✓ ', '')}
          </span>     
        </div>

        <h2>{heading}</h2>
          <div className={styles.imageWrapper}>
            <Image
              src="/coins.png"
              alt="Coins"
              fill
              className={styles.image}
            />
          </div>
        <p>
          {rewardText}{' '}
          <span className="bonus-points">{pointsEarned}</span>
        </p>

        <button className="global-button" onClick={onClose}>
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}
