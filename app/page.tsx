'use client';

import { useState } from 'react';
import CountdownCard from '@/components/CountdownCard';

export default function Home() {
  const [showModal, setShowModal] = useState(true);

  const handleUpgradeClick = () => {
    console.log('Upgrade clicked!');
    alert('Upgrade button clicked!');
  };

  const handleClose = () => {
    console.log('Close clicked!');
    setShowModal(false);
  };

  return (
    <main>
      <h2>Welcome to the Reward System</h2>
      {showModal && (
        <CountdownCard onUpgradeClick={handleUpgradeClick} onClose={handleClose} />
      )}
    </main>
  );
}