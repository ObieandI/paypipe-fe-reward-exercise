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
      {/* Header is now handled globally in ClientLayout */}

      {!showUpgradeModal && !showCompleteModal && !hasUpgraded && (
        <CountdownCard onClick={handleUpgradeClick} />
      )}

      {(showUpgradeModal || showCompleteModal) && (
        <div className="modal-backdrop" />
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
