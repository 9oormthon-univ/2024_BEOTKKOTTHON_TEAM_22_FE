'use client';

import MainBox from '@/components/main/MainBox';
import MainCategory from '@/components/main/MainCategory';
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
      (tip) => tip.categoryId === currentCode,
    );

    if (filteredTips) {
      return (
        <>
          <MainCategory handleClickedCategory={handleClickedCategory} />
          <div className="flex justify-center">
            <MainBox tipsData={filteredTips} />
          </div>
        </>
      );
    }
  }

  return (
    <>
      <MainCategory handleClickedCategory={handleClickedCategory} />
      <div className="flex justify-center">
        <MainBox tipsData={tips.tips} />
      </div>
    </>
  );
}
