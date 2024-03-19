'use client';

import MainBox from '@/components/Main/MainBox';
import MainCategory from '@/components/Main/MainCategory';
import { Response } from '@/apis/getRankingTips';
import { useState } from 'react';

interface MainProps {
  tips: Response;
}

export default function Main({ tips }: MainProps) {
  const [currentCode, setCurrentCode] = useState(1);

  const handleClickedCategory = (category_code: number) => {
    setCurrentCode(category_code);
  };

  if (tips && currentCode !== 1) {
    const filteredTips = tips.tips.filter(
      (tip) => tip.category === currentCode,
    );

    if (filteredTips) {
      return (
        <>
          <MainCategory handleClickedCategory={handleClickedCategory} />
          <MainBox tipsData={filteredTips} />
        </>
      );
    }
  }

  return (
    <>
      <MainCategory handleClickedCategory={handleClickedCategory} />
      <MainBox tipsData={tips.tips} />
    </>
  );
}
