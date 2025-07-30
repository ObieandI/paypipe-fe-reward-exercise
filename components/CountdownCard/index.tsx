'use client';

type Props = {
  onClick: () => void;
  secondsLeft: number;
};

const CountdownCard = ({ onClick, secondsLeft }: Props) => {
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const isUrgent = secondsLeft <= 30;

  return (
    <div className="countdown-wrapper">
      <div className="countdown-banner">
        <span className="countdown-text">Time left:</span>
        <span className="countdown-timer">
          {String(minutes).padStart(2, '0')} Minutes {String(seconds).padStart(2, '0')} Seconds
        </span>
      </div>

      <div
        className={`upgrade-card${isUrgent ? ' urgent' : ''}`}
        onClick={onClick}
      >
        <div className="upgrade-left">
          <div className="upgrade-points">40</div>
        </div>
        <div className="upgrade-center">
          <div className="upgrade-title">Upgrade your account</div>
          <div className="upgrade-subtitle">
            Complete before the timer runs out and earn extra coins
          </div>
        </div>
        <div className="upgrade-arrow">&#8250;</div>
      </div>
    </div>
  );
};

export default CountdownCard;
