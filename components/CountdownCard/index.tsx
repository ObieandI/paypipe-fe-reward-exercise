'use client';

import { useEffect, useState } from 'react';

const CountdownCard = ({ onClick }: { onClick: () => void }) => {
  const [secondsLeft, setSecondsLeft] = useState(20); // 20 min 20 sec

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <div className="countdown-wrapper">
      <div className="countdown-banner">
        <span className="countdown-text">Time left:</span>
        <span className="countdown-timer">
          {String(minutes).padStart(2, '0')} Minutes {String(seconds).padStart(2, '0')} Seconds
        </span>
      </div>

      <div className="upgrade-card" onClick={onClick}>
        <div className="upgrade-left">
          <div className="upgrade-points">40</div>
        </div>
        <div className="upgrade-center">
          <div className="upgrade-title">Upgrade your account</div>
          <div className="upgrade-subtitle">Complete before the timer runs out and earn extra coins</div>
        </div>
        <div className="upgrade-arrow">&#8250;</div>
      </div>
    </div>
  );
};

export default CountdownCard;
