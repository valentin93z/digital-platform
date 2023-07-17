'use client';
import DevelopPage from '@components/DevelopPage';
import { useState, useEffect } from 'react';

const MyProfilePage = () => {
  return (
    <div className="font-rubik px-5 md:px-20 unselectable">
      <div>
        <DevelopPage />
      </div>
    </div>
  )
}

export default MyProfilePage;