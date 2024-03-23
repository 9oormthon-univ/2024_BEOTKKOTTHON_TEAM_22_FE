'use client';

import React from 'react';
import type { TipsRanking } from '@/apis/getRankingTips';
import MainItem from './MainItem';

interface MainBoxProps {
  tipsData: TipsRanking[];
}

const MainBox = ({ tipsData }: MainBoxProps) => {
  return (
    <div className="no-scrollbar grid grid-cols-2 overflow-y-hidden xs:gap-[10px] sm:gap-[12px] md:gap-[18px] lg:gap-[22px]">
      {tipsData.map((item) => (
        <MainItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MainBox;
