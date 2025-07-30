'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UpgradeModal from '@/components/UpgradeModal';
import TaskCompleteModal from '@/components/TaskCompleteModal';
import CountdownCard from '@/components/CountdownCard';
import { incrementBy } from '@/store/rewardSlice';
import { RootState } from '@/store';

export default function Page() {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [hasUpgraded, setHasUpgraded] = useState(false);
  const dispatch = useDispatch();

const rewardPoints = useSelector((state: RootState) => state.reward.points);

  const handleUpgradeClick = () => {
    setShowUpgradeModal(true);
  };

  const handleConfirmUpgrade = () => {
    dispatch(incrementBy(40));
    setShowUpgradeModal(false);
    setShowCompleteModal(true);
    setHasUpgraded(true);
  };

  const handleCloseUpgradeModal = () => {
    setShowUpgradeModal(false);
  };

  const handleCloseComplete = () => {
    setShowCompleteModal(false);
  };

  return (
    <main className="page-container">
      <div className="header">
        <div className="top-row">
          <span className="time">9:41</span>
          <div className="icons">
            <img src="/signal.svg" alt="Signal" />
            <img src="/wifi.svg" alt="WiFi" />
            <img src="/battery.svg" alt="Battery" />
          </div>
        </div>

        <div className="profile-row">
          <div className="profile-circle"></div>
          <div className="right-icons">
            <img src="/search.svg" alt="Search" />
            <img src="/bell.svg" alt="Notifications" />
          </div>
        </div>

        <div className="balance-card">
          <div className="balance-section">
            <div className="label">Total Balance</div>
            <div className="value">Rs <strong>12,406</strong></div>
            <button className="add-cash-button">+ Add Cash</button>
          </div>
          <div className="rewards-section">
            <div className="label">My Rewards</div>
            <div className="value"><strong>{rewardPoints}</strong> points</div>
            <button className="earn-points-button">
              <img src="/coin.svg" alt="Coin" />
              Earn points
            </button>
          </div>
        </div>
      </div>

      {!showUpgradeModal && !showCompleteModal && !hasUpgraded && (
        <CountdownCard onClick={handleUpgradeClick} />
      )}

      {showUpgradeModal && (
        <UpgradeModal
          onUpgradeClick={handleConfirmUpgrade}
          onClose={handleCloseUpgradeModal}
        />
      )}

      {showCompleteModal && (
        <TaskCompleteModal onClose={handleCloseComplete} />
      )}
    </main>
  );
}
