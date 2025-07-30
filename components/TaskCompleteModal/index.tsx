'use client';

import styles from './TaskCompleteModal.module.css';

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
        {/* Reusing global banner styles */}
        <div className="reward-banner">
          <span>{bannerLabel}</span>
          <span className="done-label">{doneLabel}</span>
        </div>

        <h2>{heading}</h2>
        <img src="/complete-task.jpg" alt="Coins" className={styles.image} />

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
