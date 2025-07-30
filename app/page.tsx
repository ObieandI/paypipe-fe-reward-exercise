'use client';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UpgradeModal from '@/components/UpgradeModal';
import TaskCompleteModal from '@/components/TaskCompleteModal';
import CountdownCard from '@/components/CountdownCard';
import { incrementBy } from '@/store/rewardSlice';

export default function Page() {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [hasUpgraded, setHasUpgraded] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(60); // Shared timer

  const dispatch = useDispatch();

  // Shared countdown timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
      {!showUpgradeModal && !showCompleteModal && !hasUpgraded && (
        <CountdownCard onClick={handleUpgradeClick} secondsLeft={secondsLeft} />
      )}

      {(showUpgradeModal || showCompleteModal) && (
        <div className="modal-backdrop">
          {showUpgradeModal && (
            <UpgradeModal
              onUpgradeClick={handleConfirmUpgrade}
              onClose={handleCloseUpgradeModal}
              secondsLeft={secondsLeft} // pass shared timer
            />
          )}

          {showCompleteModal && (
            <TaskCompleteModal onClose={handleCloseComplete} />
          )}
        </div>
      )}
    </main>
  );
}
